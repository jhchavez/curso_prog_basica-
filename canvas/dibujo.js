var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
// console.log(lienzo);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var amarillo = "yellow";
    var azul = "blue";
    var rojo = "red";
    var espacio = ancho / lineas;

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
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(rojo, 200, yi, xf, 200)
    console.log("linea" + l);
}

for(l = 0; l < lineas; l++)
{
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(amarillo, 0, yi, xf, 399)
    dibujarLinea(azul, 399, yi, xf, 0)
    console.log("linea" + l);
}

    dibujarLinea(rojo, 1,1,1,399); //izquierda
    dibujarLinea(rojo, 1,399,399,399); //abajo
    dibujarLinea(rojo, 399,1,1,1); //arriba
    dibujarLinea(rojo, 399,1,399,399); //derecha
}