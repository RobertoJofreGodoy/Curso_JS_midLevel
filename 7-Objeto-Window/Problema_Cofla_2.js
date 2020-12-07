const url = window.location.href;
const dominio = window.location.hostname;
const ruta = window.location.pathname;
const protocolo = window.location.protocol;

document.write(`Estas en la página: ${dominio}<br> 
en la ruta: ${ruta}<br>
con un protocolo:  ${protocolo}<br><br>
En resumen, estas en: ${url}
`);