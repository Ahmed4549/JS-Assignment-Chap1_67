// CHAPTER # 1

// Task # 1
// alert('Welcome to the page');

// Task # 2
// alert('Error! Please enter a valid password');

// Task # 3
// alert("Welcome to JS Land..\nHappy Coding!");

// Task # 4
// alert('Welcome To JS Land..\nHappy Coding!\nPrevent This Page from addign addtional dialogue boxes');

// Task # 5
// alert('Hello! I can run JS from my web browsers console');

/*--------------------------------------------------------------*/

// CHAPTER # 2

// Task # 1
// var username;

// Task # 2
// var myname = "Muhammad Ahmed Anis";

// Task # 3
// var message = "Hello World";
// alert(message);

// Task # 4
// var name="Jhone Doe";
// var age="15 years old";
// var degree="Certified Mobile App Developer";
// alert(name);
// alert(age);
// alert(degree);

// Task # 5
// var p = "Pizza\nPizz\nPiz\nPi\nP";
// alert(p);

// Task # 6
// var email = "amdans4";
// alert (email + "@gmail.com");

// Task # 7
// var book = 'A smarter way to learn JS';
// alert('I am trying to learn form ' + book);

// Task # 8
// document.writeln("Yeah! I can write HTML content through JS");

// Task # 9
// var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(a);

/*--------------------------------------------------------------*/

// CHAPTER # 3

// Task # 1
// var age =15;
// alert('I am ' + age + ' years old');

// Task # 2
// var track = 14;
// alert('You visited this site ' +track+ ' times');

// Task # 3
// var year = 1999;
// document.writeln('my birth year is ' +year+ '<br>' + ' Datatype of my declared var is int');

// Task # 4
// var name = prompt('enter your name');
// var product = prompt('which product do you want to order?');
// var quantity = prompt('enter quantity');
// document.writeln(name + " ordered " +quantity+ " " +product+ " from XYZ store" );

/*--------------------------------------------------------------*/

// CHAPTER # 4

// Task # 1

// var a,b,c;
// console.log(a,b,c);

// Tash # 2

// LEGAL VARIABLE NAMES
// var a = "abc";
// var a1 = "abc";
// var dollar$ = "abc";
// var AppDotJs = "abc";
// var myAlert = "alert";

// ILLEGAL VARIABLE NAMES
// var 1 = "cant be a number"
// var "a" = "cant be in quotation mark";
// var alert = "illegal keyword";
// var a b = "illegal spaces"
// var -abc = "illegal sign"
// alert(-abc);

// Task # 3

// var heading = "Rules for naming JS variables";
// var dot = ".", underScore = "_", num = "numbers", dollar = "$", letter = "letter", CaseSensitive = "case sensitive", keywords = "JS Keywords";
// document.write(heading.bold());
// document.writeln("<br>" + "Variable names can only contain " + dot + " , " + num + " , " + dollar + " and " + underScore+ " For example ; $my_1stVar");
// document.writeln("<br>" + "Variable names begin with a " +letter+ " , " +dollar+ " or " +underScore+ " For example ; $name, _nam or name");
// document.writeln("<br>" + "Variable names are " +CaseSensitive);
// document.writeln("<br>" + "Variable names must not be any " +keywords);

/*--------------------------------------------------------------*/

// CHAPTER # 5

// Task # 1

// var a = +prompt("Enter first integer");
// var b = +prompt("Enter second integer");
// var c = (a + b);
// alert(c);

// Task # 2

// var a = +prompt("Enter first integer");
// var b = +prompt("Enter second integer");
// var c = (a + b), d = (a - b), e = (a * b), f = (a / b), g = (a % b);
// alert(c);
// alert(d);
// alert(e);
// alert(f);
// alert(g);

// Task # 3

// var a;
// document.writeln("Value after var declaration is " +a);
// a = +prompt("enter some value");
// document.writeln("<br>"+"the initial value is "+a);
// a++;
// document.writeln("<br>"+"the incremented value is: "+a);
// a = a+7;
// document.writeln("<br>"+"val after addition is: "+a);
// a--;
// document.writeln("<br>"+"val after decrement is: "+a);
// a = a%3;
// document.writeln("<br>"+"remainder is: "+a);

// Task # 4

// var ticketPrice = 600;
// var a = +prompt("how many tickets you want?");
// var totalPrice = ticketPrice*a;
// document.writeln("total cost to buy "+a+" tickets is "+totalPrice);

