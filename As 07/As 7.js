// document.write("<h1>...........As 06.07<br><h1>");
// // 1
// document.write("<h3>...........1<br><h3>");
// var city=prompt("Enter your City", "Karachi");
// if(city==="Karachi"){
//     alert("Welcome to city of lights");
// }
// else{
//     alert("Not Avalibale");
// }

// document.write("Enter City");

// // 2
// document.write("<h3>...........2<br><h3>");
// var gender=prompt("Enter your Gender", "male")
// if(gender==="male"){
//     alert("Good Morning Sir.");
// }
// if(gender==="female"){
//     alert("Good Morning Ma’am.");
// }
// else{
//     alert("please Enter your Gender" );
// }
// document.write("Enter your Gender");

// // 3
// document.write("<h3>...........3<br><h3>");
// var color=prompt("Enter traffic signal color", "Red")
// if(color==="Red"){
//     alert("Must Stop");
// }
// else if(color==="Yellow"){
//     alert("Ready to move");
// }
// else if(color==="Green"){
//     alert("Move now");
// }
// else{
//     alert("please Enter traffic signal color" );
// }
// document.write("Enter traffic signal color");


// // 4
// document.write("<h3>...........4<br><h3>");
// var fuel=prompt("Enter fuel in car", 0.60)
// if(fuel < 0.25){
//     alert("Please refill the fuel in your car");
// }
// else{
//     alert("Move" );
// }
// document.write("Enter fuel in car");

// // 5
// document.write("<h3>...........5<br><h3>");
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// // Not run
// var b = 82;   
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// // ...
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
//  }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
// document.write("check code Run <br>");

// 6
document.write("<h3>...........5<br><h3>");
var marks=prompt("Total marks: ", 300);
var English=+prompt("English marks: ", 90);
var Urdu=+prompt("Urdu marks: ",50 );
var Math=+prompt("Math marks: " ,80);

// Marks_obtained
var Marks_obtained = English + Urdu + Math;
// Percentag
var Percentag=(Marks_obtained/300*100).toFixed(0);

// Total Marks Show
document.write("Total marks:  ",  marks, "<br>");

// Marks_obtained Show
document.write("Marks obtained:  ", Marks_obtained, "<br>");

// Percentage show
document.write("Percentage:  ", Percentag, "%<br>");

// Grade Show
if(Percentag=>80 ) {
    document.write("Grade: A-one",  "<br>");
}
else if (Percentag=>70 ) {
    document.write("Grade: A",  "<br>");
}
else if (Percentag=60 ) {
    document.write("Grade: B",  "<br>");
}
else  {
    document.write("Grade: Fail",  "<br>");
}