# Documentación del Curso de JAVASCRIPT desde CERO (Completo) - Nivel MID LEVEL de Soy Dalto

- [Video Youtube](https://www.youtube.com/watch?v=xOinGb2MZSk&t=2s&ab_channel=SoyDalto)


# Capitulo 7: Objeto Window
Es el **Objeto más importante en la Jerarquía** y todos dependen de él, y contiene todo para manipular la ventana del navegador.
- Hereda las propiedadesd de **EventTarget**. (que veremos más adelante).
- **Open()**: Carga un recurso den el contecto de un nuevo navegador o uno que ya existe.
```js
let googleURL = "https://www.google.com";
let ventana = window.open(googleURL);
```
- **close()**: Cierra la ventana actual, o la ventana que se llamó:
```js
ventana.close(); //cierra la ventana de Google que abrimos
```
- **closed**: Indica si la ventana referenciada está cerrada o no (true o false)
```js
ventana.closed; //¿está cerrada? true o false
```
- **stop()**: Detiene la carga de recursos en el contexto de navegación actual.
```js
window.stop(); 
```
- **alert()**: Muestra un cuadro de alerta con el contenido especificado y un botón Aceptar.
- **print()**:  Abre un cuadro de diálogo Imprimir para imprimir el documento actual.
```js
window.print();
```
- **prompt()**: Abre un cuadro de diálogo con un mensaje que solicita al usuario un dato (string)
- **confirm()**: Abre un cuadro de diálogo con un mensaje y dos botones: Aceptar y Cancelar. (true o false)

### screen

- **screen**: Devuelve una referencia al objeto de pantalla asociado con la ventana.
```js
const pantalla = window.screen;
console.log(pantalla); //Podemos ver las propiedades que la pantalla
document.write(pantalla.availWidth); //Imprimimos el valor de availWidth 
```
- **screenLeft**: Devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de la pantalla.
- **screenTop**: Devuelve la distancia Vertical entre el borde superior del navegador y el borde superior de la pantalla.

Estas Propiedades son solo de lectura, no se pueden modificar

```js
const pantallaLeft = window.screenLeft;
const pantallaTop = window.screenTop;

console.log(pantallaLeft); 
console.log(pantallaTop); 

pantallaLeft = 500; //ERROR
```

- **scrollX**: Devuelve el nº de Pixeles que el documento se desplaza actualmente horizontalmente.
- **scrollY**: Devuelve el nº de Pixeles que el documento se desplaza actualmente verticalmente.
```js
const scrollX = window.scrollX;
const scrollY = window.scrollY;

alert(`X: ${scrollX} Y: ${scrollY}`);
```
- **scroll()**: Desplaza la ventana a un lugar particular en el documento (con options y posiciones).
```js
window.scroll(0,500);
```

### funciones
- **resizeBy()**:  Cambia el tamaño de la ventana actual en una cantidad específica.
- **resizeTo()**: redimensiona dinámicamente la ventana.
- **moveBy()**: Mueve la ventana en una ubicación relativa.
- **MoveTo()**: Mueve la ventana en una ubicación absoluta

### Objetos barptop:
Nos permite saber si un objeto es visible o no, devuelve *True* o *False*
- **locationbar**
- **menubar**
- **personalbar**
- **scrollbar**
- **statusbar**
- **toolbar**

## Location
- **window.location.href**: devuelve el href de la página actual.
- **window.location.hostname**: devuelve el nombre del dominio del servidor web.
- **window.location.pathname**: devuelve la ruta y el nombre de archivo de la página actual.
- **window.location.protocol**: devuelve el protocolo web utilizado (hhtp o https).
- **window.location.assign()**: carga un nuevo documento.

## PROBLEMA DE COFLA CAPITULO 7:
### PROBLEMA Nº 1
Después de aprobar, Cofla se compra una mejor computadora para poder programar mejor y hacer todo der una forma más óptima, pero necesita una resolución mínima para poder trabajar.
- El cumputador debe ser al menos FullHD
- Cuando la esté por comprar, preguntarle si está seguro de eso. 

### PROBLEMA Nº 2
Cofla llega a su casa y abre una pagina y apreta F11, ahora no puede ver ni la barra de marcadores, ni el protocolo, ni la URL, ni ninguna infroamción que nos puede otorgar la interfaz que contiene el navegador.
- Crear un sistema que muestre los suficientes datos como para conocer el sitio web.

# Capitulo 8:
# Capitulo 9:
# Capitulo 10:
# Capitulo 11:
# Capitulo 12:
# Capitulo 13:
