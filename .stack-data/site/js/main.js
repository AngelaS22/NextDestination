let lang=localStorage.getItem('lang')||'mk';
function apply(){const t=I18N[lang];document.documentElement.lang=lang;
 document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=t[e.dataset.i18n]);
 document.querySelectorAll('[data-ph]').forEach(e=>e.placeholder=t[e.dataset.ph]);
 document.getElementById('lang').value=lang;if(window.refreshDest)refreshDest()}
document.getElementById('lang').onchange=e=>{lang=e.target.value;localStorage.setItem('lang',lang);apply()};
const menu=document.getElementById('menu');
document.getElementById('burger').onclick=()=>menu.classList.toggle('open');
menu.onclick=()=>menu.classList.remove('open');
const fm=document.getElementById('form');if(fm)fm.onsubmit=e=>{e.preventDefault();
 const ok=name.value.trim()&&msg.value.trim()&&/^\S+@\S+\.\S+$/.test(email.value);
 const s=document.getElementById('status');s.style.color=ok?'#16a34a':'#dc2626';s.textContent=I18N[lang][ok?'ok':'err'];
 if(ok)e.target.reset()};
const ck=document.getElementById('cookie');
const setC=v=>{localStorage.setItem('cookies',v);ck.hidden=true};
acc.onclick=()=>setC('accepted');rej.onclick=()=>setC('rejected');
cookieLink.onclick=e=>{e.preventDefault();ck.hidden=false};
if(!localStorage.getItem('cookies'))ck.hidden=false;
apply();

const pg=document.createElement('div');pg.id='prog';const tp=document.createElement('button');tp.id='top';tp.textContent='↑';tp.onclick=()=>scrollTo({top:0,behavior:'smooth'});
document.body.append(pg,tp);const nv=document.querySelector('.nav'),hc=document.querySelector('.hero .wrap');
function onS(){const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;pg.style.width=(h>0?y/h*100:0)+'%';
nv.classList.toggle('shrink',y>40);tp.classList.toggle('show',y>500);
if(hc&&y<innerHeight){hc.style.transform='translateY('+y*.35+'px)';hc.style.opacity=1-y/(innerHeight*.8)}}
addEventListener('scroll',onS,{passive:true});onS();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);
if(e.target.tagName==='LI'&&e.target.parentNode.classList.contains('stats')){const b=e.target.querySelector('b'),n=parseInt(b.textContent),s=b.textContent.replace(/[0-9]/g,'');let i=0;const t=setInterval(()=>{i+=Math.ceil(n/40);if(i>=n){i=n;clearInterval(t)}b.textContent=i+s},30)}}}),{threshold:.15});
document.querySelectorAll('.card,.sec h2,.stats li,.grid2>*,.banner h1').forEach((e,i)=>{e.classList.add('reveal');e.style.transitionDelay=(i%4)*90+'ms';io.observe(e)});

const qq=new URLSearchParams(location.search).get('q'),mg=document.getElementById('msg');if(qq&&mg)mg.value=qq;
