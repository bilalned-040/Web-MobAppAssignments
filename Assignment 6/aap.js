//                                                  CHAPTER 21-25:
//TASK 1:
// var fName=prompt("Enter your first name:");
// var lName=prompt("Enter your last name:");
// var fullName=fName+" "+lName;
// alert("Welcome "+fullName);
//TASK 2:
// var fvtPhone=prompt("Enter your favorite phone:");
// document.write("My favotite phone is: "+fvtPhone+"<br>");
// document.write("Length of string: "+fvtPhone.length);
//TASK 3:
// var str="Pakistani";
// document.write("String: "+str+"<br>");
// document.write("Index of 'n': "+str.indexOf("n"));
//TASK 4:
// var str="Hello World";
// document.write("String: "+str+"<br>");
// document.write("Last index of 'l': "+str.lastIndexOf("l"));
//TASK 5:
// var str="Pakistani";
// document.write("String: "+str+"<br>");
// document.write("Character at index 3: "+str.charAt(3));
//TASK 6:
// var fName=prompt("Enter your first name:");
// var lName=prompt("Enter your last name:");
// alert("Welcome "+fName.concat([" "],lName));
//TASK 7:
// var str1="Hyderabad";
// var str2=str1.replace("Hyder","Islam");
// document.write("City: "+str1+"<br>");
// document.write("After replacement: "+str2);
//TASK 8:
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var rep=message.replace(/and/g,"&");
// document.write("Message: "+"<br>"+message+"<br><br>");
// document.write("After replacement: "+"<br>"+rep);
//TASK 9:
// var str="472";
// var num=Number(str);
// document.write("Value: "+str+"<br>"+"Type: "+typeof(str)+"<br>");
// document.write("Value: "+num+"<br>"+"Type: "+typeof(num));
//TASK 10:
// var input=prompt("Enter a string:");
// document.write("User input: "+input+"<br>");
// document.write("Upper case: "+input.toUpperCase());
//TASK 11:
// var str=prompt("Enter a string");
// var firstChar=str.slice(0,1).toUpperCase();
// var otherChar=str.slice(1).toLowerCase();
// var titledStr=firstChar+otherChar;
// document.write("User input: "+str+"<br>");
// document.write("Title case: "+titledStr);
//TASK 12:
// var num=35.36;
// var str=num.toString().replace(".","");
// document.write("Number: "+num+"<br>")
// document.write("Result: "+str);
//TASK 13:
// var username=prompt("Enter your username:");
// var a=0;
// for(var i=0;i<username.length;i++){
//     if(username[i]==="!" || username[i]==="," || username[i]==="." || username[i]==="@"){
//         alert("Please enter a valid username!");
//         a=1;
//         break;
//     }
// }
// if(a===0){
//     alert("Valid username")
// }
//TASK 14:
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order =prompt("Welcome to ABC bakery! What do yo want to order Sir/Ma'am").toLowerCase();
// var i = arr.indexOf(order);
// if(i===-1){
//     document.write("We are sorry "+order+" is <b>not available</b> in our bakery")
// } 
// else{
//     document.write(order+" is <b>available</b> at index "+i+" in our bakery");
// }
//TASK 15:
// var pass=prompt("Enter a Password:");
// var alpha=0;
// var num=0;
// if(pass[0]>=0 && pass[0]<=9){
//     alert("Password cannot begin with a number\nPlease enter a valid password");
// }
// else{
//     if(pass.length<6){
//         alert("Password must at least 6 characters long\nPlease enter a valid password");
//     }
//     else{
//         for(var i=0;i<pass.length;i++){
//             if((pass[i]>="a" && pass[i]<="z") || (pass[i]>="A" && pass[i]<="Z")){
//                 alpha=1;
//                 break;
//             }
//         }
//         if(alpha===1){
//             for(var i=0;i<pass.length;i++){
//                 if(Number(pass[i])>=0 && Number(pass[i])<=9){
//                     num=1;
//                     break;
//                 }
//             }
//             if(num===1){
//                 alert("Valid Password");
//             }
//             else{
//                 alert("Password must contain alphabets and numbers both\nPlease enter a valid password");  
//             }
//         }
//         else{
//             alert("Password must contain alphabets and numbers both\nPlease enter a valid password");  
//         }
//     }
// }
//TASK 16:
// var university = "University of Karachi";
// var arr = university.split("");
// for(var i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
// } 
//TASK 17:
// var input=prompt("Enter a string:");
// var last=input[input.length-1];
// document.write("User input: "+input+"<br>");
// document.write("Last character of input: "+last);
//TASK 18:
// var str="The quick brown fox jumps over the lazy dog.";
// var count=0;
// for(var i=0;i<str.length;i++){
//     if(str.slice(i,i+3).toLowerCase()==="the"){
//         count+=1;
//     }
// }
// document.write("Text: "+str+"<br>");
// document.write("There are "+count+" occurrence(s) of the word 'the'.");








//                                                  CHAPTER 26-30:
//TASK 1:
// var integer=Number(prompt("Enter a positive integer:"));
// var rOff=Math.round(integer);
// var flooring=Math.floor(integer);
// var ceiling=Math.ceil(integer);
// document.write("Number: "+integer+"<br>Round Off value: "+rOff+"<br>Floor value: "+flooring+"<br>Ceil Value: "+ceiling);
//TASK 2:
// var integer=Number(prompt("Enter a negative integer:"));
// var rOff=Math.round(integer);
// var flooring=Math.floor(integer);
// var ceiling=Math.ceil(integer);
// document.write("Number: "+integer+"<br>Round Off value: "+rOff+"<br>Floor value: "+flooring+"<br>Ceil Value: "+ceiling);
//TASK 3:
// var num=Number(prompt("Enter any integer:"));
// var absolute=Math.abs(num);
// document.write("The absolute value of "+num+" is "+absolute);
//TASK 4:
// var dice=Math.floor((Math.random() * 6) + 1);
// document.write("Random dice value: "+dice);
//TASK 5:
// var coin=Math.floor((Math.random() * 2) + 1);
// if(coin===1){
//     coinValue="Tails"
//     document.write(coin+"<br>Random coin value: "+coinValue);
// }
// else{
//     coinValue="Heads"
//     document.write(coin+"<br>Random coin value: "+coinValue);
// }
//TASK 6:
// var ran=Math.floor((Math.random() * 100) + 1);
// document.write("Random number between 1 and 100: "+ran);
//TASK 7:
// var weight=prompt("Enter your weight");
// var parsed="";
// for(var i=0; i<weight.length; i++){
//     if(weight[i]>=0 && weight[i]<=9 && weight[i]!=" " || weight[i]==="."){
//         parsed=parsed+weight[i];
//     }
// }
// document.write("The weight of user is "+parsed+" Kilograms.");
//TASK 8:
// var secretNum = Math.floor((Math.random() * 10) + 1);
// var input = +prompt("Guess the number between 1 to 10 : ");

// if(input===secretNum){
//     alert("Congratulation you guess correct number");
// }
// else{
//     alert("Sorry try again");
// }


