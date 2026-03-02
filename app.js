// Minimal motion for elegance
document.querySelectorAll('section').forEach(sec=>{
  sec.style.opacity=0;
  sec.style.transform='translateY(30px)';
});
window.addEventListener('scroll',()=>{
  document.querySelectorAll('section').forEach(sec=>{
    const r=sec.getBoundingClientRect();
    if(r.top<window.innerHeight*0.85){
      sec.style.opacity=1;
      sec.style.transform='translateY(0)';
      sec.style.transition='all .8s ease';
    }
  });
});
