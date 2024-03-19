let items = document.querySelectorAll(".gallery .list .item");
let thumbnail = document.querySelectorAll(".thumbnail .imgselector")
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let itemActive = 0;
let countItem = items.length;

next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    gallery();
}

prev.onclick = function(){
    itemActive = itemActive -1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    gallery();
}

function gallery(){
    let itemActiveOld = document.querySelector(".gallery .list .item.active");
    let thumbnailActiveOld = document.querySelector(".thumbnail .imgselector.active")
    itemActiveOld.classList.remove("active");
    thumbnailActiveOld.classList.remove("active");
    items[itemActive].classList.add("active");
    thumbnail[itemActive].classList.add("active")
}

for (let i = 0; i <= 8; i++) {
    thumbnail[i].onclick = function() {
        itemActive = i;
        gallery();
    }
}
const images = document.querySelectorAll(".gallery .list .item img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const close = document.querySelector(".close");
let test = document.getElementsByClassName("list")

for (let i = 0; i <= 8; i++) {
    items[i].onclick = function() {
        modal.classList.add("appear");
        modalImg.src = "images/"+(i+1)+".jpg";
        modalTxt.innerHTML = images[i].alt;
    }
}

close.onclick = function() {
    modal.classList.remove("appear");
}


