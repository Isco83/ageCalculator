//crear Variable para imputs e Identificar 
const diaNacimiento = document.getElementById('day');
const mesNacimiento = document.getElementById('mounht');
const añoNacimiento = document.getElementById('year');

//Crear Variable Para outputs e Identificar
const diaNacimiento_out = document.getElementById('DD');
const mesNacimiento_out = document.getElementById('MM');
const añoNacimiento_out = document.getElementById('YY');

//crear variable para el form + obtener el primer elemento del documento
const form = document.querySelector("form");

//agregamos un evento listener a la forma
form.addEventListener("submit",);

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

//declarando variables para meses de  30, 28, 31 y bisiestos 
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validar(){
    const inputs = document.querySelectorAll("input");
    let validador = true;
    inputs.forEach((i) =>{
        const parent = i.parentElement;
        if (!i.value) {
            i.style.borderColor = "red";
            parent.querySelector("letras").innerText = "Este Campo Es Requerido"
            validador = false;
        } else if (month.value > 12){
            month.style.borderColor = "red";
            month.parentElement.querySelector("letras").innerText = "Debe Ser Un Mes Valido"
            validador = false;
        } else if (day.value > 31){
            day.style.borderColor = "red";
            day.parentElement.querySelector("letras").innerText = "Debe Ser Un Dia Valido"
            validador = false;
        } else {
            i.style.borderColor = "black";
            parent.querySelector("letras").innerText = ""
            validador = true; 
        }
    })



}
