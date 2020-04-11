var cafecito = require("express"); //ejecutar archivos en node.js
var aplicacion = cafecito();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado)
{
    resultado.send("Este es el home <strong>home genial</strong>");
}

function cursos(peticion, resultado)
{
    resultado.send("Estos son los cursos <strong>cursos</strong>");
}

aplicacion.listen(8989);