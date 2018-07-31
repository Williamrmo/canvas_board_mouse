const cuadro = document.getElementById('canvas');
const papel = cuadro.getContext("2d");
var estado;
var x;
var y;

cuadro.addEventListener("mousedown", presionarMouse);
cuadro.addEventListener("mouseup", soltarMouse);
cuadro.addEventListener("mousemove", dibujarMouse);

dibujarLinea("red", 250, 249, 251, 251, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 5;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function presionarMouse(event) {
  estado = 1;
  x = event.layerX;
  y = event.layerY;
}

function soltarMouse(event) {
  estado = 0;
  x = event.layerX;
  y = event.layerY;
}

function dibujarMouse(event) {
  const colorI = "#000";
  if (estado == 1) {
    dibujarLinea(colorI, x, y, event.layerX, event.layerY, papel);
  }
  x = event.layerX;
  y = event.layerY;
}
