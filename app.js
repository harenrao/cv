// Scroll reveal
const reveals=document.querySelectorAll('.reveal');
const obs=new IntersectionObserver(entries=>{
 entries.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('active')}
 })
},{threshold:.2});
reveals.forEach(r=>obs.observe(r));

// Counters
const counters=document.querySelectorAll('[data-count]');
counters.forEach(c=>{
 let end=parseFloat(c.dataset.count);
 let cur=0;
 let inc=end/60;
 function tick(){
  cur+=inc;
  if(cur<end){
    c.innerText=cur.toFixed(end%1?1:0);
    requestAnimationFrame(tick);
  }else{
    c.innerText=end;
  }
 }
 obs.observe(c.parentElement);
 tick();
});

// Dark toggle
document.getElementById('themeToggle').onclick=()=>{
 document.body.classList.toggle('darker');
};
