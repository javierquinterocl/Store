'use strict';

const producto = document.getElementById("producto");
const productoimagen = producto.querySelector(".producto__imagen");
const thumbs = producto.querySelector(".producto__thumbs");
const color = producto.querySelector("#propiedad-color");
console.log(productoimagen);

thumbs.addEventListener("click", (e) => {
  const element = e.target.tagName;

  if (element === "IMG") {
    const imagenSrc = e.target.src;
    const lastIndex = imagenSrc.lastIndexOf("/");
    const src = imagenSrc.substring(lastIndex + 1);
    productoimagen.src = `./img/tennis/${src} `;
  }
});

color.addEventListener("click", (e) => {

    if (e.target.tagName === 'INPUT') {
        productoimagen.src = `./img/tennis/${e.target.value}.jpg`;
        console.log(e.target.value);
    }
});
