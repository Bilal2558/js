document.write("...........", "As 06.01");
document.write("<br>");

// 1
var one=10;
document.write("...........",one);
document.write("<br>...........");

// 2
var two=++one;
document.write(two);
document.write("<br>...........");

// 3
var three=++two;
document.write(three);
document.write("<br>...........");

// 4
var five= --three;
document.write(five);
document.write("<br>...........");

// 5
var six=--five;
document.write(six);

document.write("<br>");document.write("<br>");document.write("<br>");

document.write("...........", "As 06.02");
document.write("<br>");

// 2
var a = 2;
var b = 1;
document.write("...........", a);
document.write("<br>");

document.write("...........", b);

document.write("<br>");document.write("<br>");

//                 1   +     2       =3        
var result = --a - --b + ++b + b--;
document.write("...........", result);
document.write("<br>");

//                              0
document.write("...........", --a);
document.write("<br>");

//                            0   - 0  =0
document.write("...........", --a - --b);
document.write("<br>");

//                             0     0     1   =1
document.write("...........",--a - --b + ++b);
document.write("<br>");
//                             0    0     2      1  = 3
document.write("...........",--a - --b + ++b + b--);

document.write("<br>");document.write("<br>");document.write("<br>");

 var yourName =prompt("your name");
 var greet =prompt("greet");

 console.log(yourName+ greet)

document.write("...........", "As 06.03");
document.write("<br>");

var totalCost = (2 * 4) * (4 + 2);
document.write("...........", totalCost);
document.write("<br>");



