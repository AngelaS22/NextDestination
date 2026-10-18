/* photos.js – real photos for destination cards.
   Looks up the lead image of one Wikipedia article per destination (free-licensed images from Wikimedia Commons)
   in ONE request, caches it for 7 days, and layers it over the local SVG illustration (img/dest/<key>.svg),
   which stays as the fallback when offline or when no photo is found.
   To change a photo, edit the article title in TITLES (any English Wikipedia article that has a lead image). */
(function(){
const TITLES={izmir:'Izmir',zagreb:'Zagreb',basel:'Basel',geneva:'Jet d’Eau',frankfurt:'Frankfurt',hamburg:'Elbphilharmonie',dortmund:'Dortmund',cologne:'Cologne Cathedral',nuremberg:'Nuremberg',stuttgart:'Stuttgart',memmingen:'Memmingen',milan:'Milan Cathedral',bologna:'Piazza Maggiore',bari:'Bari',lyon:'Lyon',eindhoven:'Eindhoven',warsaw:'Warsaw',ljubljana:'Ljubljana',stockholm:'Gamla stan',gothenburg:'Gothenburg',malm:'Turning Torso',bucharest:'Palace of the Parliament',bitola:'Bitola',santorini:'Santorini',istanbul:'Istanbul',rome:'Rome',ohrid:'Ohrid',paris:'Eiffel Tower',london:'Big Ben',barcelona:'Sagrada Família',madrid:'Royal Palace of Madrid',lisbon:'Belém Tower',amsterdam:'Canals of Amsterdam',
vienna:'Schönbrunn Palace',berlin:'Brandenburg Gate',venice:'Grand Canal (Venice)',florence:'Florence Cathedral',athens:'Parthenon',mykonos:'Mykonos',corfu:'Old Fortress, Corfu',
dubrovnik:'Dubrovnik',split:"Diocletian's Palace",krakow:'Wawel Castle',dubai:'Burj Khalifa',cairo:'Great Pyramid of Giza',antalya:'Antalya',malta:'Valletta',larnaca:'Larnaca',
munich:'Marienplatz',brussels:'Grand-Place',zurich:'Zürich',thessaloniki:'White Tower of Thessaloniki',sofia:'Alexander Nevsky Cathedral, Sofia',sarajevo:'Baščaršija',
tirana:'Skanderbeg Square',kotor:'Kotor',nice:'Nice',prague:'Charles Bridge',budapest:'Hungarian Parliament Building',belgrade:'Belgrade Fortress',czechia:'Český Krumlov',bratislava:'Bratislava Castle'};
const KEY='ndPhotos2',TTL=7*864e5;
function applyPhotos(m){
  const css=Object.keys(m).map(k=>`[data-dest="${k}"],[data-img="${k}"]{--img:url("${m[k]}"),url(img/dest/${k}.svg);--sz:cover,auto 135%}`).join('\n');
  if(!css)return;
  const st=document.createElement('style');st.id='photoCss';st.textContent=css;document.head.appendChild(st);
}
function credit(){const p=document.getElementById('photoCredit');if(p)p.textContent=({mk:'Фотографии: Wikipedia / Wikimedia Commons (слободни лиценци).',en:'Photos: Wikipedia / Wikimedia Commons (free licences).',sq:'Fotografitë: Wikipedia / Wikimedia Commons (licenca të lira).'})[lang]||''}
if(typeof window.apply==='function'){const _a=window.apply;window.apply=function(){_a();credit()}}
function parse(j){
  const q=j.query||{},map=o=>(a=>{const m={};(a||[]).forEach(x=>m[x.from]=x.to);return m})(o);
  const nm=map(q.normalized),rd=map(q.redirects),by={};
  Object.values(q.pages||{}).forEach(p=>{if(p.thumbnail&&p.thumbnail.source)by[p.title]=p.thumbnail.source});
  const out={};
  for(const k in TITLES){const t=TITLES[k],n=nm[t]||t,r=rd[n]||n,u=by[r]||by[n]||by[t];if(u)out[k]=u}
  return out;
}
function load(){
  let c=null;try{c=JSON.parse(localStorage.getItem(KEY))}catch(e){}
  if(c&&Date.now()-c.t<TTL&&c.m&&Object.keys(c.m).length){applyPhotos(c.m);return}
  const ks=Object.keys(TITLES),ch=[];for(let n=0;n<ks.length;n+=40)ch.push(ks.slice(n,n+40).map(k=>TITLES[k]));
  const u=a=>'https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&redirects=1&prop=pageimages&piprop=thumbnail&pithumbsize=800&titles='+encodeURIComponent(a.join('|'));
  Promise.all(ch.map(a=>fetch(u(a)).then(r=>r.json()).then(parse))).then(arr=>{const m=Object.assign({},...arr);if(Object.keys(m).length){try{localStorage.setItem(KEY,JSON.stringify({t:Date.now(),m}))}catch(e){}applyPhotos(m)}}).catch(()=>{/* offline: SVG illustrations stay */});
}
load();
})();
