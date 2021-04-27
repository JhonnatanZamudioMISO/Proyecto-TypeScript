import { Aprendiz, NivelEducativo } from './aprendiz.js';
export var ap = new Aprendiz("Juan Pablo", "Reyes Gómez", "avatar.png", 30, NivelEducativo.POSGRADO);
var aprendizTable = document.getElementById("aprendiz");
mostarDatosAprendiz(ap);
function mostarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./" + aprendiz.avatar + "\" height=\"100\"></td></tr>\n    <tr><td>Nombres:</td><td>" + aprendiz.nombres + "</td></tr>\n    <tr><td>Apellidos:</td><td>" + aprendiz.apellidos + "</td></tr>\n    <tr><td>Nivel educativo:</td><td>" + aprendiz.nivelEducativo + "</td></tr>\n    <tr><td>Edad:</td><td>" + aprendiz.edad + "</td></tr>";
    aprendizTable.appendChild(tbodyAprendiz);
}
