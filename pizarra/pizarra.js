var area = document.getElementById("area_de_dibujo");
var hoja = area.getContext("2d");
var ancho = area.width;
var alto = area.height;

var color1 = document.getElementById("todos_colores");
var grosor = document.getElementById("grosor_linea");
var borrartodo = document.getElementById("boton_borrar");

area.addEventListener("mousedown", dibujarMouse);
area.addEventListener("mousemove", dibujarMouse);
borrartodo.addEventListener("click", borrarPorClick);

function dibujarLinea(color, grosor_linea, xinicial, yinicial, xfinal, yfinal, hoja)
{
    hoja.beginPath();
    hoja.strokeStyle = color;
    hoja.lineWidth = grosor_linea;
    hoja.moveTo(xinicial, yinicial);
    hoja.lineTo(xfinal, yfinal);
    hoja.stroke();
    hoja.closePath();
}

function borrarPorClick()
{
    hoja.clearRect(0,0,ancho,alto);
}

function grosorlinea()
{
    if (grosor.value == 1)
    {
        grosor_linea="2";
    }

    else if (grosor.value == 2)
    {
        grosor_linea="4";
    } 

    else if (grosor.value == 3)
    {
        grosor_linea="6";
    } 

    else if (grosor.value == 4)
    {
        grosor_linea="8";
    } 

    else if (grosor.value == 5)
    {
        grosor_linea="10";
    } 

    else
    {
        grosor_linea="2";
    } 
}

function colores()
{
    if (color1.value == 1)
    {
        color="yellow";
    }

    else if (color1.value == 2)
    {
        color="blue";
    }

    else if (color1.value == 3)
    {
        color="red";
    }

    else if (color1.value == 4)
    {
        color="green";
    }

    else if (color1.value == 5)
    {
        color="aquamarine";
    }

    else if (color1.value == 6)
    {
        color="violet";
    }

    else if (color1.value == 7)
    {
        color="orange";
    }

    else if (color1.value == 8)
    {
        color="fuchsia";
    }

    else if (color1.value == 9)
    {
        color="brown";
    }

    else
    {
        color="black";
    }
}

function dibujarMouse(mouse)
{
    colores(color1);
    grosorlinea(grosor);
        var colorcito = color;
        var grosorLi = grosor_linea;
            if (mouse.which==1)
            {
                var xi = mouse.layerX;
                var yi = mouse.layerY;
                var xf, yf;
                var movimientox = mouse.movementX;
                var movimientoy = mouse.movementY;

                xf = xi - movimientox;
                yf = yi - movimientoy;
                dibujarLinea(colorcito, grosorLi, xi, yi, xf, yf, hoja);
                console.log(mouse);
            }
}
