'use strict'

let color=prompt("Elije un color(azul, verde o rojo: )")
let Nombre=prompt("Dime tu nombre: ")
let frase = /^[A-Z]/

if (frase.test(Nombre))
{
    let contenedorNombre = document.querySelector("#Nombre")  
    contenedorNombre.textContent = Nombre
    console.log(contenedorNombre.textContent)

    if (color=="azul")
        contenedorNombre.className="azul"
    else if (color=="verde")
        contenedorNombre.className="verde"
    else 
        contenedorNombre.className="rojo"
}
else
    alert("Incorrecto no empieza por mayuscula")

let telefono=Number(prompt("Dime tu numero de telefono: "))
    frase = /^[\d]{3}[-]*([\d]{2}[-]*){2}[\d]{2}$/

if(frase.test(telefono))
{
let contenedorTelefono = document.querySelector("#Telefono")  
contenedorTelefono.textContent = telefono
console.log(contenedorTelefono.textContent)

    if (color=="azul")
        contenedorTelefono.className="azul"
    else if (color=="verde")
        contenedorTelefono.className="verde"
    else 
        contenedorTelefono.className="rojo"
}
else
    alert("Incorrecto")

let correo=(prompt("Dime tu correo: "))
frase = /^[\w]+@{1}[\w]+\.[a-z]{2,3}$/

if(frase.test(correo))
{
let contenedorCorreo = document.querySelector("#Correo")  
contenedorCorreo.textContent = correo
console.log(contenedorCorreo.textContent)

    if (color=="azul")
        contenedorCorreo.className="azul"
    else if (color=="verde")
        contenedorCorreo.className="verde"
    else 
        contenedorCorreo.className="rojo"
}
else
    alert("Incorrecto")
