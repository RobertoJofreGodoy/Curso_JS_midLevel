const obtenerInformacion = (text) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(text),Math.random()*200)
    })
};

const mostrarData = async()=>{
    data1 = await obtenerInformacion("1-Roberto")
    data2 = await obtenerInformacion("2-karina")
    data3 = await obtenerInformacion("3-Felipe")
    console.log(data1);
    console.log(data2);
    console.log(data3);
};
mostrarData();

/* 
```js

```

 */