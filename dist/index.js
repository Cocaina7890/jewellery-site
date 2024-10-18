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

 const firstbutton =    document.querySelectorAll('.raps')
 .forEach(button => {
    button.addEventListener('click', () => {
          console.log(button.dataset);

        //   cart.forEach(item =>{
        //     if(photoName === item.photoName)
        //   })
       
    });
 });



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
const dropdownToggles = document.querySelectorAll('[id$="DropdownToggle"]');
    const dropdownMenus = document.querySelectorAll('[id$="DropdownMenu"]');

    dropdownToggles.forEach((toggle, index) => {
        toggle.addEventListener('click', () => {
            dropdownMenus[index].classList.toggle('opacity-0');
            dropdownMenus[index].classList.toggle('invisible');
        });
    });

    // Optional: Close the dropdown if clicking outside of it
    document.addEventListener('click', (event) => {
        dropdownMenus.forEach(menu => {
            if (!menu.previousElementSibling.contains(event.target) && !menu.contains(event.target)) {
                menu.classList.add('opacity-0');
                menu.classList.add('invisible');
            }
        });
    });
