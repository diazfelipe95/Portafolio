//que chimba de cosas que estoy haciendo con mi vida :v

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("button_lineas");

var p = document.getElementById("lineas_curvas");
var lienzo = p.getContext("2d");

boton.addEventListener("click",dibujoPorClick);  // a el objeto boton se le añade el EVENTO  addEventListener

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
 {
   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.moveTo(x_inicial,y_inicial);
   lienzo.lineTo(x_final,y_final);
   lienzo.stroke();
   lienzo.closePath();
 }

function dibujoPorClick()
 {
  var xxx = parseInt(texto.value);
  var lineas = xxx;
  var l = 0;
  var xi = p.width;
  var yi = p.width;
  var xf = p.width;
  var yf = 0;

 for(l = 0; l < lineas; l++)
   {
     dibujarLinea("green",p.width,yi,xf,0);
    yi = yi - (p.width/xxx);
    xf = xf - (p.width/xxx);

    dibujarLinea("violet",xi,0,0,yf);
   xi = xi -(p.width/xxx);
   yf = yf + (p.width/xxx);
   }

   var lineas = xxx;
   var l = 0;
   var xi = 0;
   var yi = 0;
   var xf = 0;
   var yf = p.width;

   for(l = 0; l < lineas; l++)
    {
      dibujarLinea("blue",0,yi,xf,p.width);
     yi = yi + (p.width/xxx);
     xf = xf + (p.width/xxx);

     dibujarLinea("red",xi,p.width,p.width,yf);
    xi = xi + (p.width/xxx);
    yf = yf - (p.width/xxx);
    }
 }

   //while(l < lineas)
    //{
     //dibujarLinea("blue",0,yi,xf,300);
     //l = l + 1;  // también se puede escribir l++
     //yi = yi + 10;
    // xf = xf + 10;

     //console.log("lineas" + l);  //si quiere ver en consola qué es lo que está pasando.
//    }
