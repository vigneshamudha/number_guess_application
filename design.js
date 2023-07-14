var a=Math.floor(Math.random()*100)+1;
var count=0;
function guessNumber()
{
   var val=parseInt(document.getElementById("guessfield").value);
   if(val==a)
   {
        document.getElementById("result").textContent = "Congratulations..! , You got th enumber in " +(count+1)+" tries.";
        // console.log("Congratulations..!");
   }
   else if(val<a)
   {
        document.getElementById("result").textContent = "Try with a greater number";
        count++;
        // console.log("Try with a greater number");
   }
   else
   {
        document.getElementById("result").textContent = "Try with a smaller number";
        count++;
        // console.log("Try with a smaller number");
   }
}