function menuOutline() {
  document.body.classList.toggle("open-nav");
}

const imageSources = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbEyj-LFvNK1yBs9wcI2_l8uCWw_WsJDXMSOEkar6-wA&s",
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/73669935278675.56f0c2c7ea84b.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcAFhWpYV-i2rtEleRTBOfGiTpF2zkhSupyixA3KVTNA&s",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/14cda14926289.560c6103a2798.png",
];

let image = document.getElementById("image");

let currentIndex = 0;

function changeImage() {
  image.src = imageSources[currentIndex];

  currentIndex = (currentIndex + 1) % imageSources.length;
}

setInterval(changeImage, 15000);
