/* news.js – Новости и блог (v11): истакнат напис, филтри по категории, детален напис во прозорец (MK / EN / SQ). */
const ART=[
{id:6,date:"17.10.2026",cat:"tips",min:3,img:"amsterdam",
 mk:{t:"Што да проверите пред патување: документи и осигурување",ex:"Кратка листа за мирно патување – од пасош до патно осигурување.",
  s:[{h:"Документи",l:["Важечки пасош или лична карта според условите на државата – многу држави бараат пасошот да важи уште најмалку шест месеци по враќањето.","Проверете дали ви треба виза или друга дозвола за влез.","Направете копија или фотографија од документите и од ваучерот."]},
     {h:"Осигурување и здравје",p:["Патното осигурување покрива неочекувани трошоци при болест или повреда во странство, а може да вклучи и багаж и откажување на патувањето. Изберете покритие според дестинацијата и активностите што ги планирате."]},
     {h:"Ден пред патување",l:["Проверете го времето на поаѓање и дали сте се пријавиле за лет.","Преземете ги ваучерите и картите офлајн.","Известете ја банката за патувањето и подгответе малку готовина во локална валута."]}],
  tip:"Условите за влез се менуваат – проверете ги официјалните извори на државата непосредно пред патувањето."},
 en:{t:"Before you travel: documents and insurance",ex:"A short checklist for a stress-free trip – from your passport to travel insurance.",
  s:[{h:"Documents",l:["A valid passport or ID according to the country’s rules – many countries require a passport valid for at least six more months after your return.","Check whether you need a visa or another entry permit.","Keep a copy or a photo of your documents and your voucher."]},
     {h:"Insurance and health",p:["Travel insurance covers unexpected costs in case of illness or injury abroad, and can also include luggage and trip cancellation. Choose the cover according to your destination and planned activities."]},
     {h:"The day before",l:["Check your departure time and complete online check-in if available.","Download vouchers and maps for offline use.","Tell your bank about the trip and prepare a little cash in the local currency."]}],
  tip:"Entry rules change – check the country’s official sources right before you travel."},
 sq:{t:"Para udhëtimit: dokumentet dhe sigurimi",ex:"Një listë e shkurtër për udhëtim pa stres – nga pasaporta te sigurimi i udhëtimit.",
  s:[{h:"Dokumentet",l:["Pasaportë ose letërnjoftim i vlefshëm sipas rregullave të shtetit – shumë shtete kërkojnë që pasaporta të vlejë edhe të paktën gjashtë muaj pas kthimit.","Kontrolloni nëse ju duhet vizë ose leje tjetër hyrjeje.","Mbani një kopje ose foto të dokumenteve dhe të vauçerit."]},
     {h:"Sigurimi dhe shëndeti",p:["Sigurimi i udhëtimit mbulon shpenzime të papritura në rast sëmundjeje ose lëndimi jashtë vendit dhe mund të përfshijë bagazhin e anulimin e udhëtimit. Zgjidhni mbulimin sipas destinacionit dhe aktiviteteve."]},
     {h:"Një ditë përpara",l:["Kontrolloni orën e nisjes dhe bëni check-in online nëse mundësohet.","Shkarkoni vauçerët dhe hartat për përdorim offline.","Njoftoni bankën për udhëtimin dhe përgatitni pak para në monedhën lokale."]}],
  tip:"Rregullat e hyrjes ndryshojnë – kontrolloni burimet zyrtare të shtetit para udhëtimit."}},
{id:4,date:"15.10.2026",cat:"offers",min:4,img:"prague",
 mk:{t:"Нова Година 2027: Прага, Будимпешта и Белград",ex:"Новогодишните аранжмани се отворени – до −15% на избрани дестинации.",
  s:[{h:"Каде да ја дочекате 2027",p:["Дочекот на Новата година во некој од централноевропските и соседните градови е омилен избор: празнично осветлени плоштади, божиќни пазари и новогодишни настани на отворено."]},
     {h:"Нашите предлози",l:["Прага – Карловиот мост, Стариот град и вистинска приказна-атмосфера.","Будимпешта – термални бањи, Дунав и прошетки по Буда и Пешта.","Белград – близу, живо и достапно, со богата новогодишна програма.","Братислава – мал и пријатен град што лесно се комбинира со Виена."]},
     {h:"Како да резервирате",p:["Новогодишните термини се пополнуваат први. На страницата Понуди ќе го најдете целиот план по денови за секој град, а при резервација можете да го искористите промо кодот NY2027."]}],
  tip:"Промо код: NY2027 – внесете го на страницата за резервација."},
 en:{t:"New Year 2027: Prague, Budapest and Belgrade",ex:"New Year packages are open – up to −15% on selected destinations.",
  s:[{h:"Where to welcome 2027",p:["Seeing in the New Year in a Central European or neighbouring city is a favourite choice: festively lit squares, Christmas markets and open-air celebrations."]},
     {h:"Our suggestions",l:["Prague – Charles Bridge, the Old Town and a true fairy-tale atmosphere.","Budapest – thermal baths, the Danube and walks across Buda and Pest.","Belgrade – close, lively and affordable, with a rich New Year programme.","Bratislava – a small, friendly city that combines easily with Vienna."]},
     {h:"How to book",p:["New Year dates fill up first. On the Offers page you will find the full day-by-day plan for each city, and you can use the promo code NY2027 when you book."]}],
  tip:"Promo code: NY2027 – enter it on the booking page."},
 sq:{t:"Viti i Ri 2027: Pragë, Budapest dhe Beograd",ex:"Paketat e Vitit të Ri janë të hapura – deri në −15% në destinacione të zgjedhura.",
  s:[{h:"Ku ta presim 2027-n",p:["Pritja e Vitit të Ri në një nga qytetet e Evropës Qendrore ose fqinje është zgjedhje e preferuar: sheshe të ndriçuara festivisht, tregje të Krishtlindjeve dhe ngjarje në ajër të hapur."]},
     {h:"Sugjerimet tona",l:["Pragë – Ura e Karlit, Qyteti i Vjetër dhe atmosferë përrallore.","Budapest – banja termale, Danubi dhe shëtitje në Buda e Pest.","Beograd – afër, i gjallë dhe i përballueshëm, me program të pasur.","Bratislavë – qytet i vogël e i këndshëm që kombinohet lehtë me Vienën."]},
     {h:"Si të rezervoni",p:["Datat e Vitit të Ri mbushen të parat. Te faqja Oferta do të gjeni planin ditë pas dite për çdo qytet, dhe gjatë rezervimit mund ta përdorni kodin promo NY2027."]}],
  tip:"Kodi promo: NY2027 – shkruajeni te faqja e rezervimit."}},
{id:1,date:"12.10.2026",cat:"destinations",min:4,img:"istanbul",
 mk:{t:"Топ 5 есенски дестинации",ex:"Каде да патувате во октомври и ноември за најмала гужва и најдобри цени.",
  s:[{h:"Зошто есента е најдобро време",p:["Есента е совршено време за патување: температурите се пријатни, плажите се празни, а цените после септември паѓаат до 30%. Летната гужва е зад нас, а градовите се поопуштени и поприсни."]},
     {h:"Нашите пет избори",l:["Рим – фестивали на храна, културни настани и помала гужва околу знаменитостите.","Истанбул – пријатно време за шетање низ стариот град, чаршијата и крстарење по Босфор.","Атина – Акропол и музеите без летната жештина.","Лисабон – благи температури, улички за шетање и одлична храна на отворено.","Охрид – најубавиот мир на езерото и есенски бои."]},
     {h:"Како паметно да резервирате",p:["Резервирајте две до три недели однапред за најдобри цени и слободни места. Колку е поблиску датумот, толку изборот на хотели се стеснува."]}],
  tip:"Внесете ги датумите на почетната страница и ќе ги видите достапните понуди од Скопје."},
 en:{t:"Top 5 autumn destinations",ex:"Where to go in October and November for the fewest crowds and the best prices.",
  s:[{h:"Why autumn is the best time",p:["Autumn is a perfect time to travel: pleasant temperatures, quiet beaches and prices that drop up to 30% after September. The summer crowds are gone and cities feel more relaxed and welcoming."]},
     {h:"Our five picks",l:["Rome – food festivals, cultural events and fewer crowds around the sights.","Istanbul – comfortable weather for strolling the old town, the bazaar and a Bosphorus cruise.","Athens – the Acropolis and museums without the summer heat.","Lisbon – mild temperatures, walkable streets and great outdoor dining.","Ohrid – the most peaceful time by the lake, with autumn colours."]},
     {h:"How to book smart",p:["Book two to three weeks ahead for the best prices and availability. The closer the date, the fewer hotels there are to choose from."]}],
  tip:"Enter your dates on the home page to see the available offers from Skopje."},
 sq:{t:"5 destinacionet e vjeshtës",ex:"Ku të shkoni në tetor e nëntor pa grumbullime dhe me çmimet më të mira.",
  s:[{h:"Pse vjeshta është koha më e mirë",p:["Vjeshta është koha e përkryer për udhëtim: temperatura të këndshme, plazhe të qeta dhe çmime që bien deri në 30% pas shtatorit. Grumbullimet e verës kanë mbaruar dhe qytetet janë më të çlodhura."]},
     {h:"Pesë zgjedhjet tona",l:["Romë – festivale ushqimi, ngjarje kulturore dhe më pak turmë te pikat kryesore.","Stamboll – kohë e përshtatshme për shëtitje në qytetin e vjetër, pazar dhe lundrim në Bosfor.","Athinë – Akropoli dhe muzetë pa vapën e verës.","Lisbonë – temperatura të buta, rrugica për shëtitje dhe ushqim i mirë në ajër të hapur.","Ohër – qetësia më e bukur te liqeni, me ngjyra vjeshte."]},
     {h:"Si të rezervoni mençur",p:["Rezervoni dy deri në tre javë përpara për çmimet më të mira. Sa më afër data, aq më pak hotele për të zgjedhur."]}],
  tip:"Shkruani datat në faqen kryesore dhe do të shihni ofertat nga Shkupi."}},
{id:5,date:"08.10.2026",cat:"offers",min:3,img:"santorini",
 mk:{t:"Last Minute: како да најдете добра понуда",ex:"Флексибилните датуми и брзата одлука често се исплатуваат.",
  s:[{h:"Што значи Last Minute",p:["Last Minute се понуди за заминување во следните денови или недели. Последните слободни места понекогаш се поповолни, но не секогаш – затоа секогаш споредувајте."]},
     {h:"Кога се исплатува",l:["Кога сте флексибилни со датумите (неколку дена напред или назад).","Кога патувате лесно – со рачен багаж и без посебни барања.","Кога брзо одлучувате и документите веќе ви се подготвени."]},
     {h:"На што да внимавате",p:["Цените на сајтот се индикативни, а конечната понуда ја потврдува агенцијата пред уплата. Прочитајте ги условите за откажување и проверете дали пасошот важи за целото патување."]}],
  tip:"На страницата Понуди ќе го најдете делот Last Minute со актуелни термини."},
 en:{t:"Last Minute: how to find a good deal",ex:"Flexible dates and a quick decision often pay off.",
  s:[{h:"What Last Minute means",p:["Last Minute offers are for departures in the coming days or weeks. The last available seats are sometimes cheaper, but not always – so always compare."]},
     {h:"When it pays off",l:["When you are flexible with dates (a few days earlier or later).","When you travel light – carry-on only and no special requirements.","When you decide quickly and your documents are already in order."]},
     {h:"What to watch out for",p:["Prices on the site are indicative, and the final offer is confirmed by the agency before you pay. Read the cancellation terms and check that your passport is valid for the whole trip."]}],
  tip:"On the Offers page you will find the Last Minute section with current dates."},
 sq:{t:"Last Minute: si të gjeni ofertë të mirë",ex:"Datat fleksibile dhe vendimi i shpejtë shpesh shpërblehen.",
  s:[{h:"Çfarë do të thotë Last Minute",p:["Ofertat Last Minute janë për nisje në ditët ose javët në vijim. Vendet e fundit ndonjëherë janë më të lira, por jo gjithmonë – ndaj krahasoni gjithmonë."]},
     {h:"Kur ia vlen",l:["Kur jeni fleksibël me datat (disa ditë më herët ose më vonë).","Kur udhëtoni lehtë – vetëm me çantë dore dhe pa kërkesa të veçanta.","Kur vendosni shpejt dhe dokumentet i keni gati."]},
     {h:"Në çfarë të kushtoni vëmendje",p:["Çmimet në sajt janë orientuese, ndërsa ofertën përfundimtare e konfirmon agjencia para pagesës. Lexoni kushtet e anulimit dhe kontrolloni nëse pasaporta vlen për gjithë udhëtimin."]}],
  tip:"Te faqja Oferta do të gjeni seksionin Last Minute me data aktuale."}},
{id:2,date:"03.10.2026",cat:"offers",min:4,img:"zurich",
 mk:{t:"Рани резервации за зима 2027",ex:"Искористете попусти до 20% за ски-аранжмани во Банско, Копаоник и Алпите.",
  s:[{h:"Зошто рано",p:["Раното резервирање значи најдобри цени. За зимската сезона 2027 нудиме попусти до 20% на ски-аранжмани во Банско, Копаоник и Алпите ако резервирате до крајот на ноември."]},
     {h:"Што е вклучено",l:["Сместување во хотел или апартман.","Ски-пас за избраните денови.","Превоз до дестинацијата.","Дополнителен попуст за деца до 12 години."]},
     {h:"Пред уплата",p:["Условите за откажување ги добивате пред уплата, па однапред знаете што важи ако планот се промени. Поголеми групи и семејства можат да побараат понуда по мерка."]}],
  tip:"Понуда по мерка можете да побарате преку контакт формата."},
 en:{t:"Early booking for winter 2027",ex:"Get up to 20% off ski packages in Bansko, Kopaonik and the Alps.",
  s:[{h:"Why book early",p:["Booking early means the best prices. For winter 2027 we offer up to 20% off ski packages in Bansko, Kopaonik and the Alps if you book by the end of November."]},
     {h:"What is included",l:["Accommodation in a hotel or apartment.","Ski pass for the selected days.","Transport to the destination.","An extra discount for children under 12."]},
     {h:"Before you pay",p:["You receive the cancellation terms before you pay, so you know in advance what applies if plans change. Larger groups and families can request a tailor-made offer."]}],
  tip:"You can request a tailor-made offer through the contact form."},
 sq:{t:"Rezervime të hershme për dimrin 2027",ex:"Deri në 20% zbritje për paketat e skijimit në Bansko, Kopaonik dhe Alpe.",
  s:[{h:"Pse herët",p:["Rezervimi i hershëm do të thotë çmimet më të mira. Për dimrin 2027 ofrojmë deri në 20% zbritje për paketat e skijimit në Bansko, Kopaonik dhe Alpe nëse rezervoni deri në fund të nëntorit."]},
     {h:"Çfarë përfshihet",l:["Akomodim në hotel ose apartament.","Biletë skijimi për ditët e zgjedhura.","Transport deri në destinacion.","Zbritje shtesë për fëmijët nën 12 vjeç."]},
     {h:"Para pagesës",p:["Kushtet e anulimit i merrni para pagesës, ndaj e dini paraprakisht çfarë vlen nëse planet ndryshojnë. Grupet e mëdha dhe familjet mund të kërkojnë ofertë sipas masës."]}],
  tip:"Ofertën sipas masës mund ta kërkoni përmes formularit të kontaktit."}},
{id:3,date:"25.09.2026",cat:"tips",min:3,img:"lisbon",
 mk:{t:"Совети за патување со рачен багаж",ex:"Како да спакувате паметно, да заштедите и да патувате без стрес.",
  s:[{h:"Зошто само рачен багаж",p:["Рачниот багаж ви штеди пари и време: нема чекање на лента, нема загубен куфер и често нема дополнителна такса."]},
     {h:"Како да спакувате",l:["Спакувајте облека што се комбинира една со друга.","Ролувајте ја облеката наместо да ја превиткувате.","Течностите ставете ги во шишиња до 100 мл во проѕирна кеса.","Најтешките предмети носете ги на себе."]},
     {h:"Пред да тргнете",p:["Проверете ги димензиите кај авиокомпанијата пред патувањето и оставете место за сувенири. Документите и полначот држете ги при рака."]}],
  tip:"Ако ви треба поголем багаж, кажете ни при резервација за да ви ги прикажеме условите."},
 en:{t:"Carry-on packing tips",ex:"How to pack smart, save money and travel without stress.",
  s:[{h:"Why carry-on only",p:["Carry-on only saves money and time: no waiting at the belt, no lost suitcase and often no extra fee."]},
     {h:"How to pack",l:["Pack clothes that mix and match.","Roll your clothes instead of folding them.","Keep liquids in 100 ml bottles inside a clear bag.","Wear your heaviest items."]},
     {h:"Before you go",p:["Check your airline’s size limits before the trip and leave room for souvenirs. Keep your documents and charger within easy reach."]}],
  tip:"If you need more luggage, tell us when you book so we can show you the terms."},
 sq:{t:"Këshilla për çantën e dorës",ex:"Si të paketoni mençur, të kurseni dhe të udhëtoni pa stres.",
  s:[{h:"Pse vetëm çantë dore",p:["Vetëm çanta e dorës kursen para dhe kohë: pa pritje te shiriti, pa valixhe të humbur dhe shpesh pa tarifë shtesë."]},
     {h:"Si të paketoni",l:["Paketoni rroba që kombinohen me njëra-tjetrën.","Rrotulloni rrobat në vend që t’i paloseni.","Lëngjet mbajini në shishe 100 ml brenda një qese transparente.","Vishni sendet më të rënda."]},
     {h:"Para nisjes",p:["Kontrolloni kufijtë e madhësisë te kompania ajrore dhe lini vend për suvenire. Dokumentet dhe karikuesin mbani t’i pranë."]}],
  tip:"Nëse ju duhet më shumë bagazh, na tregoni gjatë rezervimit për t’ju shfaqur kushtet."}}
];
ART.sort((a,b)=>b.date.split('.').reverse().join('').localeCompare(a.date.split('.').reverse().join('')));
const NT={mk:{more:"Прочитај повеќе →",n_contact:"Контактирајте не",n_offers:"Погледни понуди",min:"мин читање",all:"Сите",offers:"Понуди",destinations:"Дестинации",tips:"Совети",latest:"Најново",copy:"Копирај линк",copied:"Копирано ✓",rel:"Прочитајте и ова",sub:"Совети за патување, попусти и новости од NextDestination.",tip:"Совет",empty:"Нема написи во оваа категорија."},
en:{more:"Read more →",n_contact:"Contact us",n_offers:"See offers",min:"min read",all:"All",offers:"Offers",destinations:"Destinations",tips:"Tips",latest:"Latest",copy:"Copy link",copied:"Copied ✓",rel:"Also read",sub:"Travel tips, discounts and news from NextDestination.",tip:"Tip",empty:"No articles in this category."},
sq:{more:"Lexo më shumë →",n_contact:"Na kontaktoni",n_offers:"Shiko ofertat",min:"min lexim",all:"Të gjitha",offers:"Oferta",destinations:"Destinacione",tips:"Këshilla",latest:"Më i ri",copy:"Kopjo lidhjen",copied:"U kopjua ✓",rel:"Lexoni edhe",sub:"Këshilla udhëtimi, zbritje dhe lajme nga NextDestination.",tip:"Këshillë",empty:"Nuk ka artikuj në këtë kategori."}};
for(const k in NT){Object.assign(I18N[k],{more:NT[k].more,n_contact:NT[k].n_contact,blog_sub:NT[k].sub})}
let curN=null,flt='all';
const T=()=>NT[lang]||NT.mk,A=a=>a[lang]||a.mk,byId=i=>ART.find(a=>a.id==i);
const nm2=document.createElement('div');nm2.className='mod';nm2.innerHTML='<div class="box"></div>';document.body.appendChild(nm2);
function card(a,f){const t=T(),x=A(a);return`<article class="nc${f?' nc-f':''}" data-news="${a.id}" tabindex="0" role="button"><div class="nc-img" data-img="${a.img}"><span class="nc-cat">${t[a.cat]}</span>${f?`<span class="nc-new">★ ${t.latest}</span>`:''}</div><div class="nc-b"><small>📅 ${a.date} · ⏱ ${a.min} ${t.min}</small><h3>${x.t}</h3><p>${x.ex}</p><span class="more">${t.more}</span></div></article>`}
function renderList(){const t=T(),f=document.getElementById('nf'),g=document.getElementById('ng');if(!f||!g)return;
f.innerHTML=['all','offers','destinations','tips'].map(k=>`<button type="button" class="chip${flt===k?' on':''}" data-f="${k}">${t[k]}</button>`).join('');
const l=ART.filter(a=>flt==='all'||a.cat===flt);
g.innerHTML=l.length?l.map((a,i)=>card(a,i===0)).join(''):`<p class="serr">${t.empty}</p>`}
function articleHTML(a){const t=T(),x=A(a),rel=ART.filter(r=>r.id!==a.id&&r.cat===a.cat).concat(ART.filter(r=>r.id!==a.id&&r.cat!==a.cat)).slice(0,2);
const body=x.s.map(s=>`<h3>${s.h}</h3>${(s.p||[]).map(p=>`<p>${p}</p>`).join('')}${s.l?`<ul class="al">${s.l.map(i=>`<li>${i}</li>`).join('')}</ul>`:''}`).join('');
const cta=a.cat==='offers'?`<a class="btn" href="offers.html">${t.n_offers}</a>`:a.cat==='destinations'?`<a class="btn" href="destinations.html">${I18N[lang].nav_dest}</a>`:'';
return`<button class="x" aria-label="close">✕</button><div class="mh nh rh" data-img="${a.img}" role="img" aria-label="${x.t}"><span class="nc-cat">${t[a.cat]}</span><h2>${x.t}</h2><span class="rh-sub">📅 ${a.date} · ⏱ ${a.min} ${t.min}</span></div><div class="mb art"><p class="lead2">${x.ex}</p>${body}<div class="tipbox"><b>💡 ${t.tip}</b> ${x.tip}</div><div class="acts2">${cta}<a class="btn" href="contact.html">${t.n_contact}</a><button type="button" class="btn ghost3" id="cpl">🔗 ${t.copy}</button></div><div class="rel"><h4>${t.rel}</h4><div class="rel-g">${rel.map(r=>`<a class="rel-i" href="#" data-news="${r.id}"><small>${T()[r.cat]} · ${r.date}</small><b>${A(r).t}</b></a>`).join('')}</div></div></div>`}
function refreshNews(){if(!curN)return;const a=byId(curN);if(!a)return;nm2.firstChild.innerHTML=articleHTML(a);nm2.firstChild.scrollTop=0}
function openN(id){curN=id;refreshNews();nm2.classList.add('open');document.body.style.overflow='hidden'}
function closeN(){curN=null;nm2.classList.remove('open');document.body.style.overflow=''}
document.addEventListener('click',e=>{
const ch=e.target.closest('.chip');if(ch){flt=ch.dataset.f;renderList();return}
const cp=e.target.closest('#cpl');if(cp){const u=location.origin+location.pathname+'?read='+curN;(navigator.clipboard?navigator.clipboard.writeText(u):Promise.reject()).then(()=>{cp.textContent='✓ '+T().copied.replace(' ✓','')},()=>{prompt(u)});return}
const c=e.target.closest('[data-news]');if(c){e.preventDefault();openN(c.dataset.news);return}
if(e.target===nm2||(e.target.classList.contains('x')&&nm2.contains(e.target)))closeN()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeN();if(e.key==='Enter'&&e.target.dataset&&e.target.dataset.news)e.target.click()});
const oaN=apply;apply=function(){oaN();renderList();refreshNews()};apply();
const rd=new URLSearchParams(location.search).get('read');if(rd&&byId(rd))openN(rd);
