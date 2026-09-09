
document.querySelectorAll('.year').forEach(e=>e.textContent=new Date().getFullYear());

const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navlinks a').forEach(a=>{
  if(a.getAttribute('href')===path) a.classList.add('active');
});

document.querySelectorAll('.cert').forEach(img=>{
  img.addEventListener('click',()=>{
    const overlay=document.createElement('div');
    overlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:100;display:grid;place-items:center;padding:25px;cursor:zoom-out';
    const big=document.createElement('img');
    big.src=img.src;
    big.alt=img.alt;
    big.style.cssText='max-width:min(1100px,95vw);max-height:90vh;object-fit:contain;border:2px solid #ffd21f;border-radius:12px;box-shadow:0 20px 80px rgba(0,0,0,.7)';
    overlay.appendChild(big);
    overlay.addEventListener('click',()=>overlay.remove());
    document.body.appendChild(overlay);
  });
});
