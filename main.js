'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  open.addEventListener('click' , () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  // 上と逆の処理
  close.addEventListener('click', ()=>{
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

}