'use strict';

var productButton1  =document.getElementById('product-button-1');
var productButton2 = document.getElementById('product-button-2');
var productButton3 = document.getElementById('product-button-3');

var mallImg1 = document.getElementById('mall-img-1');
var mallImg2 = document.getElementById('mall-img-2');
var mallImg3 = document.getElementById('mall-img-3');

function Pictures(url) {
  this.url = url;
  this.votes = 0;
}

var allPictures = [
  new Pictures('images/bag.jpg'),
  new Pictures('images/banana.jpg'),
  new Pictures('images/bathroom.jpg'),
  new Pictures('images/boots.jpg'),
  new Pictures('images/breakfast.jpg'),
  new Pictures('images/bubblegum.jpg'),
  new Pictures('images/chair.jpg'),
  new Pictures('images/cthulhu.jpg'),
  new Pictures('images/dog-duck.jpg'),
  new Pictures('images/dragon.jpg'),
  new Pictures('images/pen.jpg'),
  new Pictures('images/pet-sweep.jpg'),
  new Pictures('images/scissors.jpg'),
  new Pictures('images/shark.jpg'),
  new Pictures('images/sweep.png'),
  new Pictures('images/tauntaun.jpg'),
  new Pictures('images/unicorn.jpg'),
  new Pictures('images/usb.gif'),
  new Pictures('images/water-can.jpg'),
  new Pictures('images/wine-glass.jpg')];

var button1 = allPictures[0];
var button2 = allPictures[1];
var button3 = allPictures[2];

productButton1.addEventListener('click', function(e){
  button1.votes++;
  pickNewPictures();

});

productButton2.addEventListener('click', function (e) {
  button2.votes++;
  pickNewPictures();
});

productButton3.addEventListener('click', function (e) {
  button3.votes++;
  pickNewPictures();
});

function pickNewPictures() {
  button1 = allPictures[Math.floor(Math.random() * allPictures.length)];
  mallImg1.src = button1.url;

  button2 = allPictures[Math.floor(Math.random() * allPictures.length)];
  mallImg2.src = button2.url;

  button3 = allPictures[Math.floor(Math.random() * allPictures.length)];
  mallImg3.src = button3.url;
}