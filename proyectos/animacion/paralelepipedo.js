var j = document.getElementById("rec");
var gogo = j.getContext("2d");

var c = 5;
var num_cuad = j.width/(2 * 5);
var l = 1;


function paralelepipedo(color, c)
 {
   gogo.beginPath();
   gogo.fillStyle = color;
   gogo.moveTo((j.width/2) - c, (j.width/2) - c);
   gogo.lineTo(((j.width/2) - c) + 2 * c, (j.width/2) - c);
   gogo.lineTo(((j.width/2) - c) + 2 * c, ((j.width/2) - c) + 2 * c);
   gogo.lineTo((j.width/2) - c, ((j.width/2) - c) + 2 * c);
   gogo.fill();
   gogo.closePath();
 }


function paraMoveRed()
 {
   paralelepipedo("red", c);
   if(l < num_cuad)
    {
      c = c + 4;
    }
   else if(num_cuad <= l && l <= 2 * num_cuad)
    {
      c = c - 4;
    }
    else if(l = (2 * num_cuad) + 1)
     {
       l = 0;
     }
     l++;
  }

console.log(c);

function paraMoveGreen()
{
  paralelepipedo("green",c);
  if(l < num_cuad)
   {
     c = c + 4;
   }
  else if(num_cuad <= l && l <= 2 * num_cuad)
   {
     c = c - 4;
   }
   l++;
}



console.log(c);

 var cont1 = setInterval(paraMoveRed, 25);
 var cont2 = setInterval(paraMoveGreen, 50);
