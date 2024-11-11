import { visit } from "../script.js/visit.js";
import { thirdpics } from "../script.js/3rdimage.js";
import { secImage } from "../script.js/2ndimage.js";
import {img} from "../script.js/image.js";
import{cart} from '../script.js/cart.js'


const allSVGs = document.querySelectorAll('.svgs');
allSVGs.forEach(svg => {
    svg.setAttribute("style", "float: right; margin-left: 8px; color:white");

    
});

let imageset = '';

{/* <button id="prevBtn" class="border-y-transparent">&lt;</button> */}
img.forEach((photo) => {
     imageset += ` 
     
        <div class="slider">
    
                <div class="image-container">
                    <img class="ss" src="${photo.image}" alt="Jewelry Set">
                    <div class="overlay-text btnx">${photo.name}</div>
                    

         </div> 
       
     
      `
    
});



document.querySelector('.slider').innerHTML = imageset;

console.log('deba')
let imageset2 ='';
secImage.forEach((simage)=>{
   imageset2 += `<div class="">
            <img class="pip" src="${simage.image}">
            <p class="pills">IN STOCK</p>
        </div>
 
    `
});
// document.querySelector('.operate').innerHTML = imageset2


//  const firstbutton =    document.querySelectorAll('.raps')
//  .forEach(button => {
//     button.addEventListener('click', () => {
//           console.log(button.dataset);

//         //   cart.forEach(item =>{
//         //     if(photoName === item.photoName)
//         //   })
       
//     });
//  });
  
//  let imageset3 ='';
//   thirdpics.forEach((timage)=>{
//     imageset3 +=`<div class="operate flex">
//                 <img class="pip" src="${timage.image}">
//                 <p class="pills">IN STOCK</p>
//             </div>
//      `
//   })  



// const slideimages = document.querySelectorAll('ss');
// slideimages.forEach(image =>{
//     image.setAttribute("style", "width: 300px; height: 300px;")
// })

const slider = document.querySelector('.slider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;
const images = document.querySelectorAll('.image-container');
const imageWidth = images[0].clientWidth;
const totalImages = images.length;


function updateSliderPosition() {
    slider.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
}


function slideToNextImage() {
    currentIndex++;
    if (currentIndex >= totalImages - 3.5) {
        currentIndex = 0; 
    }
    updateSliderPosition();
}



function slideToPrevImage() {
    currentIndex--;
    if (currentIndex = 0) {
        currentIndex = totalImages ; 
    }
    updateSliderPosition();
}


nextBtn.addEventListener('click', slideToNextImage);
prevBtn.addEventListener('click', slideToPrevImage);


const overlayText = "Sample Text";
const imageContainers = document.querySelectorAll('.image-containers');
imageContainers.forEach(container => {
    
    const textElement = document.createElement('span');
    textElement.classList.add('overlay-text');
    textElement.textContent = overlayText;
    
    
    container.appendChild(textElement);
});

