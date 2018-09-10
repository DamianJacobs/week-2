//DAMIAN JACOBS


var kleinamount = parseInt(prompt("Hoeveel kleine pizza's heeft u besteld?"));
var middelamount = parseInt(prompt("Hoeveel middel pizza's heeft u besteld?"));
var grootamount = parseInt(prompt("Hoeveel gote pizza's heeft u besteld?"));

const prijsklein = 3.50;
const prijsmiddel = 5.50;
const prijsgroot = 7.00;

var totalklein = prijsklein * kleinamount;
var totalmiddel = prijsmiddel * middelamount;
var totalgroot = prijsgroot * grootamount;
var totalpizzas = totalklein + totalmiddel + totalgroot;

document.writeln('<br /><br />Kleine pizzas:' + kleinamount);
document.writeln('<br />Prijs per kleine pizza:' + prijsklein);
document.writeln('<br />Totaalprijs kleine pizzas:' + totalklein.toFixed(2));

document.writeln('<br /><br />middel pizzas:' + middelamount);
document.writeln('<br />Prijs per middel pizza:' + prijsmiddel);
document.writeln('<br />Totaalprijs middel pizzas:' + totalmiddel.toFixed(2));

document.writeln('<br /><br />grote pizzas:' + grootamount);
document.writeln('<br />Prijs per grote pizza:' + prijsgroot);
document.writeln('<br />Totaalprijs grote pizzas:' + totalgroot.toFixed(2));

document.writeln('<br /><br />Totaalprijs pizzas: €' + totalpizzas.toFixed(2));
                              

