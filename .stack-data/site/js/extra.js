/* extra.js – cookie preferences, newsletter, FAQ, reviews, contact form, translated page titles.
   Loaded LAST on every page. */
(function(){
const X={
mk:{k:{c_set:"Подесувања",c_pol:"Политика за приватност",cm_nec:"Неопходни",cm_nec_d:"Јазик, избор за колачиња и зачувани дестинации. Секогаш активни.",cm_an:"Аналитички",cm_an_d:"Ни помагаат да разбереме како се користи страницата.",cm_mk:"Маркетинг",cm_mk_d:"Персонализирани понуди и реклами.",cm_save:"Зачувај избор",
ft_about:"Туристичка агенција од Скопје од 2014 година – аранжмани, авионски билети и патувања по ваша мера.",ft_lic:"Лиценца бр. ХХХХ/2014",ft_nav:"Навигација",l_priv:"Политика за приватност",l_terms:"Услови за патување",
nl_h:"Newsletter",nl_ph:"Вашата е-пошта",nl_btn:"Претплати се",nl_consent:"Се согласувам да добивам понуди по е-пошта.",nl_ok:"Благодариме! Успешно се претплативте.",nl_err:"Внесете валидна е-пошта и означете согласност.",
f_phone:"Телефон (опционално)",f_topic:"Тема",f_consent:"Се согласувам моите податоци да се обработат согласно",f_cerr:"Потребна е согласност.",e_name:"Внесете име.",e_email:"Внесете валидна е-пошта.",e_msg:"Пораката мора да има барем 10 знаци.",f_mail:"Се отвора вашата е-пошта за да ја испратите пораката.",f_fail:"Грешка при испраќање. Обидете се повторно.",skip:"Прескокни на содржина",t_home:"Туристичка агенција",nf_t:"Страницата не е пронајдена",nf_p:"Страницата што ја барате не постои или е преместена.",nf_b:"Кон почетна"},
rvh:"Што велат нашите патници",faqh:"Често поставувани прашања",q:["„","“"],
rev:[["Марија К.","Скопје · Санторини","Одлична организација од почеток до крај. Хотелот, трансферите и водичот – сè беше точно како што беше договорено.",5],["Бесник Р.","Тетово · Истанбул","Многу љубезен тим и најдобра цена што ја најдов. Секако ќе патуваме повторно преку нив.",5],["Елена и Никола","Битола · Прага","Новогодишното патување беше магично. Секое прашање го решија за неколку минути.",4]],
faq:[["Како да направам резервација?","Испратете барање преку контакт формата, јавете се на +389 2 123 456 или посетете ја нашата канцеларија. Понуда добивате во рок од 24 часа."],["Кои документи ми се потребни?","Важечки пасош или лична карта (зависно од земјата) и, каде што е потребно, виза. Пред уплата ви кажуваме што точно е потребно."],["Може ли плаќање на рати?","За избрани аранжмани да – со аконтација при резервација и остатокот пред патувањето. Деталите ги добивате со понудата."],["Што ако морам да откажам?","Условите за откажување се дел од Условите за патување и ви ги даваме пред уплата."],["Дали осигурувањето е вклучено?","Не секогаш. Препорачуваме патничко осигурување и можеме да го организираме заедно со аранжманот."],["Организирате ли групни и фирмени патувања?","Да. Подготвуваме групни и фирмени програми по мерка – контактирајте нè со вашите желби."]]},
en:{k:{c_set:"Settings",c_pol:"Privacy policy",cm_nec:"Necessary",cm_nec_d:"Language, cookie choice and saved destinations. Always on.",cm_an:"Analytics",cm_an_d:"Help us understand how the site is used.",cm_mk:"Marketing",cm_mk_d:"Personalised offers and ads.",cm_save:"Save choices",
ft_about:"A travel agency from Skopje since 2014 – packages, flights and tailor-made trips.",ft_lic:"Licence no. XXXX/2014",ft_nav:"Navigation",l_priv:"Privacy policy",l_terms:"Travel terms",
nl_h:"Newsletter",nl_ph:"Your e-mail",nl_btn:"Subscribe",nl_consent:"I agree to receive offers by e-mail.",nl_ok:"Thank you! You are subscribed.",nl_err:"Enter a valid e-mail and tick the consent box.",
f_phone:"Phone (optional)",f_topic:"Topic",f_consent:"I agree to the processing of my data according to the",f_cerr:"Consent is required.",e_name:"Enter your name.",e_email:"Enter a valid e-mail.",e_msg:"The message needs at least 10 characters.",f_mail:"Your e-mail app is opening so you can send the message.",f_fail:"Sending failed. Please try again.",skip:"Skip to content",t_home:"Travel agency",nf_t:"Page not found",nf_p:"The page you are looking for does not exist or has moved.",nf_b:"Back to home"},
rvh:"What our travelers say",faqh:"Frequently asked questions",q:["“","”"],
rev:[["Marija K.","Skopje · Santorini","Great organisation from start to finish. Hotel, transfers and guide – everything was exactly as agreed.",5],["Besnik R.","Tetovo · Istanbul","A very friendly team and the best price I could find. We will definitely travel with them again.",5],["Elena & Nikola","Bitola · Prague","The New Year trip was magical. Every question was solved within minutes.",4]],
faq:[["How do I book?","Send a request through the contact form, call +389 2 123 456 or visit our office. You receive an offer within 24 hours."],["Which documents do I need?","A valid passport or ID card (depending on the country) and a visa where required. We tell you exactly what you need before you pay."],["Can I pay in instalments?","For selected packages, yes – a deposit at booking and the rest before departure. Details come with your offer."],["What if I have to cancel?","Cancellation terms are part of the Travel terms and we give them to you before payment."],["Is insurance included?","Not always. We recommend travel insurance and can arrange it together with your package."],["Do you organise group and corporate trips?","Yes. We prepare tailor-made group and corporate programmes – contact us with your wishes."]]},
sq:{k:{c_set:"Cilësimet",c_pol:"Politika e privatësisë",cm_nec:"Të domosdoshme",cm_nec_d:"Gjuha, zgjedhja e cookies dhe destinacionet e ruajtura. Gjithmonë aktive.",cm_an:"Analitike",cm_an_d:"Na ndihmojnë të kuptojmë si përdoret faqja.",cm_mk:"Marketing",cm_mk_d:"Oferta dhe reklama të personalizuara.",cm_save:"Ruaj zgjedhjen",
ft_about:"Agjenci udhëtimesh nga Shkupi që nga 2014 – aranzhime, bileta avioni dhe udhëtime sipas dëshirës.",ft_lic:"Licenca nr. XXXX/2014",ft_nav:"Navigimi",l_priv:"Politika e privatësisë",l_terms:"Kushtet e udhëtimit",
nl_h:"Newsletter",nl_ph:"Email-i juaj",nl_btn:"Abonohu",nl_consent:"Pranoj të marr oferta me email.",nl_ok:"Faleminderit! U abonuat me sukses.",nl_err:"Shkruani email të vlefshëm dhe shënoni pëlqimin.",
f_phone:"Telefoni (opsionale)",f_topic:"Tema",f_consent:"Pranoj përpunimin e të dhënave sipas",f_cerr:"Pëlqimi është i detyrueshëm.",e_name:"Shkruani emrin.",e_email:"Shkruani email të vlefshëm.",e_msg:"Mesazhi duhet të ketë të paktën 10 karaktere.",f_mail:"Po hapet email-i juaj për ta dërguar mesazhin.",f_fail:"Gabim gjatë dërgimit. Provoni përsëri.",skip:"Kalo te përmbajtja",t_home:"Agjenci udhëtimesh",nf_t:"Faqja nuk u gjet",nf_p:"Faqja që kërkoni nuk ekziston ose është zhvendosur.",nf_b:"Kthehu në kryefaqe"},
rvh:"Çfarë thonë udhëtarët tanë",faqh:"Pyetje të shpeshta",q:["„","“"],
rev:[["Marija K.","Shkup · Santorini","Organizim i shkëlqyer nga fillimi në fund. Hoteli, transferet dhe udhërrëfyesi – gjithçka siç ishte rënë dakord.",5],["Besnik R.","Tetovë · Stamboll","Ekip shumë i sjellshëm dhe çmimi më i mirë që gjeta. Pa dyshim do të udhëtojmë përsëri me ta.",5],["Elena & Nikola","Manastir · Pragë","Udhëtimi i Vitit të Ri ishte magjik. Çdo pyetje u zgjidh brenda pak minutash.",4]],
faq:[["Si mund të rezervoj?","Dërgoni kërkesë përmes formularit të kontaktit, telefononi +389 2 123 456 ose vizitoni zyrën tonë. Ofertën e merrni brenda 24 orësh."],["Cilat dokumente më duhen?","Pasaportë ose letërnjoftim i vlefshëm (sipas shtetit) dhe vizë kur kërkohet. Para pagesës ju themi saktësisht çfarë duhet."],["A mund të paguaj me këste?","Për aranzhime të zgjedhura po – me paradhënie në rezervim dhe pjesën tjetër para nisjes. Detajet vijnë me ofertën."],["Çfarë nëse duhet ta anuloj?","Kushtet e anulimit janë pjesë e Kushteve të udhëtimit dhe ju i japim para pagesës."],["A është i përfshirë sigurimi?","Jo gjithmonë. Rekomandojmë sigurim udhëtimi dhe mund ta organizojmë bashkë me aranzhimin."],["A organizoni udhëtime grupore dhe kompanish?","Po. Përgatisim programe grupore dhe korporative sipas dëshirës – na kontaktoni."]]}};
for(const l in X)Object.assign(I18N[l],X[l].k);

/* ---------- cookie preferences ---------- */
const cm=document.createElement('div');cm.id='cm';cm.className='ckm';cm.hidden=true;cm.setAttribute('role','dialog');cm.setAttribute('aria-modal','true');cm.setAttribute('aria-labelledby','cmh');
cm.innerHTML='<div class="ckb"><h3 id="cmh" data-i18n="c_manage"></h3>'+
'<label class="chk"><input type="checkbox" checked disabled><span><b data-i18n="cm_nec"></b><br><small data-i18n="cm_nec_d"></small></span></label>'+
'<label class="chk"><input type="checkbox" id="cp_an"><span><b data-i18n="cm_an"></b><br><small data-i18n="cm_an_d"></small></span></label>'+
'<label class="chk"><input type="checkbox" id="cp_mk"><span><b data-i18n="cm_mk"></b><br><small data-i18n="cm_mk_d"></small></span></label>'+
'<div class="ckr"><button class="btn" id="cm_save" type="button" data-i18n="cm_save"></button><button class="btn ghost" id="cm_all" type="button" data-i18n="c_acc"></button></div>'+
'<a href="privacy.html" data-i18n="c_pol"></a></div>';
document.body.appendChild(cm);
const $x=id=>document.getElementById(id),banner=$x('cookie');
const getP=()=>{try{return JSON.parse(localStorage.getItem('cookiePrefs'))}catch(e){return null}};
function saveP(a,m,st){try{localStorage.setItem('cookiePrefs',JSON.stringify({necessary:1,analytics:a,marketing:m}));localStorage.setItem('cookies',st)}catch(e){}banner.hidden=true;cm.hidden=true}
function openCm(){const p=getP()||{};$x('cp_an').checked=!!p.analytics;$x('cp_mk').checked=!!p.marketing;cm.hidden=false;$x('cp_an').focus()}
window.cookieConsent=()=>getP()||{necessary:1,analytics:0,marketing:0}; /* use this before loading analytics/marketing scripts */
$x('acc').addEventListener('click',()=>saveP(1,1,'accepted'));
$x('rej').addEventListener('click',()=>saveP(0,0,'rejected'));
$x('cset').addEventListener('click',openCm);
$x('cookieLink').onclick=e=>{e.preventDefault();openCm()};
$x('cm_save').onclick=()=>saveP($x('cp_an').checked?1:0,$x('cp_mk').checked?1:0,'custom');
$x('cm_all').onclick=()=>saveP(1,1,'accepted');
cm.addEventListener('click',e=>{if(e.target===cm)cm.hidden=true});
addEventListener('keydown',e=>{if(e.key==='Escape')cm.hidden=true});

/* ---------- newsletter ---------- */
const nl=$x('nl');
if(nl)nl.onsubmit=e=>{e.preventDefault();const t=I18N[lang],em=$x('nle').value.trim(),s=$x('nls');
 const ok=/^\S+@\S+\.\S+$/.test(em)&&$x('nlc').checked;s.style.color=ok?'#4ade80':'#fca5a5';s.textContent=t[ok?'nl_ok':'nl_err'];
 if(ok){try{const a=JSON.parse(localStorage.getItem('nl')||'[]');a.push(em);localStorage.setItem('nl',JSON.stringify(a))}catch(x){}nl.reset()}}; /* demo: replace with your mailing-list endpoint */

/* ---------- contact form ---------- */
const fm=$x('form'),ENDPOINT=''; /* paste a Formspree URL here (https://formspree.io/f/xxxx) to send for real; empty = opens the visitor's mail app */
if(fm)fm.onsubmit=async e=>{e.preventDefault();const t=I18N[lang],g=$x,st=g('status');
 const v={n:g('name').value.trim(),e:g('email').value.trim(),p:g('phone').value.trim(),t:g('topic').value,m:g('msg').value.trim()};
 const er={name:!v.n&&t.e_name,email:!/^\S+@\S+\.\S+$/.test(v.e)&&t.e_email,msg:v.m.length<10&&t.e_msg,consent:!g('consent').checked&&t.f_cerr};
 for(const k in er)g('e_'+k).textContent=er[k]||'';
 if(Object.values(er).some(Boolean)){st.style.color='#dc2626';st.textContent=t.err;return}
 if(g('hp').value)return;
 if(ENDPOINT){try{const r=await fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({name:v.n,email:v.e,phone:v.p,topic:v.t,message:v.m})});
  if(!r.ok)throw 0;st.style.color='#16a34a';st.textContent=t.ok;fm.reset()}catch(x){st.style.color='#dc2626';st.textContent=t.f_fail}}
 else{location.href='mailto:info@nextdestination.mk?subject='+encodeURIComponent(v.t+' – '+v.n)+'&body='+encodeURIComponent(v.m+'\n\n'+v.n+' · '+v.e+(v.p?' · '+v.p:''));st.style.color='#16a34a';st.textContent=t.f_mail}};

