Object.assign(I18N.mk,{s_dest:"Дестинација",s_dph:"Град или земја…",s_in:"Од (пристигнување)",s_out:"До (заминување)",s_gst:"Патници и соби",s_btn:"Пребарај",adults:"Возрасни",children:"Деца",rooms:"Соби",nights:"ноќи",s_err:"Внесете дестинација и валидни датуми (заминувањето мора да е по пристигнувањето).",s_res:"Вашето пребарување",s_inq:"Испрати барање",s_view:"Погледни го планот",s_pp:"патници"});
Object.assign(I18N.en,{s_dest:"Destination",s_dph:"City or country…",s_in:"From (check-in)",s_out:"To (check-out)",s_gst:"Travelers & rooms",s_btn:"Search",adults:"Adults",children:"Children",rooms:"Rooms",nights:"nights",s_err:"Enter a destination and valid dates (check-out must be after check-in).",s_res:"Your search",s_inq:"Send inquiry",s_view:"View the itinerary",s_pp:"travelers"});
Object.assign(I18N.sq,{s_dest:"Destinacioni",s_dph:"Qytet ose shtet…",s_in:"Nga (mbërritja)",s_out:"Deri (nisja)",s_gst:"Udhëtarë dhe dhoma",s_btn:"Kërko",adults:"Të rritur",children:"Fëmijë",rooms:"Dhoma",nights:"netë",s_err:"Shkruani destinacionin dhe data të vlefshme (nisja duhet të jetë pas mbërritjes).",s_res:"Kërkimi juaj",s_inq:"Dërgo kërkesë",s_view:"Shiko planin",s_pp:"udhëtarë"});
const G={a:2,c:0,r:1},LIM={a:[1,10],c:[0,6],r:[1,5]},$=id=>document.getElementById(id);
const nm=c=>lang==='mk'?c.mk:(lang==='sq'&&c.sq)||c.en;let pick=null,ix=-1;
const today=new Date().toISOString().slice(0,10);$('si').min=$('so').min=today;
$('si').onchange=()=>{const d=new Date($('si').value);d.setDate(d.getDate()+1);$('so').min=d.toISOString().slice(0,10);if($('so').value<$('so').min)$('so').value=''};
function gtxt(){const t=I18N[lang],p=G.a+G.c;$('gb').textContent=`${p} ${t.s_pp} · ${G.r} ${t.rooms.toLowerCase()}`;for(const k in G)$('v'+k).textContent=G[k]}
document.querySelectorAll('[data-g]').forEach(b=>b.onclick=e=>{e.stopPropagation();const k=b.dataset.g;G[k]=Math.min(LIM[k][1],Math.max(LIM[k][0],G[k]+ +b.dataset.d));gtxt()});
$('gb').onclick=e=>{e.stopPropagation();$('gpop').hidden=!$('gpop').hidden};
document.addEventListener('click',e=>{if(!e.target.closest('.gp'))$('gpop').hidden=true;if(!e.target.closest('.dd'))$('ac').innerHTML=''});
function ac(){const q=$('sd').value.trim().toLowerCase();pick=null;ix=-1;if(!q){$('ac').innerHTML='';return}
const m=CITIES.filter(c=>c.en.toLowerCase().startsWith(q)||c.mk.toLowerCase().startsWith(q)).slice(0,7);
$('ac').innerHTML=m.map(c=>{const n=nm(c);const mt=c.mk.toLowerCase().startsWith(q)&&lang!=='mk'?c.mk:n;return`<li data-n="${c.en}"><span>📍 <b>${mt.slice(0,q.length)}</b>${mt.slice(q.length)}</span><small>${c.c}</small></li>`}).join('')||`<li class="no">—</li>`}
function sel(li){if(!li||li.classList.contains('no'))return;const c=CITIES.find(x=>x.en===li.dataset.n);pick=c;$('sd').value=nm(c);$('ac').innerHTML=''}
$('sd').oninput=ac;$('sd').onfocus=ac;
$('ac').onmousedown=e=>{e.preventDefault();sel(e.target.closest('li'))};
$('sd').onkeydown=e=>{const li=[...$('ac').children];if(!li.length)return;
if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();ix=(ix+(e.key==='ArrowDown'?1:-1)+li.length)%li.length;li.forEach((l,i)=>l.classList.toggle('on',i===ix))}
else if(e.key==='Enter'&&ix>=0){e.preventDefault();sel(li[ix])}else if(e.key==='Escape')$('ac').innerHTML=''};

