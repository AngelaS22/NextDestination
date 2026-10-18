/* motion.js – поживо движење: reveal при скрол, 3D навалување на картички, паралакса, декоративни честички */
(function(){
const mm=q=>window.matchMedia?window.matchMedia(q).matches:false;const RM=mm('(prefers-reduced-motion:reduce)')||!window.IntersectionObserver;
const io=RM?null:new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
function scan(){document.querySelectorAll('[data-anim]:not([data-seen]),.faqs .qa:not([data-seen]),.nc:not([data-seen])').forEach((el,i)=>{el.dataset.seen=1;if(RM){el.classList.add('in');return}
if(!el.hasAttribute('data-anim')&&!el.classList.contains('nc')){el.setAttribute('data-anim','');el.style.transitionDelay=(i%5)*70+'ms'}io.observe(el)})}
window.motionScan=scan;scan();
/* 3D tilt */
if(!RM&&mm('(hover:hover) and (pointer:fine)')){
document.addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.card.dest,.dcard,.nc,.sv-vis,.of,.rvw');
document.querySelectorAll('.tilting').forEach(x=>{if(x!==c){x.classList.remove('tilting');x.style.transform=''}});
if(!c||c.closest('.mod'))return;const r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;
c.classList.add('tilting');c.style.transform=`perspective(900px) rotateX(${(-py*7).toFixed(2)}deg) rotateY(${(px*9).toFixed(2)}deg) translateY(-6px)`},{passive:true});
document.addEventListener('pointerleave',()=>document.querySelectorAll('.tilting').forEach(x=>{x.classList.remove('tilting');x.style.transform=''}),true)}
/* паралакса на банери */
const bn=document.querySelector('.banner:not(.sv-hero):not(.dhero)');
if(bn&&!RM){addEventListener('scroll',()=>{bn.style.setProperty('--py',Math.min(scrollY,500)*.25+'px')},{passive:true})}
/* честички во hero */
const hero=document.querySelector('.hero');
if(hero&&!RM){['✈️','☁️','🌍','🧳','📍','☁️'].forEach((s,i)=>{const f=document.createElement('span');f.className='fx';f.textContent=s;f.setAttribute('aria-hidden','true');f.style.left=(8+i*16)+'%';f.style.bottom=(4+(i%3)*14)+'%';f.style.animationDelay=(-i*2.4)+'s';f.style.fontSize=(1.6+(i%3)*.6)+'rem';hero.appendChild(f)});
const sd=document.createElement('span');sd.className='scrolld';sd.setAttribute('aria-hidden','true');hero.appendChild(sd)}
})();
