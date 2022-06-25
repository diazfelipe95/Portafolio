var f = document.getElementById("canvas");
var lienzo = f.getContext("2d");
var p = (f.width)/2;
var q = (f.height)/2;
var r = (f.width)/3;
var s = (f.height)/3;


var fondo =
    {
      urllol : "tile.png",
      cargaOk : false
    };

var cerdo =
    {
      urllol : "cerdo.png",
      cargaOk : false
    };

var pollo =
    {
      urllol : "pollo.png",
      cargaOk : false
    };

var vaca =
    {
      urllol : "vaca.png",
      cargaOk : false
    };

var lobo =
    {
      urllol : "lobo.png",
      cargaOk : false
    };

var lobo2 =
    {
      urllol : "lobo2.png",
      cargaOk : false
    };

fondo.meCago = new Image();
fondo.meCago.src = fondo.urllol;
fondo.meCago.addEventListener("load", cargarFondo);

cerdo.meCago = new Image();
cerdo.meCago.src = cerdo.urllol;
cerdo.meCago.addEventListener("load", cargarCerdo);

pollo.meCago = new Image();
pollo.meCago.src = pollo.urllol;
pollo.meCago.addEventListener("load", cargarPollo);

vaca.meCago = new Image();
vaca.meCago.src = vaca.urllol;
vaca.meCago.addEventListener("load", cargarVaca);

lobo.meCago = new Image();
lobo.meCago.src = lobo.urllol;
lobo.meCago.addEventListener("load", cargarLobo);

lobo2.meCago = new Image();
lobo2.meCago.src = lobo2.urllol;
lobo2.meCago.addEventListener("load", cargarLobo2);

function cargarFondo()
  {
    fondo.cargaOk = true;
    dibujar();
  }

function cargarCerdo()
  {
    cerdo.cargaOk = true;
    dibujar();
  }

function cargarPollo()
  {
    pollo.cargaOk = true;
    dibujar();
  }

function cargarVaca()
  {
    vaca.cargaOk = true;
    dibujar();
  }

function cargarLobo()
  {
    lobo.cargaOk = true;
    dibujar();
  }

function cargarLobo2()
  {
    lobo2.cargaOk = true;
    dibujar();
  }


document.addEventListener("keyup", moveLobo);

function moveLobo(bb)
  {
    var movimiento = 10;
    var tecla =
     {
       DOWN : 40,
       UP : 38,
       LEFT : 37,
       RIGHT : 39
     };

    switch (bb.keyCode)
      {
        case tecla.DOWN:
         q = q + movimiento;
         dibujar();
        break;
        case tecla.UP:
        q = q - movimiento;
        dibujar();
        break;
        case tecla.LEFT:
         p = p - movimiento;
         dibujar();
        break;
        case tecla.RIGHT:
         p = p + movimiento;
         dibujar();
        break;
        default:
         //console.log("Oprimir los cursores");
      }
    //console.log("tecla");
    //console.log(bb);
  }

  document.addEventListener("keyup", moveLobo2);

function moveLobo2(cc)
  {
    var movimiento = 10;
    var tecla =
     {
       DOWN_S : 83,
       UP_W : 87,
       LEFT_A : 65,
       RIGHT_D : 68
     };

    switch (cc.keyCode)
      {
        case tecla.DOWN_S:
         s = s + movimiento;
         dibujar();
        break;
        case tecla.UP_W:
        s = s - movimiento;
        dibujar();
        break;
        case tecla.LEFT_A:
         r = r - movimiento;
         dibujar();
        break;
        case tecla.RIGHT_D:
         r = r + movimiento;
         dibujar();
        break;
        default:
         //console.log("Oprimir los cursores");
      }
    //console.log("tecla");
    //console.log(cc);
  }


function dibujar()
  {
    if (fondo.cargaOk == true)
      {
        lienzo.drawImage(fondo.meCago, 0, 0);
      }
    if (cerdo.cargaOk == true)
      {
        var v = aleatorio(0,10);
        for (m = v; v < 10; v++)
         {
          var x = aleatorio(0, 420);
          var y = aleatorio(0, 420);
          lienzo.drawImage(cerdo.meCago, x, y);
         }
      }
    if (pollo.cargaOk == true)
      {
        var v = aleatorio(0,10);
        for (m = v; v < 10; v++)
         {
          var x = aleatorio(0, 420);
          var y = aleatorio(0, 420);
          lienzo.drawImage(pollo.meCago, x, y);
         }
      }
    if (vaca.cargaOk == true)
      {
        var v = aleatorio(0,10);
        for (m = v; v < 10; v++)
         {
          var x = aleatorio(0, 420);
          var y = aleatorio(0, 420);
          lienzo.drawImage(vaca.meCago, x, y);
         }
      }
    if (lobo.cargaOk == true)
      {
        lienzo.drawImage(lobo.meCago, p, q);
      }
    if (lobo2.cargaOk == true)
      {
        lienzo.drawImage(lobo2.meCago, r, s);
      }
  }



function aleatorio(min, max)
 {
   var resultado;
   resultado = Math.floor(Math.random() * (max - min + 1)) + min;
   return resultado;
 }
