const peticion = new XMLHttpRequest;

peticion.addEventListener("readystatechange",()=>{
    if (peticion.readyState== 4 && peticion.status == 200) {
        console.log(peticion.response);
    }
});


peticion.open("GET","json.txt");
peticion.send();