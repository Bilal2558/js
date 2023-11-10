document.write("<h1>...........", "As #13-15</h1>");
// 1
document.write("<br><h3>...........1literalArray<h3>");
var literalArray = [];

// 2
document.write("<br><h3>...........2objectArray<h3>");
var objectArray = new Array();

// 3
document.write("<br><h3>...........3strings array<h3>");
var stringArray= ["This ", "is ", "String ", "Array"];

// 4
document.write("<br><h3>...........4numbers array<h3>");
var numberArray= [1,2,3,4,5];

// 5
document.write("<br><h3>...........5boolean array<h3>");
var boolArray=[true, false];

// 6
document.write("<br><h3>...........6mixed array<h3>");
var mixedArray= ["Pakistan: ", 1947];

// 7
document.write("<br><h3>...........7education qualifications in  array<h3>");
var education= ["Qualification: <br> <br>"+"1) SSC<br>"+ "2) HSC<br>"+ "3) BCS<br>"+ "4) BS<br>"+ "5) BCOM<br>"+ "6) MS<br>"+ "7) M. Phil<br>"+ "8) PhD<br>"];
// document.write(education);

// 8
document.write("<br><h3>...........8 students  result in  array<h3>");
var studentNames = ["Ali", "Bilal", "Danish"];
var totalScore= 500;
var score= [490, 480, 470];
for(var i=0; i<score.length;i++){
    // document.write("<br> Score of " + studentNames[i] + " is " + score[i] + ". Percentage: " + score[i]*100/totalScore + "% <br>");
}

// 9
document.write("<br><h3>...........9  color name in  array wrking<h3>");


// 10
document.write("<br><h3>...........10  student scores & sort the array in ascending order using Array’s sort method.<h3><br>");
var scores= [320, 230, 480, 120];
// document.write("====>Scores of Students: " +scores +  "<br>");
// document.write("====>Ordered Scores of Students: " + scores.sort());

// 11
document.write("<br><h3>...........11  working<h3><br>");

// 12
document.write("<br><h3>...........12join method in array<h3><br>");
var arr=["This ", "is ", "my ", "cat "];

// document.write("Array: <br>" + arr + "<br><br>");
// var singleString = arr.join(" ");
// document.write("String: <br>" + singleString );

// 13
document.write("<br><h3>...........13  values one by one<h3><br>");
var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write(devices.shift() + "<br>");
document.write(devices.shift() + "<br>");
document.write(devices.shift() + "<br>");
document.write(devices.shift() + "<br>");
