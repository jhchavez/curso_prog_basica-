class Billete
{
    constructor(n, v, c)
    {
        this.imagen = new Image();
        this.valor = v;
        this.cantidad = c;
        this.nombre = n;

        this.imagen.src = imagenes[this.nombre];
    }
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            entregado.push( new Billete(bi.nombre, bi.valor, papeles) );
            dinero -= (bi.valor * papeles);
        }
    }
    if(dinero > 0)
    {
        resultado.innerHTML = "Soy un cajero pobre y no tengo dinero :(";
    }
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                imagen = new Image();
                imagen.src = imagenes[e.nombre];
                document.body.appendChild(imagen);
                resultado.innerHTML += e.cantidad + "billetes de $" + e.valor + "<br />";
            }
        }
    }

}

var imagenes = [];
imagenes["cien"] = "./100.png";
imagenes["cincuenta"] = "./50.png";
imagenes["veinte"] = "./20.png";
imagenes["diez"] = "./10.png";
imagenes["cinco"] = "./5.png";

var entregado = [];
var caja = [];
caja.push( new Billete("cien", 100, 50) );
caja.push( new Billete("cincuenta", 50, 50) );
caja.push( new Billete("veinte", 20, 50) );
caja.push( new Billete("diez", 10, 50) );
caja.push( new Billete("cinco", 5, 50) );
var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);