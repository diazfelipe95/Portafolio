var f = document.getElementById("canvas");
var lienzo = f.getContext("2d");

var mapa = "tile.png";
var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", cargarFondo);

var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", cargarCerdo);

var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load", cargarPollo);

var vaca =
     {
       url = "vaca.png",
       cargaOk = false
     };

var vaca = new Image();
vaca.src = "vaca.png";
vaca.addEventListener("load", cargarVaca);


function cargarFondo()
  {
    lienzo.drawImage(fondo, 0, 0);
  }

function cargarCerdo()
  {
    lienzo.drawImage(cerdo, 10, 300);
  }

function cargarPollo()
  {
    lienzo.drawImage(pollo, 300, 150);
  }

function cargarVaca()
  {
    lienzo.drawImage(vaca, 10, 10);
  }



function aleatorio(min, max)
 {
   var resultado;
   resultado = Math.floor(Math.random() * (max - min + 1)) + min;
   return resultado;
 }
