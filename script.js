const titlu =
document.querySelector(".titlu");
const text =
document.querySelector(".text");
const subtitlu =
document.querySelector(".subtitlu");
const body = document.body;
function culoareRandom() {
const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);
return `rgb(${r}, ${g}, ${b})`;
}
function schimbaCulori() {
titlu.style.color = culoareRandom();
text.style.color = culoareRandom();
subtitlu.style.color = culoareRandom();
body.style.backgroundColor = culoareRandom();
}
setInterval(schimbaCulori, 2000);