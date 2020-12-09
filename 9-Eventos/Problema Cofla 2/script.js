let alumnos = [{
    nombre: "Roberto Jofre",
    email: "roberto.jofre@gmail.com",
    materia: "Fisica 3"
},{
    nombre: "Karina Gajardo",
    email: "karina@gmail.com",
    materia: "fisica 1"
},{
    nombre: "Lucas Dalto",
    email: "soydalto@gmail.com",
    materia: "pogramacion"
},{
    nombre: "Cofla Perez",
    email: "cofla@gmail.com",
    materia: "matematicas"
},{
    nombre: "Felipe Ramirez",
    email: "frami@gmail.com",
    materia: "calculo"
}];

const boton = document.querySelector(".btn-confirmar");
const contenedor = document.querySelector(".grid-container");
let htmlCode = ""

for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    htmlCode += `
        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="semana 1">semana 1</option>
                <option value="semana 2">semana 2</option>
            </select>
        </div>
    `
}   
contenedor.innerHTML = htmlCode;

boton.addEventListener("click",()=>{
    let confirmar = confirm("¿Quieres confirmar las mesas?");
    if (confirmar){
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana"); //Seleccionamos Los Divs que contienen la Selección de las Semanas
        let semanasElegidas = document.querySelectorAll(".semana-elegida"); //Seleccionamos todos los selectores de semanas
        for (elemento in elementos){ //Recorremos todos los Divs
            let semana =  elementos[elemento]; //Seleccionamos el Div en el que nos encontramos
            semana.innerHTML = semanasElegidas[elemento].value; //Sobreescribimos el selector por su mismo valor
        }
    }

});