Object.assign(I18N.mk,{s_dph:"Било каде (или внесете град)…",s_err:"Изберете валидни датуми (заминувањето мора да е по пристигнувањето).",o_title:"Понуди од Скопје (SKP)",o_any:"Било каде",o_ok:"✓ Достапно на вашите датуми",o_near:"📅 Најблиски датуми",o_from:"од",o_pp:"по лице",o_tot:"вкупно (лет + хотел)",o_sel:"Избери",o_none:"Нема понуди за избраните датуми. Пробајте други датуми или контактирајте не.",o_dir:"Директен лет",o_con:"Лет со прекачување преку",o_bus:"Автобуски превоз",o_note:"Индикативни цени – конечната понуда ја потврдува агенцијата."});
Object.assign(I18N.en,{s_dph:"Anywhere (or type a city)…",s_err:"Choose valid dates (check-out must be after check-in).",o_title:"Offers from Skopje (SKP)",o_any:"Anywhere",o_ok:"✓ Available on your dates",o_near:"📅 Nearest dates",o_from:"from",o_pp:"per person",o_tot:"total (flight + hotel)",o_sel:"Select",o_none:"No offers for the selected dates. Try other dates or contact us.",o_dir:"Direct flight",o_con:"Connecting flight via",o_bus:"Bus transfer",o_note:"Indicative prices – the final offer is confirmed by the agency."});
Object.assign(I18N.sq,{s_dph:"Kudo (ose shkruani qytetin)…",s_err:"Zgjidhni data të vlefshme (nisja duhet të jetë pas mbërritjes).",o_title:"Oferta nga Shkupi (SKP)",o_any:"Kudo",o_ok:"✓ I disponueshëm në datat tuaja",o_near:"📅 Datat më të afërta",o_from:"nga",o_pp:"për person",o_tot:"gjithsej (fluturim + hotel)",o_sel:"Zgjidh",o_none:"Nuk ka oferta për datat e zgjedhura. Provoni data të tjera ose na kontaktoni.",o_dir:"Fluturim direkt",o_con:"Fluturim me ndërprerje përmes",o_bus:"Transport me autobus",o_note:"Çmime orientuese – oferta përfundimtare konfirmohet nga agjencia."});
const addD=(s,n)=>{const d=new Date(s+'T12:00');d.setDate(d.getDate()+n);return d.toISOString().slice(0,10)};
const okD=(c,d)=>c.days.includes(new Date(d+'T12:00').getDay())&&!(c.code==='AYT'&&(+d.slice(5,7)<4||+d.slice(5,7)>10));
function near(c,s){for(const o of[0,1,-1,2,-2,3,-3]){const d=addD(s,o);if(d>=today&&okD(c,d))return{d,o}}return null}
const hh=s=>{let h=0;for(const ch of s)h=(h*31+ch.charCodeAt(0))%100003;return h};
function offer(c,a,b){const x=near(c,a),y=near(c,b);if(!x||!y||y.d<=x.d)return null;const n=Math.round((new Date(y.d)-new Date(x.d))/864e5),h=hh(c.code+x.d+c.en),L=(new Date(x.d)-new Date(today))/864e5,mf=MF[+x.d.slice(5,7)-1],lf=L<7?1.4:L<21?1.2:L>90?.92:1;
const pp=Math.round(c.p*mf*lf*(1+((h%25)-12)/100));return{c,d1:x.d,d2:y.d,n,pp,h,ok:!x.o&&!y.o,tot:Math.round(pp*(G.a+G.c*.75)+(HT[c.c]||70)*mf*n*G.r)}}
const rm=document.createElement('div');rm.className='mod';rm.innerHTML='<div class="box"></div>';document.body.appendChild(rm);let LR=null;
const fd=d=>d.slice(8)+'.'+d.slice(5,7);
const cityKey=c=>c.k||({Istanbul:'istanbul',Rome:'rome',Santorini:'santorini',Ohrid:'ohrid'}[c.en]||c.en.toLowerCase().replace(/[^a-z0-9]+/g,''));
const hotelSearch=(city,inDate,outDate)=>`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city)}&checkin=${inDate}&checkout=${outDate}&group_adults=${G.a}&no_rooms=${G.r}&group_children=${G.c}`;
function showR(of,v,a,b){LR=[of,v,a,b];const t=I18N[lang],pax=G.a+G.c;
const rows=of.map(o=>{const c=o.c,tm=String(6+o.h%12).padStart(2,'0')+(o.h%2?':30':':00');
const how=c.t==='f'?`✈ ${t.o_dir}: ${AL[c.air]} ${c.air}${100+o.h%800} · ${tm}`:c.t==='c'?`🔁 ${t.o_con} ${c.via}`:`🚌 ${t.o_bus}`;
const q=`${nm(c)}, ${o.d1} → ${o.d2} (${o.n} ${t.nights}), ${pax} ${t.s_pp}, ${G.r} ${t.rooms.toLowerCase()}, ~€${o.tot}`;
return`<div class="of"><div class="of-img" data-dest="${cityKey(c)}" role="img" aria-label="${nm(c)}"></div><div class="of-main"><div class="of-info"><div class="of-title"><h3>${nm(c)}</h3><small>${c.c}${c.code?' · '+c.code:''}</small></div><div class="of-meta"><span>${how}</span><span>${fd(o.d1)} → ${fd(o.d2)} · ${o.n} ${t.nights}</span><span class="bd ${o.ok?'ok':''}">${o.ok?t.o_ok:t.o_near}</span></div></div><div class="of-bottom"><div class="of-price"><small>${t.o_from}</small> <b>€${o.pp}</b> <small>${t.o_pp}</small><span>${t.o_tot}: <strong>€${o.tot}</strong></span></div><div class="of-actions"><button type="button" class="btn ghost2" data-dest="${cityKey(c)}" data-in="${o.d1}" data-out="${o.d2}">${t.details}</button><a class="btn reserve-btn" href="reserve.html?d=${cityKey(c)}&in=${o.d1}&out=${o.d2}&a=${G.a}&c=${G.c}&r=${G.r}">${t.book||t.o_sel}</a></div></div></div></div>`}).join('');
const one=v&&of.length&&new Set(of.map(o=>o.c.en)).size===1;
rm.firstChild.innerHTML=`<button class="x" aria-label="close">✕</button><div class="mh nh${one?' rh':''}"${one?` data-img="${cityKey(of[0].c)}" role="img" aria-label="${nm(of[0].c)}"`:''}><h2>Skopje (SKP) → ${v||t.o_any}</h2>${one?`<span class="rh-sub">${of[0].c.c}${of[0].c.code?' · '+of[0].c.code:''}</span>`:''}</div><div class="mb${one?' single':''}"><p class="lead">📅 ${a} → ${b} · 👥 ${pax} · 🛏️ ${G.r}</p>${rows||`<p class="serr">${t.o_none}</p>`}<p><small>${t.o_note}</small></p></div>`;
rm.classList.add('open');document.body.style.overflow='hidden'}
const clR=()=>{rm.classList.remove('open');document.body.style.overflow=''};
rm.onclick=e=>{if(e.target===rm||e.target.classList.contains('x')||e.target.closest('[data-dest]'))clR()};
document.addEventListener('keydown',e=>{if(e.key==='Escape')clR()});
$('sf').onsubmit=e=>{e.preventDefault();const t=I18N[lang],v=$('sd').value.trim(),a=$('si').value,b=$('so').value,q=v.toLowerCase();
if(!a||!b||b<=a){$('sres').innerHTML=`<p class="serr">${t.s_err}</p>`;return}$('sres').innerHTML='';
const mt=x=>x.en.toLowerCase().startsWith(q)||x.mk.toLowerCase().startsWith(q);
const list=!v?CITIES:pick?[pick]:CITIES.filter(x=>x.en.toLowerCase()===q||x.mk.toLowerCase()===q).concat([]).length?CITIES.filter(x=>x.en.toLowerCase()===q||x.mk.toLowerCase()===q):CITIES.filter(mt);
showR(list.map(c=>offer(c,a,b)).filter(Boolean).sort((x,y)=>x.pp-y.pp),v&&list[0]?nm(list[0]):v,a,b)};
const oa=apply;apply=function(){oa();gtxt();ac();if(LR&&rm.classList.contains('open'))showR(...LR)};apply();
