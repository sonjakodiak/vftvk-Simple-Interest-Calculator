/* I'm sorry. I did a lot of trying on this through jsfiddle, and I couldn't get it to work at all. I am really confused between:
variables, id's, function names, function results, and invoking functions. More study and practice needed!*/

var amount = document.getElementById("amount");
var rate = document.getElementById("rate");
var years = document.getElementById("years");

var result = Compute(amount, rate, years);
document.getElementById("result").innerHTML = result;

function Compute(amount, rate, years) {
  return result=amount* (1 + (rate / 100) years)**years
}
