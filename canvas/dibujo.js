var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
// console.log(lienzo);
var lineas = 30;
var l = 0;
var yi, xf;
var amarillo = "yellow";
var azul = "blue";
var rojo = "red";

// while(l < lineas)
// {
//     yi = 10 * l;
//     xf = 10 * (l + 1);
//     dibujarLinea("colorcito",0, yi, xf, 300)
//     console.log("linea" + l);
//     l = l + 1;
// }

for(l = 0; l < lineas; l++)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea(amarillo,0, yi, xf, 300)
    console.log("linea" + l);
}

for(l = 0; l < lineas; l++)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea(azul,300, yi, xf, 0)
    console.log("linea" + l);
}

dibujarLinea(rojo, 1,1,1,299); //izquierda
dibujarLinea(rojo, 1,299,299,299); //abajo
dibujarLinea(rojo, 299,1,1,1); //arriba
dibujarLinea(rojo, 299,1,299,299); //derecha

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}