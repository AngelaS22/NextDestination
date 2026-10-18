/* team.js – страница Тим: LinkedIn + е-пошта копчиња, недостасувачки албански преводи.
   LinkedIn: линкот отвора пребарување по име; заменете го со вистински профил (атрибутот href на .tl.li). */
Object.assign(I18N.mk,{tm_li:"LinkedIn",tm_mail:"Е-пошта",tm_li_t:"Отвори LinkedIn профил",tm_mail_t:"Испрати е-пошта",tm_subj:"NextDestination – ",tm_copied:"Е-адресата е копирана: "});
Object.assign(I18N.en,{tm_li:"LinkedIn",tm_mail:"E-mail",tm_li_t:"Open LinkedIn profile",tm_mail_t:"Send an e-mail",tm_subj:"NextDestination – ",tm_copied:"E-mail address copied: "});
Object.assign(I18N.sq,{tm_li:"LinkedIn",tm_mail:"Email",tm_li_t:"Hap profilin në LinkedIn",tm_mail_t:"Dërgo email",tm_subj:"NextDestination – ",tm_copied:"Adresa e email-it u kopjua: ",
 team_intro:"Njerëzit pas çdo udhëtimi të planifikuar mirë – me përvojë, të arritshëm dhe gjithmonë gati të ndihmojnë.",
 t1_p:"Udhëheq ekipin dhe kujdeset që çdo udhëtim të planifikohet me kujdes.",t2_p:"Ju ndihmon të gjeni destinacionin, fluturimin dhe paketën e duhur.",t3_p:"Kujdeset për komunikimin, detajet dhe mbështetjen para dhe gjatë udhëtimit.",
 team_stat1:"vite përvojë",team_stat2:"mbështetje",team_stat3:"destinacione",
 team_cta_h:"Gati për aventurën tjetër?",team_cta_p:"Na tregoni çfarë keni në mendje dhe ekipi ynë do t’ju ndihmojë ta bëni udhëtim.",team_cta_b:"Na kontaktoni"});
(function(){
const MAIL='info@nextdestination.mk';let tt;
function toast(msg){let t=document.getElementById('toast');if(!t){t=document.createElement('div');t.id='toast';t.setAttribute('role','status');t.setAttribute('aria-live','polite');document.body.appendChild(t)}
 t.textContent=msg;t.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('show'),3200)}
function copy(txt){if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(txt).catch(()=>fb(txt));fb(txt);return Promise.resolve()}
function fb(txt){const a=document.createElement('textarea');a.value=txt;a.setAttribute('readonly','');a.style.cssText='position:fixed;opacity:0;top:0';document.body.appendChild(a);a.select();try{document.execCommand('copy')}catch(e){}a.remove()}
function labels(){const t=I18N[lang];document.querySelectorAll('.team-links').forEach(g=>{const nm=lang==='mk'?g.dataset.mk:g.dataset.name,li=g.querySelector('.li'),ml=g.querySelector('.ml');
 const a1=t.tm_li_t+' – '+nm,a2=t.tm_mail_t+' – '+nm;li.title=a1;li.setAttribute('aria-label',a1);ml.title=a2;ml.setAttribute('aria-label',a2);
 ml.href='mailto:'+MAIL+'?subject='+encodeURIComponent(t.tm_subj+nm)})}
document.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('.team-links .ml');if(!a)return;
 /* mailto: се отвора нормално; ако нема инсталирана е-пошта (прозорецот не го губи фокусот) – адресата се копира */
 let left=false;const mark=()=>{left=true};addEventListener('blur',mark,{once:true});document.addEventListener('visibilitychange',mark,{once:true});
 setTimeout(()=>{removeEventListener('blur',mark);document.removeEventListener('visibilitychange',mark);if(!left){copy(MAIL).then(()=>toast(I18N[lang].tm_copied+MAIL))}},1200)});
const oaT=apply;apply=function(){oaT();labels()};apply();
})();
