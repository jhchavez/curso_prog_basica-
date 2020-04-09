document.addEventListener ("keyup", moverCerdo);
var vp = document.getElementById ("villaplatzi");
var papel = vp.getContext ("2d");

var teclas = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40};

var cantidadVacas = aleatorio (1, 5);
console.log("cantidad de vacas = " + cantidadVacas);
var cantidadCerdos = 1;
var xci = 210;
var yci = 210;
var xv1 = aleatorio (0, 5) * 80;
var yv1 = aleatorio (0, 5) * 80;
var xv2 = aleatorio (0, 5) * 80;
var yv2 = aleatorio (0, 5) * 80;
var xv3 = aleatorio (0, 5) * 80;
var yv3 = aleatorio (0, 5) * 80;
var xv4 = aleatorio (0, 5) * 80;
var yv4 = aleatorio (0, 5) * 80;
var xv5 = aleatorio (0, 5) * 80;
var yv5 = aleatorio (0, 5) * 80;

var fondo = {
url: "./tile.png",
cargaOK: false
};

var vaca = {
url: "./vaca.png",
cargaOK: false,
};

var cerdo = {
url: "./cerdo.png",
cargaOK: false
};

fondo.imagen = new Image ();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener ("load", cargarFondo);

vaca.imagen = new Image ();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener ("load", cargarVaca);

cerdo.imagen = new Image ();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener ("load", cargarCerdo);

function cargarFondo()
{
fondo.cargaOK = true;
dibujar(xci, yci);
}

function cargarVaca()
{
vaca.cargaOK = true;
dibujar(xci, yci);
}

function cargarCerdo()
{
cerdo.cargaOK = true;
dibujar(xci, yci);
}

function dibujar (xc, yc)
{
if (fondo.cargaOK)
{
papel.drawImage(fondo.imagen, 0, 0);
}
if (vaca.cargaOK)
{
if (cantidadVacas > 0)
{
papel.drawImage(vaca.imagen, xv1, yv1);
}
if (cantidadVacas > 1)
{
papel.drawImage(vaca.imagen, xv2, yv2);
}
if (cantidadVacas > 2)
{
papel.drawImage(vaca.imagen, xv3, yv3);
}
if (cantidadVacas > 3)
{
papel.drawImage(vaca.imagen, xv4, yv4);
}
if (cantidadVacas > 4)
{
papel.drawImage(vaca.imagen, xv5, yv5);
}
}
if (cerdo.cargaOK)
{
papel.drawImage(cerdo.imagen, xc, yc);
}
}

function moverCerdo(evento)
{
var movimiento = 20;
switch (evento.keyCode) {
case teclas.LEFT:
dibujar (xci - movimiento, yci);
xci = xci - movimiento;
break;
case teclas.RIGHT:
dibujar (xci + movimiento, yci);
xci = xci + movimiento;
break;
case teclas.UP:
dibujar (xci, yci - movimiento);
yci = yci - movimiento;
break;
case teclas.DOWN:
dibujar (xci, yci + movimiento);
yci = yci + movimiento;
break;
}
}

function aleatorio (min, max)
{
var resultado;
resultado = Math.floor ( Math.random() * ( max - min + 1 ) ) + min;
return resultado;
}

