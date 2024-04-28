var image = document.getElementById("image");
var vien1 = document.getElementById("vien_1");
var vien2 = document.getElementById("vien_2");
var vien3 = document.getElementById("vien_3");
var khunganh = document.getElementById("khung_anh");
var text = document.getElementById("text");

vien1.style.visibility = "hidden";
vien2.style.visibility = "hidden";
vien3.style.visibility = "hidden";
setTimeout(() => {
  vien1.style.animation = "2.3s vien-1-animation";
}, 1000);
setTimeout(() => {
  vien1.style.visibility = "visible";
  vien2.style.animation = "1.6s vien-2-animation";
  vien3.style.animation = "1.6s vien-3-animation";
}, 3300);
setTimeout(() => {
  khunganh.style.backgroundColor = "rgb(225 , 0, 0)";
  image.style.animation = "3s image-animation";
  text.style.animation = "none";
}, 4900);
setTimeout(() => {
  image.style.visibility = "visible";
}, 7900);
