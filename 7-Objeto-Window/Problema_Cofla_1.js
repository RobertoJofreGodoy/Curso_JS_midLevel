const altura = window.screen.availHeight;
const ancho = window.screen.availWidth;

comprar = confirm(`La resolución es de: ${altura}x${ancho}`);

if (comprar) {
    alert(`Compra exitosa`);
} else {
    alert(`Compra cancelada`);
}