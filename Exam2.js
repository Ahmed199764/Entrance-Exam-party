"use strict";

var Gallary = [
    "assets/bag.jpg",
    "assets/banana.jpg",
    "assets/bathroom.jpg",
    "assets/boots.jpg",
    "assets/breakfast.jpg",
    "assets/bubblegum.jpg",
    "assets/chair.jpg",
    "assets/cthulhu.jpg",
    "assets/dog-duck.jpg",
    "assets/dragon.jpg",
];

var Con1 = document.getElementById("container");
var firstImage = document.getElementById("leftImage");
var secImage = document.getElementById("centerImage");
var thirdImage = document.getElementById("rightImage");

var selectedImage =document.getElementById("selectedImage");

function random(){
    var max =10;
    var min=0;
    var Cal = Math.floor(Math.random()*(max-min) + min);
    return Cal;
}

firstImage.setAttribute("src",Gallary[random()]);
secImage.setAttribute("src",Gallary[random()]);
thirdImage.setAttribute("src",Gallary[random()]);

function imgs(Cal){
this.name=Cal.split('.')[0];
this.imgPath=`assets/${this.name}.jpg`;
imgs.all.push(this);
}

imgs.all = [];

for(var i=0;i<Gallary.length;i++){
    new imgs(Gallary[i]);
}


// firstImage.setAttribute('src',`${imgs.all[random()].imgPath}`);
// secImage.setAttribute('src',`${imgs.all[random()].imgPath}`);
// thirdImage.setAttribute('src',`${imgs.all[random()].imgPath}`);

// var x = imgs.all[random()].imgPath;
// var y = imgs.all[random()].imgPath;
// var z = imgs.all[random()].imgPath;

// leftImage.setAttribute('src',x);
// centerImage.setAttribute('src',y);
// rightImage.setAttribute('src',z);


// container.addEventListener('click',function(event){
//     event.preventDefault();
    
//     if(event.target.id == 'leftImage'){
//         var imageSelect = document.createElement('img');
//         imageSelect.setAttribute('src',x);
//         selectedImage.appendChild(container);

//     } else if(event.target.id == 'centerImage'){
//         var imageSelect = document.createElement('img');
//         imageSelect.setAttribute('src',y);
//         selectedImage.appendChild(container);


//     } else if(event.target.id == 'rightImage'){
//         var imageSelect = document.createElement('img');
//         imageSelect.setAttribute('src',z);
//         selectedImage.appendChild(container);
//     }
    
// });

function setImg(){
    var localSet =JSON.stringify(Imgs.all);
    localStorage.setItem('selected',imgPath)
}