// Task # 5

// var a = +prompt("enter table number");
// for(b = 1; b<13; b++){
//     c=(a*b);
//     document.writeln(a+ " x " +b+ " = " +c +"<br>");
// }

// Task # 6

// var c = +prompt("enter temp in Celsius");
// var f = (c * 9/5)+32;
// document.writeln(c+" Celsius is "+f+" in Fahrenheit");
// f = +prompt("enter temp in Fahrenheit");
// c = (f - 32)*5/9;
// document.writeln("<br>"+f+" Fahrenheit is "+c+" in Celsius");

// Task # 7

// var product1 = 650;
// var product2 = 100;
// var shipping = 100;
// var quantity1 = +prompt("enter quantity for product 1");
// var quantity2 = +prompt("enter quantity for product 2");
// var header = "Shopping Cart";
// document.writeln(header.bold());
// document.writeln("<br>" + "Price of product 1 is: "+product1+ "<br>" + "Quantity of product 1 is: "+quantity1);
// document.writeln("<br>" + "Price of product 2 is: "+product2+ "<br>" + "Quantity of product 2 is: "+quantity2);
// document.writeln("<br>"+"Shipping charges: "+shipping);
// var total = (product1 * quantity1) + (product2 * quantity2) + shipping;
// document.writeln("Your total is: "+total);

// Task # 8

// var marksheet = "Mark Sheet";
// var TotalMarks = 980;
// var MarksObtained = +prompt("Enter Obtained Marks");
// var percentage = (MarksObtained / TotalMarks)*100;
// document.writeln(marksheet.bold());
// document.writeln("<br>"+"Total marks: "+TotalMarks+"<br>"+"Obtained marks: "+MarksObtained+"<br>"+"Your Percentage is: "+percentage+"%");

// Task # 9

// var USdollar = +prompt("Enter total US Dollars");
// var riyal = +prompt("Enter total Saudi Riyals");
// var DollarToPk = (USdollar * 104.80);
// var RiyalToPk = (riyal * 28);
// var pkr = (RiyalToPk + DollarToPk);
// document.writeln("Total currency in PKR is: "+pkr);

// Task # 10

// var a = +prompt("enter a number");
// var b = (a + 5 * 10 / 2);
// document.writeln(b);

// Task # 11

// var currentYr = +prompt("Enter current year");
// var birthYr = +prompt("Enter your birth year");
// var age = (currentYr - birthYr);
// document.writeln("AGE CALCULATOR"+"<br>"+"The current year is: "+currentYr+"<br>"+"Your Borth year is: "+birthYr+"<br>"+"Your age is: "+age);

// Task # 12

// var rad = +prompt("Enter Radius");
// var circum = (2 * 3.142 * rad);
// var area = (3.142 * rad * rad);
// document.writeln("THE GEOMETRIZER" +"<br>"+"Radius is: "+rad+"<br>"+"Circumference is: "+circum+"<br>"+"Area is: "+area);

// Task # 13

// var snack = "Cheetos";
// var age = +prompt("enter ur age");
// var ApproxAge = 65;
// var amount = +prompt("how many snacks do you eat in a day?");
// var TotalSnacks = ((ApproxAge - age)*amount);
// document.writeln("Favorite snack is "+snack+" and you'll need "+TotalSnacks+" "+snack+" for the rest of your life");

/*--------------------------------------------------------------*/

// CHAPTER # 6-9

// Task # 1

// var a = +prompt("Enter value");
// document.writeln("The value is "+a);
// ++a;
// document.writeln("<br>"+"<br>"+"The val of ++a is "+a);
// document.writeln("<br>"+"Now the val is "+a);
// document.writeln("<br>"+"<br>"+"The val of a++ is "+a);
// a++;
// document.writeln("<br>"+"Now the val is "+a);
// --a;
// document.writeln("<br>"+"<br>"+"The val of --a is "+a);
// document.writeln("<br>"+"Now the val is "+a);
// document.writeln("<br>"+"<br>"+"The val of a-- is "+a);
// a--;
// document.writeln("<br>"+"Now the val is "+a);

// Task # 2

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// //             1 -   0 +   1 + 1--;
// document.writeln("The result is: "+result);

// Task # 3

// var name = prompt("enter your name please");
// alert("WELCOME "+name+ " :)");

// Task # 4 Not given

// Task # 5

