//crear Variable para imputs e Identificar 
const diaNacimiento = document.getElementById('day');
const mesNacimiento = document.getElementById('mounht');
const añoNacimiento = document.getElementById('year');

//Crear Variable Para outputs e Identificar
const diaNacimiento_out = document.getElementById('cajainput_DD');
const mesNacimiento_out = document.getElementById('cajainput_MM');
const añoNacimiento_out = document.getElementById('cajainput_YY');

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




