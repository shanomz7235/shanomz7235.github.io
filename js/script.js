function toggleMenu() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}


const images = ['Image/coding.png', 'Image/coding2.png', 'Image/coding3.png', 'Image/coding4.png', 'Image/coding5.png', 'Image/coding6.png'];
const imgElement = document.getElementById('skillImage');
let currentIndex = 0;

function changeImage() {
    imgElement.src = images[currentIndex];
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
  }

window.onload = changeImage;
setInterval(changeImage, 3000);