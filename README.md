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

# Capitulo 8: Debuggin

Buscar Google Developer Tools


# Capitulo 9: Eventos
Cualquier cambio que ocurre en la página.
- **Event Handlers**: (Manejador de eventos). Un Event Handler tiene funciones y propiedades que nos permite reconocer que evento está ocurriendo, pero esto ya no se utiliza.
- **Event Listeners**: se escriben sin camelCase
- **Objeto Event**: 
- **Event flow**: El orden en el que se van a ejecutar los eventos, desde el evento más especifico (asociados a elementos Hijos) al menos especifico (elementos contenedores), este flujo de eventos se llama **Event Bubbling**, que es el flujo que viene por defecto.
```html
<body>
    <div class="contenedor-rojo">
        <div class="contenedor-azul">
            <button class="button">Botón</button>
        </div>
    </div>
</body>
```
```js
const button = document.querySelector(".button");
const contenedorAzul = document.querySelector(".contenedor-azul"); 
const contenedorRojo = document.querySelector(".contenedor-rojo"); 

button.addEventListener("click", (e) =>{
    alert("Di click en el Botón");
});

contenedorAzul.addEventListener("click", (e) =>{
    alert("Di click en el contenedor Azul");
});

contenedorRojo.addEventListener("click", (e) =>{
    alert("Di click en el contenedor Rojo");
});
```
Si hacemos *"click"* en el Botón, nos saltará el *Alert* del Botón, después el del contenedor Azul y después el del Rojo, debido a que el Event Flow va desde el elemento Hijo al Padre.

- **Event Bubbling** vs **Event Capturing**: Event Capturing nos permite modificar el flujo por defecto, permitiendo que un evento asociado a un elemento Padre se ejecute antes que otro asociado al hijo, esto se logra colocando el valor *"true"* al final del *"addEventListener"*
```js
button.addEventListener("click", (e) =>{
    alert("Di click en el Botón");
});

contenedorAzul.addEventListener("click", (e) =>{
    alert("Di click en el contenedor Azul");
});

contenedorRojo.addEventListener("click", (e) =>{
    alert("Di click en el contenedor Rojo");
}, true);
```
Ahora al hacer *"click"* en el Botón, nos saltará el *Alert* del contenedor Rojo, después el del Botón y al final el del contenedor Azul, esto debido a que el Botón y el contenedor Azul siguen con **Event Bubbling** pero el contenedor Rojo está con **Event Capturing**

- **eventStopPropagation()**: Esta función nos permite detener la ejecución de todos los Eventos asociados:

```js
button.addEventListener("click", (e) =>{
    alert("Di click en el Botón");
    e.stopPropagation();
});

contenedorAzul.addEventListener("click", (e) =>{
    alert("Di click en el contenedor Azul");
});

contenedorRojo.addEventListener("click", (e) =>{
    alert("Di click en el contenedor Rojo");
});
```
Ahora si hacemos *"click"* en el Botón, solo se ejecutará el *Alert* del Botón.

## Eventos del Mouse

- **click**: ocurre con un click
```js
button.addEventListener("click", (e) =>{
    alert("Di click en el Botón");
});
```
- **dblclick**: ocurre con un doble click 
```js
button.addEventListener("dblclick", (e) =>{
    alert("Di click en el Botón");
});
```
- **mouseover**: ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos.
```js
contenedorAzul.addEventListener("mouseover", (e) =>{
    alert("Di click en el contenedor Azul");
});
```
- **mouseout**: ocurre cuando el puntero se mueve fuera de un elemento o de sus elementos secundarios
```js
contenedorAzul.addEventListener("mouseout", (e) =>{
    alert("Di click en el contenedor Azul");
});
```
- **contextmenu**: ocurre con un click en el botón derecho en un elemento para abrir un menú contextual.
```js
contenedorAzul.addEventListener("contextmenu", (e) =>{
    alert("Di click en el contenedor Azul");
});
```
- **mouseenter**: ocurre cuando el puntero se mueve sobre un elemento (**SOLO PARA INTERNET EXPLORER**)
- **mouseleave**: ocurre cuando el puntero se mueve fuera de un elemento. (**SOLO PARA INTERNET EXPLORER**)
- **mousedown**: ocurre cuando un usuario aprieta un botón del mouse sobre un elemento sin necesidad de soltar el botón.
- **mouseup**: ocurre cuando un usuario suelta un botón del mouse sobre un elemento.
- **mousemove**: ocuure cuando el puntero se mueve mientras está sobre un elemento.

