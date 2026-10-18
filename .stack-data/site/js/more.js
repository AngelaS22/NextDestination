// 30 дополнителни програми + 15 изминати патувања од 2025. Рејтинзите и коментарите се ПРИМЕРИ – заменете ги со вистински.
const ROWS2=`paris|Paris|Париз|Paris|France|4|389|city,culture|Eiffel Tower;Louvre Museum;Montmartre;Seine cruise
london|London|Лондон|Londër|UK|4|379|city,culture|Big Ben;Tower Bridge;British Museum;Buckingham Palace
barcelona|Barcelona|Барселона|Barcelonë|Spain|5|359|beach,city|Sagrada Família;Park Güell;La Rambla;Barceloneta Beach
madrid|Madrid|Мадрид|Madrid|Spain|4|339|city,culture|Royal Palace;Prado Museum;Retiro Park;Plaza Mayor
lisbon|Lisbon|Лисабон|Lisbonë|Portugal|5|369|city,culture|Belém Tower;Alfama;Tram 28;Sintra
amsterdam|Amsterdam|Амстердам|Amsterdam|Netherlands|4|389|city,culture|Canal cruise;Rijksmuseum;Anne Frank House;Vondelpark
vienna|Vienna|Виена|Vjenë|Austria|3|299|city,culture|Schönbrunn Palace;St. Stephen’s Cathedral;Belvedere;Prater
berlin|Berlin|Берлин|Berlin|Germany|4|319|city,culture|Brandenburg Gate;Berlin Wall;Museum Island;Reichstag
venice|Venice|Венеција|Venecia|Italy|3|329|city,culture|St. Mark’s Square;Grand Canal;Rialto Bridge;Murano
florence|Florence|Фиренца|Firence|Italy|4|349|culture,city|Duomo;Uffizi Gallery;Ponte Vecchio;Piazzale Michelangelo
athens|Athens|Атина|Athinë|Greece|4|279|culture,city|Acropolis;Plaka;Parthenon;Cape Sounion
mykonos|Mykonos|Миконос|Mykonos|Greece|6|549|beach|Little Venice;Paradise Beach;Windmills;Delos Island
corfu|Corfu|Крф|Korfuz|Greece|7|499|beach|Corfu Old Town;Paleokastritsa;Sidari;Achilleion Palace
dubrovnik|Dubrovnik|Дубровник|Dubrovnik|Croatia|5|419|beach,culture|City Walls;Stradun;Lokrum Island;Cable Car
split|Split|Сплит|Split|Croatia|5|399|beach,culture|Diocletian’s Palace;Riva Promenade;Krka Waterfalls;Hvar Island
krakow|Krakow|Краков|Krakovë|Poland|4|289|culture,city|Wawel Castle;Main Market Square;Kazimierz;Wieliczka Salt Mine
dubai|Dubai|Дубаи|Dubai|UAE|6|899|city|Burj Khalifa;Desert Safari;Dubai Mall;Palm Jumeirah
cairo|Cairo|Каиро|Kajro|Egypt|6|629|culture|Pyramids of Giza;Sphinx;Egyptian Museum;Khan el-Khalili
antalya|Antalya|Анталија|Antalje|Türkiye|7|449|beach|Kaleiçi Old Town;Düden Waterfalls;Lara Beach;Perge
malta|Malta|Малта|Maltë|Malta|5|469|beach,culture|Valletta;Blue Lagoon;Mdina;Three Cities
larnaca|Larnaca|Ларнака|Larnakë|Cyprus|7|519|beach|Finikoudes Beach;Salt Lake;Lefkara;Cape Greco
munich|Munich|Минхен|Mynih|Germany|4|349|city,culture|Marienplatz;Nymphenburg Palace;English Garden;Neuschwanstein Castle
brussels|Brussels|Брисел|Bruksel|Belgium|3|309|city,culture|Grand Place;Atomium;Manneken Pis;Bruges
zurich|Zurich|Цирих|Cyrih|Switzerland|4|499|city,culture|Old Town;Lake Zurich;Rhine Falls;Uetliberg
thessaloniki|Thessaloniki|Солун|Selanik|Greece|3|189|city,culture|White Tower;Aristotelous Square;Ladadika;Halkidiki
sofia|Sofia|Софија|Sofje|Bulgaria|3|149|city,culture|Alexander Nevsky Cathedral;Vitosha Mountain;Rila Monastery;Boyana Church
sarajevo|Sarajevo|Сараево|Sarajevë|Bosnia|3|179|culture,city|Baščaršija;Latin Bridge;Tunnel of Hope;Trebević
tirana|Tirana|Тирана|Tiranë|Albania|3|169|city,culture|Skanderbeg Square;Dajti Mountain;Blloku;Kruja Castle
kotor|Kotor|Котор|Kotor|Montenegro|4|319|beach,culture|Kotor Old Town;Bay of Kotor;Budva;Perast
nice|Nice|Ница|Nicë|France|5|449|beach,city|Promenade des Anglais;Old Town;Castle Hill;Monaco`;
const CN={France:['Франција','Francë'],UK:['Велика Британија','Britani e Madhe'],Spain:['Шпанија','Spanjë'],Portugal:['Португалија','Portugali'],Netherlands:['Холандија','Holandë'],Austria:['Австрија','Austri'],Germany:['Германија','Gjermani'],Italy:['Италија','Itali'],Greece:['Грција','Greqi'],Croatia:['Хрватска','Kroaci'],Poland:['Полска','Poloni'],UAE:['ОАЕ','EAU'],Egypt:['Египет','Egjipt'],'Türkiye':['Турција','Turqi'],Malta:['Малта','Maltë'],Cyprus:['Кипар','Qipro'],Belgium:['Белгија','Belgjikë'],Switzerland:['Швајцарија','Zvicër'],Bulgaria:['Бугарија','Bullgari'],Bosnia:['Босна','Bosnjë'],Albania:['Албанија','Shqipëri'],Montenegro:['Црна Гора','Mali i Zi']};
const T={mk:{ar:a=>`Пристигнување, сместување и прошетка до ${a}.`,v2:(b,c)=>`Посета на ${b} и ${c}.`,v1:d=>`Посета на ${d} и слободно време.`,fr:'Слободен ден или изборна екскурзија.',dp:'Појадок и повратен лет.',inc:n=>`Авионски билет, ${n} ноќи хотел со појадок, трансфери.`,d:(a,b,n)=>`Откријте ${a}, ${b} и многу повеќе – ${n}.`},
en:{ar:a=>`Arrival, check-in and a walk to ${a}.`,v2:(b,c)=>`Visit ${b} and ${c}.`,v1:d=>`Visit ${d} and free time.`,fr:'Free day or optional excursion.',dp:'Breakfast and flight home.',inc:n=>`Flight, ${n} nights hotel with breakfast, transfers.`,d:(a,b,n)=>`Discover ${a}, ${b} and much more in ${n}.`},
sq:{ar:a=>`Mbërritja, vendosja dhe shëtitje te ${a}.`,v2:(b,c)=>`Vizitë te ${b} dhe ${c}.`,v1:d=>`Vizitë te ${d} dhe kohë e lirë.`,fr:'Ditë e lirë ose ekskursion opsional.',dp:'Mëngjes dhe fluturimi i kthimit.',inc:n=>`Bileta e avionit, ${n} netë hotel me mëngjes, transfere.`,d:(a,b,n)=>`Zbuloni ${a}, ${b} dhe shumë më tepër në ${n}.`}};
const ADD={},META2={};
ROWS2.split('\n').forEach((r,i)=>{const[k,en,mk,sq,co,n,p,cs,lm]=r.split('|'),L=lm.split(';'),nn=+n,h=i*37%360,nz={mk,en,sq},ci=CN[co];
const o={c:'dx',p:'€'+p,pn:+p,n:nn};
['mk','en','sq'].forEach((lg,j)=>{const x=T[lg],mid=[x.v2(L[1],L[2]),x.v1(L[3]),x.fr,x.fr,x.fr].slice(0,nn-1);
o[lg]={t:`${nz[lg]}, ${lg==='en'||!ci?co:ci[lg==='mk'?0:1]}`,d:x.d(L[0],L[1],nz[lg]),plan:[x.ar(L[0]),...mid,x.dp],inc:x.inc(nn)}});
ADD[k]=o;META2[k]={c:cs.split(','),r:+(4.5+(i*7%5)/10).toFixed(1)}});
Object.assign(DEST,ADD);
const PAST=[['paris','12.05 – 16.05.2025'],['london','03.06 – 07.06.2025'],['barcelona','21.06 – 26.06.2025'],['rome','10.04 – 14.04.2025'],['santorini','02.09 – 09.09.2025'],['istanbul','15.03 – 18.03.2025'],['vienna','28.11 – 01.12.2025'],['athens','09.05 – 13.05.2025'],['ohrid','18.07 – 21.07.2025'],['dubrovnik','05.07 – 10.07.2025'],['lisbon','14.10 – 19.10.2025'],['amsterdam','25.04 – 28.04.2025'],['budapest','10.10 – 13.10.2025'],['venice','06.06 – 09.06.2025'],['krakow','22.08 – 26.08.2025']];
const GN=[['Марија К.','Marija K.'],['Стефан Т.','Stefan T.'],['Ивана Р.','Ivana R.'],['Никола П.','Nikola P.'],['Елена С.','Elena S.'],['Александар М.','Aleksandar M.'],['Јована Д.','Jovana D.'],['Благој Н.','Blagoj N.'],['Теодора Л.','Teodora L.'],['Дарко Ј.','Darko J.'],['Ана В.','Ana V.'],['Филип Г.','Filip G.'],['Сара Б.','Sara B.'],['Мартин Ц.','Martin C.'],['Каролина Ш.','Karolina Sh.']];
const CM={mk:['Програмата беше одлично организирана и сè течеше по распоред. Многу сме задоволни!','Водичот беше феноменален, а хотелот чист и на одлична локација.','Совршен однос на цена и квалитет. Со задоволство ќе патуваме пак со вас.','Сè беше како што беше ветено – трансфери без чекање и прекрасни места за посета.','Кратко, но исполнето патување. Препорака за сите!','Љубезен тим и брза комуникација пред и за време на патувањето.','Уживавме – програмата има добар баланс меѓу разгледување и одмор.','Малку гужва на некои локации, но вкупно одлично искуство.'],
en:['The program was very well organized and everything ran on schedule. We’re very happy!','The guide was fantastic, and the hotel was clean and perfectly located.','Perfect value for money. We’ll gladly travel with you again.','Everything was as promised – transfers without waiting and wonderful places to visit.','A short but full trip. Recommended to everyone!','Friendly team and fast communication before and during the trip.','We loved it – a good balance between sightseeing and rest.','A bit crowded at some spots, but an excellent experience overall.'],
sq:['Programi ishte shumë i organizuar dhe gjithçka shkoi sipas orarit. Jemi shumë të kënaqur!','Udhërrëfyesi ishte fantastik, ndërsa hoteli i pastër dhe në lokacion të shkëlqyer.','Raport i përkryer çmim–cilësi. Do të udhëtojmë sërish me ju.','Gjithçka ishte siç u premtua – transfere pa pritje dhe vende të mrekullueshme.','Udhëtim i shkurtër por i plotë. Rekomandim për të gjithë!','Ekip i sjellshëm dhe komunikim i shpejtë para dhe gjatë udhëtimit.','Na pëlqeu – balancë e mirë mes vizitave dhe pushimit.','Pak grumbullim në disa vende, por përvojë e shkëlqyer në tërësi.']};
Object.assign(I18N.mk,{past_h:"Изминати патувања 2025 – што велат нашите гости",done:"✓ Завршено",more_d:"Прикажи повеќе"});Object.assign(I18N.en,{past_h:"Past trips 2025 – what our guests say",done:"✓ Completed",more_d:"Show more"});Object.assign(I18N.sq,{past_h:"Udhëtimet e 2025 – çfarë thonë mysafirët tanë",done:"✓ Përfunduar",more_d:"Shfaq më shumë"});
const RB=[4.8,4.9,4.7,4.8,4.6,4.7,4.6,4.3],RO=[0,.1,-.1,.1,0,-.1,.1,0,-.1,.1,0,-.1,.1,-.1,0];
function rtv(i){return Math.max(4.2,Math.min(5,Math.round((RB[(i*3+1)%8]+RO[i%15])*10)/10))}
function refreshPast(){const p=document.getElementById('past');if(!p)return;const t=I18N[lang],j=lang==='mk'?0:1;
p.innerHTML=PAST.map(([k,dt],i)=>`<article class="card rv" data-dest="${k}" tabindex="0" role="button"><div class="rvh"><div><h3>${DEST[k][lang].t}</h3><small>📅 ${dt}</small></div><span class="dn">${t.done}</span></div><div class="rate"><span class="stars" style="--v:${rtv(i)/5*100}%">★★★★★</span> <b>${rtv(i).toFixed(1)}</b></div><p class="cm">“${CM[lang][(i*3+1)%8]}”</p><small>— ${GN[i][j]}</small></article>`).join('')}
const oaM=apply;apply=function(){oaM();refreshPast()};apply();
