/** 
*PERSONAS-B 
*Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y 
*reporte al final la edad promedio y la edad mayor entre las mujeres. 
*Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18), 
*José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16); la salida requerida 
*presenta el siguiente formato: 
*Edad promedio: 18.50 
*Edad mayor entre las mujeres: 19
*/

import cl_personas from "./Cl_personas.js";
import Cl_edadM from "./Cl_edadM.js";

let persona = new cl_personas("luis", 15);
let persona2 = new cl_personas("ana", 19);
let persona3 = new cl_personas("jose", 21);
let persona4 = new cl_personas("carmen", 17);
let persona5 = new cl_personas("rosa", 18);
let persona6 = new cl_personas("jose", 22);
let persona7 = new cl_personas("maria", 17);
let persona8 = new cl_personas("luz", 19);
let persona9 = new cl_personas("rafael", 23);
let persona10 = new cl_personas("liz", 15);
let persona11 = new cl_personas("marcos", 20);
let persona12 = new cl_personas("leo", 16);

let edadmayor = new Cl_edadM();

edadM.procesarPersonas(persona1);
edadM.procesarPersonas(persona2);
edadM.procesarPersonas(persona3);
edadM.procesarPersonas(persona4);
edadM.procesarPersonas(persona5);
edadM.procesarPersonas(persona6);
edadM.procesarPersonas(persona7);
edadM.procesarPersonas(persona8);
edadM.procesarPersonas(persona9);
edadM.procesarPersonas(persona10);
edadM.procesarPersonas(persona11);
edadM.procesarPersonas(persona12);

let salida = document.getElementById("salida");

salida.innerHTML=`
<br>Edad promedio: $(edadM.edadpromedio())
<br>Edad mayor entre las mujeres: $(edadM.edadmayorentreM())
`;