## Eventos del Teclado

```html
<body>
    <input type="text" class="input-test">
</body>
```
Estos eventos se ejecutan en el siguiente orden, estén o no en ese orden en el código
- **keydown**: ocurre cuando una tecla se presiona
- **keypress**: ocure cuando una tecla se presiona y suelta en un elemento
- **keyup**: ocurre cuando una tecla se deja de presionar

```js
const input = document.querySelector(".input-test"); 

input.addEventListener("keydown", (e)=>{
    console.log(`una tecla fue presionada`);
});

input.addEventListener("keypress", (e)=>{
    console.log(`un usuario presionó una tecla y la soltó`);
});

input.addEventListener("keyup", (e)=>{
    console.log(`una tecla fue soltada`);
});
```

## Eventos de la Interfaz

```html
<body>
    <img src="https://wallpaperaccess.com/full/1971964.jpg" alt="" class="img-test">
</body>
```
- **error**: ocurre cuando sucede un error durante la carga de un archivo multimedia.
```js
const img = document.querySelector(".img-test");

img.addEventListener("error",(e)=>{
    console.log("Ocurrió un error en la carga del archivo");
});
```
- **load**: ocurre cuando un objeto se ha cargado.
```js
addEventListener("load",(e)=>{ //con este codigo hacemos referencia al Objeto Window
    console.log("se cargó el sitio");
});
```
- **beforeunload**: ocurre antes de que el documento esté a punto de cargarse.
- **unload**: ocurre una vez que se ha descargado una página.
- **resize**: ocurre cuando se cambio el tamaño de la vista del documento.
```js
addEventListener("resize",(e)=>{
    console.log("se cambío el tamaño");
});
```
- **scroll**: ocurre cuando se desplaza la barra de desplazamiento de un elemento.
- **select**: ocurre despuésde que el usuario selecciona algún texto de < input> o < textarea>

más eventos en https://www.w3schools.com/jsref/obj_events.asp

## Temporizadores

- **setTimeout()**: Nos permite indicarle una funcion como primer parámetro, y como segundo parámetro le indicamos en cuanto tiempo lo queremos ejecutar (en mls)
```js
setTimeout(()=>{
    alert("hola")
},2000);
```
- **setInterval()**: Nos permit ejecutar una función CADA los mls que le indiquemos
```js
setInterval(()=>{
    alert("hola")
},2000);
```
- **clearTimeout()**: Nos permite anular un **setTimeout()**, para ello, tenemos que guardar el **setTimeout()** en una variable y pasarla como parámetro a **clearTimeout()**
```js
const temporizador = setTimeout(()=>{
    alert("hola")
},2000);

clearTimeout(temporizador); //este temportizador no se ejecutará
```

- **clearInterval()**: Nos permite anular un **setInterval()**, para ello, tenemos que guardar el **setInterval()** en una variable y pasarla como parámetro a **clearInterval()**
```js
const intervalo = setInterval(()=>{
    alert("hola")
},2000);

clearInterval(intervalo); //este intervalo no se ejecutará
```

## PROBLEMA DE COFLA CAPITULO 9:
### PROBLEMA Nº 1
Cofla reprobo 2 materias, y debe enviar un formulario para poder registrarse en las mesas de examen:
- El formulario debe contener Nombre, Mail y Materia Adeudada.
- Validar Mails y nombres.
- Enviar al servidor de manera pulida

### PROBLEMA Nº 2
Los datos de Cofla y del resto de los alumnos ya fueron almacenados correctamente, ahora debemos crear un sistema que les permita a los profesores visualizar esta informacion y definir cuando los alumnos van a rendir el examen.
- Interfaz agradable y atractiva
- Contener datos de manera estructurada
- Poder elegir ciando se rinde el examen
- En caso de que el profesor confirme la fecha, los datos se deben actualizar y reemplazar el espacio de selección de semana por la semana seleccionada.

# Capitulo 10: Control de Flujo y manejo de errores
- **sentencias de bloque**: nos permite tener bloques de codigo con sus propias variables
```js
let nombre = "Pedro";
{
    let nombre = "Juan"; 
    alert(nombre);
}
```
- **sentencias de control de flujo**: nos permite colocar condiciones para que se ejecute una sentencia de bloque:
```js
let nombre = "Pedro";
if (nombre!= "Pedro"){
    let nombre = "Juan"; 
    alert(nombre);
}
```
- **sentencias de manejo de excepciones**: nos permite controlar los errores del programa 