/* ---------- translated titles, FAQ, reviews ---------- */
const PG=document.body.dataset.page,TK={about:'nav_about',services:'nav_services',destinations:'nav_dest',team:'nav_team',blog:'nav_blog',offers:'nav_offers',contact:'nav_contact',privacy:'l_priv',terms:'l_terms',notfound:'nf_t'};
const esc=s=>s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
function extra(){const t=I18N[lang],D=X[lang];
 document.title=PG==='index'?'NextDestination – '+t.t_home:t[TK[PG]]+' – NextDestination';
 const rv=$x('revs'),fq=$x('faqs');
 if(rv){$x('rvh').textContent=D.rvh;rv.innerHTML=D.rev.map(r=>'<article class="card rvw"><div class="rvs" role="img" aria-label="'+r[3]+'/5">'+'★'.repeat(r[3])+'☆'.repeat(5-r[3])+'</div><p>'+D.q[0]+esc(r[2])+D.q[1]+'</p><b>'+esc(r[0])+'</b><small>'+esc(r[1])+'</small></article>').join('')}
 if(fq){$x('faqh').textContent=D.faqh;fq.innerHTML=D.faq.map(f=>'<details class="qa"><summary>'+esc(f[0])+'</summary><p>'+esc(f[1])+'</p></details>').join('')}}
const _ap=apply;apply=function(){_ap();extra()};
apply();
})();
