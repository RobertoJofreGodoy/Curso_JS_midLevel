const getName = async ()=>{
    let peticion = await axios("json.txt");
    let resultado = peticion.data;
    let HTMLCode = `Nombre: ${resultado.nombre} <br>
                    Edad: ${resultado.edad}`;
    document.querySelector(".respuesta").innerHTML = HTMLCode;
}

document.getElementById('boton').addEventListener("click",getName);

/*
```js

```

*/