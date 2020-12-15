const getInfo = async () =>{
    let aprobados = document.querySelector(".num-aprobados");
    let desaprobados = document.querySelector(".num-desaprobados")
    try {
        peticion = await axios("informacion.txt");
        resultado = peticion.data
        aprobados.innerHTML = resultado.aprobados;
        desaprobados.innerHTML = resultado.desaprobados;
    } catch (error) {
        aprobados.textContent = `La API falló`;
        desaprobados.textContent = `La API falló`;
    }
}

document.getElementById('getInfo').addEventListener("click",getInfo);