var m = document.getElementById("draw_mouse");
var patatas = m.getContext("2d");

var x = (m.width)/2;
var y = (m.height)/2;

var c = 5;
var q = 5;

m.addEventListener("click", linea);
m.addEventListener("click", draw);
m.addEventListener("mouseup", moveTrip);

function linea()
  {
    patatas.beginPath();
    patatas.strokeStyle = "white";
    patatas.moveTo(x, y);
  }


function draw(lol)
    {
      patatas.lineTo(lol.layerX, lol.layerY);
      patatas.stroke();
      patatas.closePath();
      x = lol.layerX;
      y = lol.layerY;
    }


function  moveTrip()
 {

   setInterval(function triP(ror)
    {
      patatas.beginPath();
      patatas.fillStyle = "blue";
      patatas.moveTo(x, y);
      patatas.lineTo(x - q, y + q);
      patatas.lineTo(x + q, y +q);
      patatas.fill();
      patatas.closePath();
    }, 280);

    setInterval( function triG(gay)
     {
       patatas.beginPath();
       patatas.fillStyle = "red";
       patatas.moveTo(x, y);
       patatas.lineTo(x - c, y + c);
       patatas.lineTo(x + c, y + c);
       patatas.fill();
       patatas.closePath();
     }, 520);

 }
