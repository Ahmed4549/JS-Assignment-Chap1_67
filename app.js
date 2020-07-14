// JavaScript

// Chap # 38-44

// Task # 1 

// function raised(a,b){
//     a = +prompt("Enter value of A");
//     b = +prompt("Enter value of B");
//     var c = Math.pow(a,b);
//     alert("The value of a: "+a+" raised to b: "+b+" is: "+c);
// }
// raised();

// TAsk # 2

// function CheckLeapYear(){
//     var yearEntry = prompt("Enter any year");
//     if( (0 == yearEntry % 4) && (0 != yearEntry % 100) || (0 == yearEntry % 400) )
//     {
//         alert(yearEntry+" is a leap year");  
//     }
//     else
//     {
//         alert(yearEntry+" is not a leap year");  
//     }
// }
// CheckLeapYear();

// Task # 3

// function AreaOfTrianlge(){
// var side1 = +prompt("enter value of first side of triangle");
// var side2 = +prompt("enter value of second side of triangle");
// var side3 = +prompt("enter value of third side of triangle");

// var s = (side1 + side2 + side3)/2;
// var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
// alert("Area of trianle is: "+area);
// }
// AreaOfTrianlge();

// Task # 4

// function mainFuntion(mainResult1,mainResult2){
//     var marks1 = +prompt("Enter marks for 1st Subject");
//     var marks2 = +prompt("Enter marks for 2nd Subject");
//     var marks3 = +prompt("Enter marks for 3rd Subject");

//         function average(avg){
//             avg = (marks1+marks2+marks3)/3
//             return avg
//         }
//         function percentage(perr){
//             perr = ((marks1+marks2+marks3)/300)*100;
//             return perr
//         }
//         mainResult1 = average();
//         mainResult2 = percentage();
//         alert("Average of marks is: "+mainResult1+"\n"+"Percentage is: "+ mainResult2+"%")
// }
// mainFuntion();

// Task # 5

// var NewArrayOne = ["a","b","c","d","e"];
// alert("Array: "+NewArrayOne)
// var i = 0;
// do {
//   if(NewArrayOne === "c"){
//       alert(NewArrayOne.length);
//   }
// }
// while (i < NewArrayOne.length);

// Task # 6

// function removeVowels(){
//     var strOne = ["apple","banana","grapes","incognito","universe"];                          

//    string = strOne.map(x=>x.replace( /[aeiou]/g, '' ));              

//   alert(string);
// }
// removeVowels();

// Task # 7

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
    
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
//     return count
//   }
//   alert("Occurance of vowels: "+findOccurrences());

// TAsk # 8

