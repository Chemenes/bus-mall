'use strict';

var productButton1  =document.getElementById('product-button-1');
var productButton2 = document.getElementById('product-button-2');
var productButton3 = document.getElementById('product-button-3');

var mallImg1 = document.getElementById('mall-img-1');
var mallImg2 = document.getElementById('mall-img-2');
var mallImg3 = document.getElementById('mall-img-3');



function Pictures(url, name) {
  this.url = url;
  this.name = name,
  this.votes = 0;

}

var totalClickCounter = 0;

var allPictures = [
  new Pictures('images/bag.jpg', 'r2d2-bag'),
  new Pictures('images/banana.jpg', 'Banana Cutter'),
  new Pictures('images/bathroom.jpg', 'Ipad Bathroom Stand'),
  new Pictures('images/boots.jpg', 'Rubber Boots'),
  new Pictures('images/breakfast.jpg', 'Breakfast Oven'),
  new Pictures('images/bubblegum.jpg', 'Meatball Gum'),
  new Pictures('images/chair.jpg', 'Chair'),
  new Pictures('images/cthulhu.jpg', 'Cthulhu'),
  new Pictures('images/dog-duck.jpg', 'Dog Duck'),
  new Pictures('images/dragon.jpg', 'Dragon Meat'),
  new Pictures('images/pen.jpg', 'Utencil'),
  new Pictures('images/pet-sweep.jpg', 'Pet-Sweep'),
  new Pictures('images/scissors.jpg', 'Pizza-Scissors'),
  new Pictures('images/shark.jpg', 'Shark-Sleeper'),
  new Pictures('images/sweep.png', 'Baby-Sweep'),
  new Pictures('images/tauntaun.jpg', 'Tauntaun-Sleeper'),
  new Pictures('images/unicorn.jpg', 'Unicorn-Meat'),
  new Pictures('images/usb.gif', 'Lizard-Usb'),
  new Pictures('images/water-can.jpg', 'Water-Can'),
  new Pictures('images/wine-glass.jpg','Wine-Glass')];

var button1 = allPictures[0];
var button2 = allPictures[1];
var button3 = allPictures[2];

function handleButton1 (e){
  button1.votes++;
  totalClickCounter++;
  totalVote();
  pickNewPictures();

}


function handleButton2 (e) {
  button1.votes++;
  totalClickCounter++;
  totalVote();
  pickNewPictures();

}


function handleButton3 (e) {
  button1.votes++;
  totalClickCounter++;
  totalVote();
  pickNewPictures();

}

productButton1.addEventListener('click', handleButton1);
productButton2.addEventListener('click', handleButton2);
productButton3.addEventListener('click', handleButton3);


// productButton2.addEventListener('click', function (e) {
//   button2.votes++;
//   totalClickCounter++;
//   pickNewPictures();
// });

// productButton3.addEventListener('click', function (e) {
//   button3.votes++;
//   totalClickCounter++;
//   pickNewPictures();
// });
function totalVote(){
  if (totalClickCounter === 6) {
    productButton1.removeEventListener('click', handleButton1);
    productButton2.removeEventListener('click', handleButton2);
    productButton3.removeEventListener('click', handleButton3);
    showResults();

  }
}

function pickNewPictures() {
  button1 = allPictures[Math.floor(Math.random() * allPictures.length)];
  mallImg1.src = button1.url;

  button2 = allPictures[Math.floor(Math.random() * allPictures.length)];
  mallImg2.src = button2.url;

  button3 = allPictures[Math.floor(Math.random() * allPictures.length)];
  mallImg3.src = button3.url;
}

pickNewPictures();

var totalUl = document.getElementById('total');

function showResults() {
  for(var i = 0; i < allPictures.length; i++){
    var ulLi = document.createElement('li');
    ulLi.textContent = ' ' + allPictures[i].name + ' ' + allPictures[i].votes;
    totalUl.appendChild(ulLi);
  }




}