### sentecia Switch
sentencia que nos permite ejecutar un codigo dependiendo del valor de su parámetro, es muy parecido a If
```js
let fruta = "pera";

switch (fruta) {
    case "manzana":
        console.log("Es una manzana"); 
        break;
    case "banana":
        console.log("Es una banana"); 
        break; 
    case "pera":
        console.log("Es una pera"); 
        break; 

    default:
        console.log("No es una fruta"); 
        break;
}
```
## Excepciones y Tipos de Excepciones
Una excepcion es un error que salta durante la ejecución de nuestro programa.

Tenemos varios tipos de excepciones:
- **Excepciones ECMAScript**: Excepciones relacionadas a la especificación de JavaScript:
    - **EvalError**: Crea una instancia que representa un error que ocurre con respecto a la función global eval().
    - **InternalError**: Crea una instancia que representa un error que ocurre cuando se produce un error interno en el motor de JavaScript. Por ejemplo: "demasiada recursividad".
    - **RangeError**: Crea una instancia que representa un error que ocurre cuando una variable numérica o parámetro está fuera de su rango válido.
    - **ReferenceError**: Crea una instancia que representa un error que ocurre cuando se quita la referencia a una referencia no válida.
    - **SyntaxError**: Crea una instancia que representa un error de sintaxis.
    - **TypeError**: Crea una instancia que representa un error que ocurre cuando una variable o parámetro no es de un tipo válido.
    - **URIError**: Crea una instancia que representa un error que ocurre cuando encodeURI() o decodeURI() pasan parámetros no válidos.