// var a = +prompt("enter table number",5);
// for(b = 1; b<13; b++){
//     c=(a*b);
//     document.writeln(a+ " x " +b+ " = " +c +"<br>");
// }

// Task # 6

// var a = prompt("Enter first subject name"), b = prompt("Enter second subject name"), c = prompt("Enter third subject name");
// var TotalMark = 100;
// var a1 = +prompt("Enter marks for first subject name"), b1 = +prompt("Enter marks for second subject name"), c1 = +prompt("Enter marks for third subject name");
// var PercentageA = (a1/TotalMark)*100, PercentageB = (b1/TotalMark)*100, PercentageC = (c1/TotalMark)*100;
// var totalPercentage = (PercentageA + PercentageB + PercentageC)/3;
// document.writeln(PercentageA+"<br>"+PercentageB+"<br>"+PercentageC+"<br>"+totalPercentage);

// Task # 7 Not Given

/*--------------------------------------------------------------*/

// CHAPTER # 9-11

// Task # 1

// var cityName = prompt("Enter your city name");
// cityName = cityName.toLowerCase();
// if(cityName == "karachi"){
//     alert("Welcome to the city of Lights");
// }
// else{
//     alert("oops!");
// }

// Task # 2

// var gender = prompt("Enter your gender");
// gender = gender.toLowerCase();
// if(gender == "male"){
//     alert("Good Morning Sir");
// }
// else if(gender == "female"){
//     alert("Good Morning Madam");
// }
// else{
//     alert("invalid!");
// }

// Task # 3

// var SignalColor =  prompt("Enter signal color: Red/Yellow/Green");
// SignalColor = SignalColor.toLowerCase();
// if (SignalColor === "red"){
//     alert("You must stop!");
// }
// else if (SignalColor === "yellow"){
//     alert("Ready to move.");
// }
// else if (SignalColor === "green"){
//     alert("Move now.");
// }
// else{
//     alert("Invalid color!");
// }

// Task # 4

// var FuelRemaining = +prompt("Enter remaining fuel");
// if(FuelRemaining <0.25){
//     alert("Refill please");
// }
// else{
//     alert("You can drive your car peacefully");
// }

// Task # 5

// A
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
/* Alert message is displayed in above script i.e: Script No.A because its PRE INCREMENT */

// B
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
/* Alert message is not displayed in above script i.e: Script No.B because its POST INCREMENT */

// C
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
// }
/* Condition 2 and 4 is true because C is POST INCREMENTED in first IF condition and is PRE INCREMENTED in condition number 3 */

// D
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
/* The alert messagce is displayed because the formula of variable totalCost = materialCost + laborCost */

// E
// if (true){
//     alert("True");
// }
// if (false){
//     alert("false")
// }
/* The Second condition is FALSE and un-reachable because the first conditon runs first and the alert message displays TRUE */

// F
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }
/* the alert message is displayed because of ASCII code (car = 099 097 114 & cat = 099 097 116) */


// Task # 6

// var totall = 300;
// var marks1 = +prompt("Enter marks in first subject"), marks2 = +prompt("Enter marks in second subject"), marks3 = +prompt("Enter marks in third subject");
// var perc = ((marks1 + marks2 + marks3)/totall)*100;
// alert("Your percentage is: "+perc+"%");
// if(perc >= 80){
//     alert("You got A-one grade\nExcellent");
// }
// else if(perc >= 70){
//     alert("You got A grade\nGood");
// }
// else if(perc >= 60){
//     alert("You got B grade\nYou need to improve");
// }
// else if(perc < 60){
//     alert("You're failed\nSorry! :(");
// }
// else{
//     alert("Invalid Percentage!");
// }

// Task # 7

// var SecretNumber = 5;
// var guess = +prompt("Enter number u guessed");
// if(guess == 5){
//     alert("Bingo! Corect answer.");
// }
// else {
//     alert("Close enough to the correct answer\nYour guessed number is: "+guess);
// }

// Task # 8

// var n = +prompt("Enter a number");
// if (n%3 == 0 ){
//     alert("The number is divisible by 3");
// }
// else{
//     alert("Number is not divisible by 3");
// }

// Task # 9

// var entry = +prompt("enter a number");
// if (entry%2 == 0 ){
//         alert("The number is even");
// }
// else{
//         alert("Number is odd");
// }

// Task # 10

