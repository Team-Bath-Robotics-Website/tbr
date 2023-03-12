const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

const pics = document.querySelectorAll(".gallery-img");
const button1 = document.querySelector("#forward");
const button2 = document.querySelector("#backward");
const imgnum = document.querySelector(".imgnum");
const total = pics.length;
let curr = 0;

pics[0].style.display="flex";
imgnum.textContent=`1/${total}`;
console.log("hi");

const timeDelay=2000;

let currTimer=setTimeout(nextImg, timeDelay);


function nextImg() {
    clearTimeout(currTimer);
    pics[curr].style.display="none";

    if (curr+1==total) {
        curr=0;
    }

    else {
        curr++;
    }

    console.log("test");
    pics[curr].style.display="block";
    imgnum.textContent=`${curr+1}/${total}`;
    currTimer=setTimeout(nextImg, timeDelay);
}

button1.onclick = nextImg;

button2.onclick = () => {
    console.log("test");
    pics[curr].style.display="none";

    if (curr==0) {
        curr=total-1;
    }

    else {
        curr--;
    }

    console.log("test");
    pics[curr].style.display="flex";
    imgnum.textContent=`${curr+1}/${total}`;
}