- **DOMException y DOMError**: Excepciones relacionadas al DOM
    - Documentación de [DOMException](https://developer.mozilla.org/es/docs/Web/API/DOMException)
    - Documentación de [DOMError](https://developer.mozilla.org/es/docs/Web/API/DOMError)


## try... catch
Es una sentencia de manejo de excepciones
Try no puede ejecutarse sin el Catch
Try catch no detecta errores de Sintaxis, sino errores de comportamiento
NOTA: **Un Error es un Objeto**.

```js
try {
    zsdsadasdasda //variable no definida
}

catch(error){
    console.log(`ocurrió un error`); 
}
```
- **Catch Incondicional**: Cuando el bloque Catch no tiene ninguna condición.
- **Catch Condicional**: Cuando el bloque Catch contiene una condición.

- **finally**: sentencia de **try... catch** que se ejecuta pase lo que pase y tiene prioridad sobre las sentecias try y catch:
```js
try {
    console.log(`No hay error`);
}
catch(error){
    console.log(`ocurrió un error`); 
} finally{
    console.log(`Me ejecuto igual`);
}
```
- **throw**: sentencia que nos permite lanzar una excepcion, y como es un objeto, podemos manejarlo como tal.
```js
try {
    throw {
        error: `nombre del error`,
        info: `Información del error`
    };
}
catch(e){
    console.log(e); 
} finally{
    console.log(`Me ejecuto igual`);
}
```

Es importante saber cuando utilizar try catch, si sabemos que algo da un error, lo mejor es intentar solucionarlo.

## PROBLEMA DE COFLA CAPITULO 10:
### PROBLEMA Nº 1
Cofla ya dió sus examenes, pero se rompió el sistema de inscripción de notas
- Interfaz para introducir nota
- Validar que no haya errores
- Promediar Notas con Trabajos
- Si el Promedio es mayor a 7/10: Aprobar


# Capitulo 11: Código Obsoleto

## ¿Cuando algo se vuelve obsoleto?
- **deprecated**:
- **Inútil**: cuando alguna funcion o metodo se remueve del lenguaje, por lo que no hace nada
- **No recomendado**: puede no estar recomendado por varios motivos, bugs, rendimiento...
- **Está por ser reemplazado**: se volverá obsoleto en poco tiempos
- **Hay mejores formas de hacerlo**: como el "*createDocumentFragment()*" que hace más eficiente la inserción de elementos en el DOM, aunque no reemplaza al "*appendChild()*" si nos ofrece un camino más eficiente.

Tener código obsoleto puede afectar negativamente en varios aspectos... puede consumir muchos recursos, contener Bugs o fallos, ser un código excesivamente largo e incluso en el SEO 

### ¿Cómo verificar si mi código está obsoleto?
- 1 de cada 3 WEBS utiliza librerías de JavaScript obsoletas.
- Verificar si tienen o usan funciones, métodos objetos o metodologías obsoletas.
- Verificar en los sitios webs basados en estandares oficiales

Webs recomendadas:

https://developer.mozilla.org/es/
https://www.w3schools.com/


### Detectar Navegadores Obsoletos
- **Buscar en google**: Deteccion del navegador y cobertura a múltiples navegadores

https://developer.mozilla.org/es/docs/Detecci%C3%B3n_del_navegador_y_cobertura_a_m%C3%BAltiples_navegadores


# Capitulo 12: Callbacks, Promesas, Async/Await
## Callback
Un callback es una funcion dentro de otra función

```js
function prueba(callback) {
    callback("Pedro");
}

function decirNombre(nombre) {
    console.log(nombre);
}

prueba(decirNombre); 
//La función *prueba()* llama a la función *decirNombre()* y le pasa como parámetro el callback
```
También podemos ejecutar una funcion al momento de llamar a la función *prueba()*.
```js
function prueba(callback) {
    callback("Pedro");
}

prueba(function (nombre) {
    console.log(nombre);
});
```
También se puede ejecutar una Arrow function dentro de una function con callbak
```js
function prueba(callback) {
    callback("Pedro");
}

prueba(nombre => console.log(nombre));
```

## Promesas
Las **Promesas son un Objeto** que adentro tiene 2 callbacks:
- **resolve**: terminación de una operación asíncrona.
- **reject**: fracaso de una operación asíncrona.

En resumen, las promesas nos permiten trabajar una funcion, y en caso de que se ejecute correctamente nos devuele **resolve**, de lo contrario **reject**, pero nosotros indicamos cómo debe comportarse dicha funcion.

Los Objetos Promesas tienen encapsulados sus datos, por lo que no podemos acceder a ellos facilmente, para ello utilizamos las sentencias **then()** y **catch()**.

- **then()**: nos permite acceder al valor de **resolve**
- **catch()**: nos permite acceder al valor de **reject**

```js
let nombre = "Roberto";
//Dentro del objeto Promise vamos a ejecutar una funncion con 2 callbacks
const promesa = new Promise((resolve, reject)=>{
    if (nombre !== "Roberto") {
        reject (`Lo siento, el nombre es incorrecto`);
    } else{
        resolve(nombre)
    }
});

//Vemos el resultado de la promesa creada anteriormente
//Utilizamos *then()* para ver el callback *resolve* 
// y *catch()* para el callback *reject*
promesa.then((resultado)=>{
    console.log(resultado);
}).catch((e)=>{
    console.log(e);
});
```
## Async/Await
Al momento de cargar una página web, no todos los datos o recursos se cargarán al mismo tiempo, y es posible que una función utilice un elemento que todavia no se haya cargado en la página, por lo tanto esta funcion no se ejecutará correctamnete
El asincronismo resuleve este problema, permitiendo que una función se ejecute cuando los elementos, parametro o datos se encuentren disponibles.
Esto es extremadamente útil cuando nustra página depende de llamadas a un servidor, ya que algunos datos pueden tardarse y algunas funcionalidades deben esperar.

Veamos como funciona el asincronismo:
Simularemos la recepción de datos de un servidor con un *setTimeout()*:

```js
// Simulamos una llamada a un servidor con un tiempo Random en segundos
const obtenerInformacion = (text) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(text),Math.random()*1000)
    })
}

//Las promesas, al ser asincronas, permiten que la funcion se ejecute en el momento de obtener la información
obtenerInformacion("1-Roberto").then(resultado=> console.log(resultado));
```

#### Pero... ¿Qué ocurre cuando queremos más de un dato, y los necesitamos en orden?

```js
const obtenerInformacion = (text) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(text),Math.random()*1000)
    })
}

obtenerInformacion("1-Roberto").then(resultado=> console.log(resultado));
obtenerInformacion("2-karina").then(resultado=> console.log(resultado));
obtenerInformacion("3-Felipe").then(resultado=> console.log(resultado));
```
En este caso queremos ver los nombres en el orden indicado, pero el servidor nos los envia de manera desordenada, por lo que en la página los veremos en el orden en el que nos llegan, que muy probablemente no sea el orden que queremos.

para ello, JavaScript tiene **Async/Await**

- **async**: hace que una función devuelva una promesa
- **await**: hace que una función espere una promesa

```js
const obtenerInformacion = (text) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(text),Math.random()*1000)
    })
};

const mostrarData = async()=>{ //Le indicamos a la funcion que devuelva una promesa
    await obtenerInformacion("1-Roberto").then(resultado=> console.log(resultado));
    await obtenerInformacion("2-karina").then(resultado=> console.log(resultado));
    await obtenerInformacion("3-Felipe").then(resultado=> console.log(resultado));
    //Await espera que la promesa le llegue para ejecutar el siguiente código
}; 

//Por lo que siempre obtendremos la informaicón en el orden que deseamos.
mostrarData();
```

Al indicar a una funcion que sea **async/await** automaticamente espera una promesa, por lo que no necesitamos colocar **then()**, con **await** accedemos automaticamente al valor de la promesa.
```js
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
```
## PROBLEMA DE COFLA CAPITULO 12:
Cofla está en el último año y necesita recuperar todas sus notas para que le puedan decir si efectivamente pasó al último semestre. 
Pero hay un problema, estas notas están almacenadas en otro servidor.

- Crear un sistema que almacene toda la información de las materias y las muestre en pantalla de forma ordenada.

# Capitulo 13: Peticiones HTTP
cliente & servidor: cliente es la interfaz frontend y el servidor almacena y procesa la infromación.
Las Peticiones HTTP son peticiones de información del cliente hacia el servidor
Peticiones HTTP **No guardan información**

## Datos Estructurados (JSON)
JSON: JavaScript Object Notation
JSON es una sintazis para almacenar e intercambiar datos. JSON es texto escrito como Notación de Objetos JavaScript.
La Sintaxis de un JSON es como la de un Array Asociativo en JS (aunque no existan como tal)

```js
//Este sería un JSON con la información de John
let nuevoJSON = {
    name: "John",
    age: 31,
    city: "New York"
};

//También lo podemos escribir en una linea
let nuevoJSON = {name: "John", age: 31, city: "New York"};
```
Esta es la sintaxis que se utiliza para intercambiar información.
un JSON puede estar **Serializado** o **Deserealizado**.
- **Serializado**: Es la sintaxis que debe tener un JSON para poder ser enviado, tanto desde un *cliente* como de un *servidor*, para estar Serealizado, todo el contenido del *JSON* debe ser un **String**:
```js
let nuevoJSON = `{name: "John", age: 31, city: "New York"}`;
//Este JSON está Serializado
```
- **Deserealizado**: Cuando el contenido del JSON deja de ser un **String** para ser un **Objeto**, que es la manera en la que podemos trabajar con él
```js
let nuevoJSON = {name: "John", age: 31, city: "New York"};
//Este JSON está Deserealizado
```
### ¿Cómo Serealizamos y Deserealizamos un JSON?
JSON tiene 2 métodos que nos permiten serializar y deserealizar su contenido:
- **JSON.stringify()**: Nos permite serializar un JSON, se utiliza para enviar un JSON a un servidor.
- **JSON.parse()**: Nos permite deserializar un JSON, se utiliza al recibir un JSON de un servidor

```js
let nuevoJSON = {name: "John", age: 31, city: "New York"};
nuevoJSON = JSON.stringify(nuevoJSON);
//convertimos el *nuevoJSON* a un JSON serealizado

nuevoJSON = JSON.parse(nuevoJSON);
console.log(nuevoJSON);
//Deserealizamos nuevamente el JSON para trabajar con él
```

- **JSON polyFill**: son funciones que simulan la funcionalidad de cualquier elemento de JavaScript para navegadores anitguos que no soportan el lenguaje

## AJAX
Para trabajar con AJAX es necesario tener un servidor.
AJAX (**Asynchronous JavaScript And XML**) nos permite enviar consultas y recibir respuestas del servidor sin tener que recargar la página, lo hace de manera asíncrona.

- Objeto **XMLHttpRequest**: Es la piedra angular de AJAX, el Objeto **XMLHttpRequest** se puede utilizar para intercambiar datos entre la página web y el Servidor detrás de escena. Esto quiere decir que es posible actualizar partes de una página web sin recargar toda la página.

```js
const peticion = new XMLHttpRequest;
```
seguir en https://www.w3schools.com/js/js_ajax_http.asp 