// var T = +prompt("enter temprature");
// if(T > 40){
//     alert("It is too hot outside.");
// }
// else if(T > 30){
//     alert("The Weather today is Normal.");
// }
// else if(T > 20){
//     alert("Today’s Weather is cool.");
// }
// else if (T >= 1){
//     alert("OMG! Today’s weather is so Cool.");
// }
// else{
//     alert("Invalid entry");
// }

// Task # 11

// var firstOprand = +prompt("Enter first value");
// var secondOprand = +prompt("Enter second value");
// var operation = prompt("Enter operator");
// var resultt;
// if(operation == "+"){
//     resultt = (firstOprand + secondOprand);
//     alert("Anwer: "+resultt);
// }
// else if(operation == "-"){
//     resultt = (firstOprand - secondOprand);
//     alert("Anwer: "+resultt);
// }
// else if(operation == "*"){
//     resultt = (firstOprand * secondOprand);
//     alert("Anwer: "+resultt);
// }
// else if(operation == "/"){
//     resultt = (firstOprand / secondOprand);
//     alert("Anwer: "+resultt);
// }
// else if(operation == "%"){
//     resultt = (firstOprand % secondOprand);
//     alert("Remainder: "+resultt);
// }
// else{
//     alert("Ivalid!");
// }

/*--------------------------------------------------------------*/

// CHAPTER # 12-13

// Task # 1

// var input = prompt("enter any value.");
// input = input.charCodeAt(0);
// if (input >= 65 && input <= 90){
//     alert("It's a Capitial Letter");
// }
// else if(input >= 97 && input <= 122){
//     alert("It's a Small Letter");
// }
// else if(input >= 48 && input <= 57){
//     alert("It's a Number");
// }
// else{
//     alert("Invalid Entry!");
// }

// Task # 2

// var inputNum1 = +prompt("enter 1st value.");
// var inputNum2 = +prompt("enter 2nd value.");
// if(inputNum1 > inputNum2){
//     alert("first value is greater");
// }
// else if(inputNum2 > inputNum1){
//     alert("second value is greater");
// }
// else if(inputNum2 == inputNum1){
//     alert("both are equal");
// }
// else{
//     alert("invalid entry");
// }

// Task # 3

// var inputNumber = +prompt("Enter any number");
// if (inputNumber < 0){
//     alert("negative number");
// }
// else if (inputNumber > 0){
//     alert("positive number");
// }
// else if (inputNumber == 0){
//     alert("number is zero");
// }
// else{
//     alert("Invalid entry");
// }

// Task # 4

// var inputVowel = prompt("Enter one letter");
// inputVowel = inputVowel.charCodeAt(0);
// if (inputVowel == 65 || inputVowel == 69 || inputVowel == 73 || inputVowel == 79 || inputVowel == 85){
//     alert("its a vowel");
// }
// else if (inputVowel == 97 || inputVowel == 101 || inputVowel == 105 || inputVowel == 111 || inputVowel == 117){
//     alert("its a vowel");
// }
// else{
//     alert("Not a vowel");
// }

// Task # 5

// var pwd = "xyz123";
// var pwdEntry = prompt("Enter password.");
// if (pwd === pwdEntry){
//     alert("Correct password");
// }
// else if (pwd != pwdEntry){
//     alert("Incorrect password");
// }
// else{
//     alert("Please enter password");
// }

// Task # 6

//INCORRECT CODE
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// CORRECT CODE
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting);
// }
// else {
// greeting = "Good evening";
// alert(greeting);
// }

// Task # 7

// var time = +prompt("Enter time in 24 hour format i.e: 0-24");
// if ((time >= 0 && time < 6) || (time >= 19 && time < 24) ){
//     alert("Good Night!\nThe time is: "+time);
// }
// else if (time >= 6 && time < 12){
//     alert("Good Morning!\nThe time is: "+time);
// }
// else if (time >= 12 && time < 17){
//     alert("Good Afternoon!\nThe time is: "+time);
// }
// else if (time >= 17 && time < 19){
//     alert("Good Evening!\nThe time is: "+time);
// }
// else{
//     alert("Invalid time.");
// }

/*--------------------------------------------------------------*/

// CHAPTER # 14-16

// Task # 1

// var StdNames = [];

//  Task # 2

// var StdNames1 = new Array();

// Task # 3

// var stringArray = ["Muhammd","Ahmed","Anis"];
// alert("Welcome "+stringArray[1]);

// Task # 4

// var intArray = [0,1,2,3,4,5];
// alert("index zero has "+intArray[0]);

