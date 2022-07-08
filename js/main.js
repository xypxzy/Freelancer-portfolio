 const nav = document.querySelector('#nav');
 const navBtn = document.querySelector('#nav__btn');
 const navBtnImg = document.querySelector('#nav__btn__img');

 navBtn.onclick = () => {
     if (nav.classList.toggle('open')) {
         navBtnImg.src = "./img/nav close.svg";
     } else {
         navBtnImg.src = "./img/nav.svg"
     }
 }