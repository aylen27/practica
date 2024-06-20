//sin comillas variables y con comillas string etiqueta o nombre de la clase
let listaD = document.createElement("ul");
document.body.appendChild(listaD);

let itemLista1 = document.createElement("Li");
itemLista1.textContent = "mucha tos en el aula"

let itemLista2 = document.createElement("Li");
itemLista2.textContent = "vamos a enfermarnos"

let item3 = document.createElement("Li");
item3.textContent = "aguante tini"

listaD.appendChild(itemLista1)
listaD.appendChild(itemLista2)
listaD.appendChild(item3)



//------aca selecciono el footer//


let futer = document.getElementById("piepagina");
futer.appendChild(listaD);

futer.style.backgroundColor = "violet"
item3.style.fontFamily = "impact"
futer.style.padding = "10px"
futer.style.boxShadow = "0 0 15px -5px black"


let hacheTres = document.querySelector("h3")
//hacheTres.classList.add("subrayado")

let itemLista5 = document.querySelectorAll("li")
itemLista5[4].classList.remove("subrayado")

function Agregar(){
    hacheTres.classList.add("subrayado")
}
function Remover(){
    hacheTres.classList.remove("subrayado")
}
let menuLateral = document.querySelector("aside")

function mostrarMenu(){
    menuLateral.classList.toggle("mostrar")
}