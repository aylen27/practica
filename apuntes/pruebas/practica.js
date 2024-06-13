let tarjetaCapturada = document.getElementById("card")

console.log("muestro en conosla de card inclusive la primer etiqueta")
console.log(tarjetaCapturada)

console.log("muestro en conosla de card inclusive los espacios de indentado")
console.log(tarjetaCapturada.innerHTML)

console.log("muestra en consola solo el texto contenido de card")
console.log(tarjetaCapturada.innerText)

///------------------------------------------queryselector/--------------------------------
let capturaQuery = document.querySelector("#card")
console.log("muestro captura query")
console.log(capturaQuery)
//--------------------------queryselectorall----------------------/////
// let capturaQueryAll = document.querySelectorAll("Li")
// console.log("muestro capturaQuery")
// console.log(capturaQueryAll.innerText)
//---------------------------------------------------------/
let capturaQueryAll = document.querySelectorAll("Li");
capturaQueryAll.forEach((elemento) => {
    console.log(elemento);
 });
 