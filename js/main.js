'use strict';

let nav = document.querySelector('#nav'),
  mTop = document.querySelector('.mTop');
nav.style.transition = '.5s'
mTop.style.display = 'none'

window.onscroll = () => {
  if (window.pageYOffset > 200) {
    nav.style.backgroundColor = 'rgba(255, 245, 195, 0.8)'
    mTop.classList.add('mTop')
    mTop.innerHTML = '<a href="#start"><span><i class="fas fa-angle-up fa-2x"></i></span></a>';
    mTop.style.display = 'block'
    mTop.style.color = '#000'
  } else {
    nav.style.backgroundColor = 'rgba(255, 245, 195, 0.0)'
    mTop.classList.remove('mTop') 
    mTop.innerHTML = '';
    mTop.style.display = 'none'
  }
  console.log(window.pageYOffset)
}

nav.addEventListener('mouseover', () => {
  nav.style.backgroundColor = 'rgb(255, 245, 195)'
})
nav.addEventListener('mouseout', () => {
  nav.style.backgroundColor = 'rgba(255, 245, 195, 0.8)'
})


let imgs = document.querySelectorAll('.sectionFairy_img'),
  fNext = document.querySelector('#fairy_next'),
  fPrev = document.querySelector('#fairy_prev');

for (let i = 0; i < imgs.length; i++) {
  imgs[i].style.opacity = '0'
  imgs[i].style.transition = '1s'
}
imgs[0].style.opacity = '1'

let counter = 0;

fNext.onclick = () => {
  if (counter < 2) {
    imgs[counter].style.opacity = '0'
    counter++
    imgs[counter].style.opacity = '1'
  } else {
    imgs[counter].style.opacity = '0'
    counter = 0;
    imgs[counter].style.opacity = '1'
  }
}

fPrev.onclick = () => {
  if (counter > 0) {
    imgs[counter].style.opacity = '0'
    counter--
    imgs[counter].style.opacity = '1'
  } else {
    imgs[counter].style.opacity = '0'
    counter = 2;
    imgs[counter].style.opacity = '1'
  }
}

let imgs_our = document.querySelectorAll('.sectionOur_img'),
  oNext = document.querySelector('#our_next'),
  oPrev = document.querySelector('#our_prev'),
  count = 0;

for (let i = 0; i < imgs_our.length; i++) {
  imgs_our[i].style.display = 'none'
}
imgs_our[0].style.display = 'block'

oNext.onclick = () => {
  if (count < 2) {
    imgs_our[count].style.display = 'none'
    count++
    imgs_our[count].style.display = 'block'
  } else {
    imgs_our[count].style.display = 'none'
    count = 0
    imgs_our[count].style.display = 'block'
  }
}

oPrev.onclick = () => {
  if (count > 0) {
    imgs_our[count].style.display = 'none'
    count--
    imgs_our[count].style.display = 'block'
  } else {
    imgs_our[count].style.display = 'none'
    count = 2
    imgs_our[count].style.display = 'block'
  }
}



let ourBtn = document.querySelector('#ourBtn'),
  modal = document.querySelector('.modal'),
  close = document.querySelector('#close');

ourBtn.onclick = () => {
  modal.style.display = 'block'
  nav.style.display = 'none'
}
close.onclick = () => {
  modal.style.display = 'none'
  nav.style.display = 'block'
}