// Task # 5

// var BoolArray = [true,false];
// alert(BoolArray[1]);

// Task # 6

// var MixedArray = [0, "FirstIndex", 2, "ThirdIndex"];
// alert(MixedArray[0]);
// alert(MixedArray[1]);

// Task # 7

// var QualificationArray = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// document.writeln("Qualifications:".bold()+"<br>"+"1) "+QualificationArray[0]
// +"<br>"+"2) "+QualificationArray[1]+"<br>"+"3) "+QualificationArray[2]
// +"<br>"+"4) "+QualificationArray[3]+"<br>"+"5) "+QualificationArray[4]
// +"<br>"+"6) "+QualificationArray[5]+"<br>"+"7) "+QualificationArray[6]
// +"<br>"+"8) "+QualificationArray[7]);

// Task # 8

// var Snames = ["Ali","Ghous","Basit"];
// var score = [320,230,430];
// var TotalMarkss = 500;
// var percIndZero = (score[0]/TotalMarkss)*100, percIndOne = (score[1]/TotalMarkss)*100, percIndTwo = (score[2]/TotalMarkss)*100;
// document.writeln("The score of "+Snames[0]+" is "+score[0]+" and Precentage is: "+percIndZero+"%"+"<br>"
// +"The score of "+Snames[1]+" is "+score[1]+" and Precentage is: "+percIndOne+"%"+"<br>"
// +"The score of "+Snames[2]+" is "+score[2]+" and Precentage is: "+percIndTwo+"%");

// Task # 9

// var colors = [" Red"," Green"," Blue"," Yellow"];
// document.writeln("Colors Array".bold()+"<br>"+"<br>"+"Initial array colors: "+colors);
// var question = prompt("What color do you want to put in the begining?");
// colors.unshift(question);
// document.writeln("<br>"+"<br>"+"After adding new color is the begining: "+colors);
// var question = prompt("What color do you want to put in the End?");
// colors.push(question);
// document.writeln("<br>"+"<br>"+"After adding new color is the End: "+colors);
// var question = prompt("Add one more color in the begining");
// colors.unshift(question);
// var question = prompt("One more color please :D");
// colors.unshift(question);
// document.writeln("<br>"+"<br>"+"After adding 2 new colors is the begining: "+colors);
// colors.shift(question);
// document.writeln("<br>"+"<br>"+"After removing first color from the begining: "+colors);
// colors.pop(question);
// document.writeln("<br>"+"<br>"+"After removing first color from the end: "+colors);

// Task # 10

// var StdScore = [];
// var ArrSize = +prompt("Enter number of subjects");
// for(var i=0; i<ArrSize; i++) {
// 	StdScore[i] = prompt('Enter marks for subject #' + (i+1));
// }
// document.writeln("Student Scores: ".bold()+StdScore);
// document.writeln("<br>"+"Student Scores in ascending order: ".bold()+StdScore.sort());

// Task # 11

// var cities = ["karachi","lahore","peshawar","islamabad","quetta"];
// var selectedCities = [];
// selectedCities = cities.slice(2, 4);
// document.writeln("The cities are: ".bold()+cities);
// document.writeln("<br>"+"Selected cities are: ".bold()+selectedCities);

// Task # 12

// var arr1 = ["This", "is", "my","cat"];
// document.writeln("This is array: "+arr1);
// document.write("<br>"+"This is string: "+ arr1.join(" "));

// Task # 13

// var fifo = [];
// fifo.push("1st element");
// fifo.push(" 2nd element");
// fifo.push(" 3rd element");
// fifo.push(" 4th element");
// fifo.push(" 5th element");
// document.writeln(fifo);
// fifo.shift();
// document.writeln("<br>"+"<br>"+"1st element removed: "+"<br>"+fifo);
// fifo.shift();
// document.writeln("<br>"+"<br>"+"2nd element removed: "+"<br>"+fifo);
// fifo.shift();
// document.writeln("<br>"+"<br>"+"3rd element removed: "+"<br>"+fifo);
// fifo.shift();
// document.writeln("<br>"+"<br>"+"4th element removed: "+"<br>"+fifo);
// fifo.shift();
// document.writeln("<br>"+"<br>"+"5th element removed: "+"<br>"+fifo);

// Task # 14

