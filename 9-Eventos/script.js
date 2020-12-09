const img = document.querySelector(".img-test");

img.addEventListener("error",(e)=>{
    console.log("Ocurrió un error en la carga del archivo");
});

addEventListener("load",(e)=>{
    console.log("se cargó el sitio");
});

addEventListener("resize",(e)=>{
    console.log("se cambío el tamaño");
});

addEventListener("scroll",(e)=>{
    console.log("se ha escrolleado");
});

setInterval(()=>{
    alert("hola")
},2000);

/*

```js

```

 */