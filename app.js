//Seleccionar los elementos del DOM
const boton = document.querySelector('button');//se obtiene el primer elemento con la etiqueta boton
const color = document.getElementById('color');//obtener elemento que corresponde al id color (el texto) 

function generarColorHexAleatorio() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0 ; i < 6; i++) {
      let indiceAleatorio = Math.floor(Math.random() * 16);
      colorHex += digitos[indiceAleatorio];
    }
    return colorHex;
}

boton.addEventListener('click', function() {
  let colorAleatorio = generarColorHexAleatorio();
  //Actualizar el texto
  color.textContent = colorAleatorio;
  //Actualizar el color de fondo
  document.body.style.backgroundColor = colorAleatorio;
} );