// var lifo = [];
// lifo.push("1st element");
// lifo.push(" 2nd element");
// lifo.push(" 3rd element");
// lifo.push(" 4th element");
// lifo.push(" 5th element");
// document.writeln(lifo);
// lifo.pop();
// document.writeln("<br>"+"<br>"+"5th element removed: "+"<br>"+lifo);
// lifo.pop();
// document.writeln("<br>"+"<br>"+"4th element removed: "+"<br>"+lifo);
// lifo.pop();
// document.writeln("<br>"+"<br>"+"3rd element removed: "+"<br>"+lifo);
// lifo.pop();
// document.writeln("<br>"+"<br>"+"2nd element removed: "+"<br>"+lifo);
// lifo.pop();
// document.writeln("<br>"+"<br>"+"1st element removed: "+"<br>"+lifo);

// Task # 15

// var manufacturers = ["Apple"," Samsung"," HTC"," Nokia"," Samsung"];
// document.writeln("Here are some Mobile device manufactures:".bold()+"<br>"+"<br>");
// document.writeln("No.1: "+manufacturers[0]+"<br>");
// document.writeln("No.2: "+manufacturers[1]+"<br>");
// document.writeln("No.3: "+manufacturers[2]+"<br>");
// document.writeln("No.4: "+manufacturers[3]+"<br>");
// document.writeln("No.5: "+manufacturers[4]+"<br>");

/*--------------------------------------------------------------*/

// CHAPTER # 17-20

// Task # 1

// var TwoDArray = [[],[]];

// Task # 2

// let matrix = [[0, 1, 2, 3],[ 1, 0, 1, 2],[ 2, 1, 0, 1]];
//   alert(matrix[0]+"\n"+matrix[1]+"\n"+matrix[2]);

// Task # 3

// for(var x =1 ; x <=10 ; x++){
//     document.writeln(x+"<br>");
// }

// Task # 4

// var a = +prompt("enter table number");
// var userTime = +prompt("Enter how many time you want to multiply");
// for(b = 1; b<=userTime; b++){
//     c=(a*b);
//     document.writeln(a+ " x " +b+ " = " +c +"<br>");
// }

// Task # 5

// var xyzArr = ["apple", "banana", "mango", "orange", "strawberry"];
// document.writeln("Elements of array are:".bold()+"<br>");
// for( var z = 0; z<xyzArr.length ; z++){
//     document.writeln(xyzArr[z]+"<br>");
// }
// for(var y = 0; y<xyzArr.length; y++){
//     document.writeln("<br>"+"Element at index "+y+" is "+xyzArr[y]+"<br>");
// }

// Task # 6

// var count = +prompt("Kahan tak counting chaheye?");
// document.writeln("Counting: ".bold()+"<br>");
// for(var c = 1; c<=count; c++){
//     document.writeln(c);
// }
// document.writeln("<br>"+"Reversed counting: ".bold()+"<br>");
// for(var r = count; r >0; r--){
//     document.writeln(r);
// }
// document.writeln("<br>"+"Even numbers: ".bold()+"<br>");
// for(var e = 0; e< c; e++){
//     if(e % 2 === 0){
//         document.writeln(" "+e+" ");
//     }
// }
// document.writeln("<br>"+"Odd numbers: ".bold()+"<br>");
// for(var o = 0; o< c; o++){
//     if(o % 2 != 0){
//         document.writeln(" "+o+" ");
//     }
// }
// document.writeln("<br>"+"Series: ".bold()+"<br>");
// for(var e = 1; e< c; e++){
//     if(e % 2 === 0){
//         document.writeln(" "+e+"k");
//     }
// }

// Task # 7

//  var ItemArr = ["cake", "biscuit", "cookie", "chips", "patty"]
// var que = prompt("Welcome to our bakery! Please enter the item you want. :)");
// que.toLowerCase();
// var find = ItemArr.includes(que);
// if (find == true){
//     alert("Yes "+que+ " is available");
// }
// else{
//     alert("Sorry! we dont have "+que);
// }

// Task # 8

// var LargeNumArr = [24, 53, 78, 91, 12];
// alert(Math.max(...LargeNumArr)+" is the largest number");

// Task # 9

// var SmallNumArr = [24, 53, 78, 91, 12];
// alert(Math.min(...SmallNumArr)+" is the smallest number");

// Task # 10

// document.writeln("Multiplies of 5:".bold());
// for (var x=1; x <= 100; x++){
// if( x % 5 == 0 ){
//     document.writeln(" "+x);
//     }
// }
