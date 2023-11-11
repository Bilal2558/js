// document.write("<h1>...........", "As #13-15</h1>");
// // 1
// document.write("<br><h3>...........1 literalArray<h3>");
// var literalArray = ["Owais "+ "Bilal "+ "Osama " +"Salman "+ "Hasnain "] ;
// document.write("<h6>=====>"+literalArray+"</h6>");
// // 2
// document.write("<br><h3>...........2 objectArray<h3>");
// var fruits = new Array( "apple "+ "orange "+ "mango" );
// document.write("<h6>=====>"+fruits+"</h6>");

// // 3
// document.write("<br><h3>...........3 strings array<h3>");
// var stringArray= ["This ", "is ", "String ", "Array"];
// document.write("<h6>=====>"+stringArray+"</h6>");

// // 4
// document.write("<br><h3>...........4 numbers array<h3>");
// var numberArray= [1,2,3,4,5];
// document.write("<h6>=====>"+numberArray+"</h6>");

// // 5 
// document.write("<br><h3>...........5 boolean array<h3>");
// var boolArray=[true, false];
// document.write("<h6>=====>"+boolArray+"</h6>");

// // 6
// document.write("<br><h3>...........6 mixed array<h3>");
// var mixedArray= ["Pakistan: ", 1947];
// document.write("<h6>=====>"+mixedArray+"</h6>");

// // 7
// document.write("<br><h3>...........7 education qualifications in  array<h3>");
// var education= ["Qualification: <br> <br>"+"1) SSC<br>"+ "2) HSC<br>"+ "3) BCS<br>"+ "4) BS<br>"+ "5) BCOM<br>"+ "6) MS<br>"+ "7) M. Phil<br>"+ "8) PhD<br>"];
// document.write("<h6>"+education+"</h6>");

// // 8
// document.write("<br><h3>...........8 students  result in  array<h3>");
// var studentNames = ["Ali", "Bilal", "Danish"];
// var totalScore= 500;
// var score= [490, 480, 470];
// for(var i=0; i<score.length;i++){
//     document.write("<br><h6>=====> Score of " + studentNames[i] + " is " + score[i] + ". Percentage: " + score[i]*100/totalScore + "% </h6><br>");
// }

// 9
document.write("<br><h3>...........9  <h3>");

// color name in  array
document.write("<p>...........  color name in  array </p>");
var colors =[" red", " green", " blue"];
document.write("<h2>=====>", colors + "</h2><br>");

// add frist color one more
document.write("<h4>........... add frist color one more<h4>");
var fristcolor="yellow";
document.write("<h6>=====>", fristcolor+colors + "</h6>");

// add end color one more
document.write("<br><h4>........... add end color one more<h4>");
var endcolor="black";
document.write("<h6>=====>", colors +endcolor+ "</h6><br>");

// Add two more color to the beginning of the array
document.write("<h4>...........Add two more color to the beginning of the array<h4>");

colors.splice(0, 0, "Black", "Yellow");
document.write("<h6>=====>",colors,"<br></h6>");

// Delete first color in array
document.write("<br><h4>...........   Delete first color in array<h4>");
colors.shift();
document.write("<h6>=====>",colors,"<br></h6>");

// Delete last color in array
document.write("<br><h4>...........   Delete last color in array<h4>");
colors.pop();
document.write("<h6>=====>",colors,"<br></h6>");

// index color in array
document.write("<br><h4>........... index color add in array<h4>");
var indexColor=[];
// var colorNumber=+prompt("add color Number",3);
// var colorname=prompt("color name add", "yellow");
colors[colorNumber]=colorname;
document.write("<h6>=====>"+colors+"<br></h6>");

// index color in array
document.write("<br><h4>........... index color delete in array<h4>");
// var deleteNumber=+prompt("delete Color Number",2);
// var deleteColor=prompt("deleteColor", "white");

colors.splice(deleteNumber, 1, deleteColor);
document.write("<h6>=====>"+colors+"<br></h6>");


// // 10
// document.write("<br><h3>...........10  student scores & sort the array in ascending order using Array’s sort method.<h3><br>");
// var scores= [320, 230, 480, 120];
// // document.write("====>Scores of Students: " +scores +  "<br>");
// // document.write("====>Ordered Scores of Students: " + scores.sort());

// // 11
// document.write("<br><h3>...........11  working<h3><br>");

// // 12
// document.write("<br><h3>...........12join method in array<h3><br>");
// var arr=["This ", "is ", "my ", "cat "];

// // document.write("Array: <br>" + arr + "<br><br>");
// // var singleString = arr.join(" ");
// // document.write("String: <br>" + singleString );

// // 13
// document.write("<br><h3>...........13  values one by one<h3><br>");
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write(devices.shift() + "<br>");
// document.write(devices.shift() + "<br>");
// document.write(devices.shift() + "<br>");
// document.write(devices.shift() + "<br>");
