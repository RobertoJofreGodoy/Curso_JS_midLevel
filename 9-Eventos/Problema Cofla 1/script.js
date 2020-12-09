const nombre = document.querySelector(".container__form--input-name");
const email = document.querySelector(".container__form--input-email");
const materia = document.querySelector(".container__form--input-materia");
const boton = document.querySelector(".container__form--buttom");
const resultado = document.querySelector(".container__form--resultado");

const validarCampos = ()=>{
    let error = []; //creamos un Array donde el primer valor indicará si existe o no un error, y el segundo valor indicará el mensaje del error
    if (nombre.value.length <5){
        error[0] = true; 
        error[1] = `El nombre no puede contener menos de 5 caracteres`;
        return error;
    } else if (nombre.value.length >40) {
        error[0] = true;
        error[1] = `El nombre no puede contener más de 40 caracteres`;
        return error;
    } else if (email.value.length < 5 
        || email.value.length > 40 
        || email.value.indexOf("@")==-1 
        || email.value.indexOf(".")==-1) {
        error[0] = true; 
        error[1] = `Mail es inválido`;
        return error;
    } else if (materia.value.length >40 || materia.value.length<5) {
        error[0] = true; 
        error[1] = `La materia no existe`;
        return error;
    }

    error[0]=false;
    return error;
}

boton.addEventListener("click",(e)=>{
    e.preventDefault(); //Eliminamos la acción por defecto del elemento, en este caso enviaba los datos al hacer click
    let error = validarCampos(); 
    if (error[0]) { //si error es true
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
        resultado.classList.toggle("green",false);
    } else {
        resultado.innerHTML = `Solicitud enviada correctamente`;
        resultado.classList.add("green");
        resultado.classList.toggle("red",false);
    }
});
