const materiasHTML = document.querySelector(".materias");

const materias =[
    {
        nombre: "Física 1",
        nota: 7
    },
    {
        nombre: "Matemáticas",
        nota: 8
    },
    {
        nombre: "Programación",
        nota: 7
    },
    {
        nombre: "Cálculo 1",
        nota: 9
    },
    {
        nombre: "Inglés 1",
        nota: 7
    },
    {
        nombre: "Cálculo 2",
        nota: 6
    },
    {
        nombre: "Bases de Datos",
        nota: 8
    },
];

const obtenerMateria = (id)=>{
    return new Promise((resolve, reject)=>{
        let materia = materias[id];
        if (materia == undefined) reject(`La Materia no existe`);
        else setTimeout(()=>resolve(materia),Math.random()*1000);
    });
}

let materia =[];

const mostrarData = async ()=>{
    for (i = 0; i < materias.length; i++){
        materia.push(await obtenerMateria(i));
        let newCodeHTML =`
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>
        `;
        materiasHTML.innerHTML += newCodeHTML;
    }
};

mostrarData();