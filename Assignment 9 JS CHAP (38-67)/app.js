//                                                  CHAP: 38-42
//TASK 1:
// function power(a,b){
//     return Math.pow(a,b);
// }
// console.log(power(2,5));
//TASK 2:
// function leap(y){
//     if(y%4===0){
//         alert(y+" is a Leap year")
//     }else{
//         alert(y+" is not a Leap year")
//     }
// }
// y=+prompt("Enter any year:");
// leap(y);
//TASK 3:
// function areaTriangle(a,b,c){
//     function findS(a,b,c){
//         return (( a + b + c ) / 2);
//     }
//     var S=findS(a,b,c);
//     var area = S*(S - a)*(S - b)*(S - c)
//     return area;
// }
// console.log(areaTriangle(2,2,2));
//TASK 4:
// function mainFunction(s1,s2,s3){
//     function average(s1,s2,s3){
//         return (s1+s2+s3)/3;
//     }
//     function percentage(s1,s2,s3){
//         return ((s1+s2+s3)/300)*100;
//     }
//     return "Marks average: "+average(s1,s2,s3)+"\nPercentage: "+percentage(s1,s2,s3);
// }
// console.log(mainFunction(71,87,85));
//TASK 5:
// function indexOf(str,char){
//     for(var i=0;i<str.length;i++){
//         if(str[i]===char){
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(indexOf("javascript","r"));
//TASK 6:
// function deleteVowel(str){
//     var str1="";
//     for(var i=0;i<str.length;i++){
//         if(str[i]==="a" || str[i]==="A" || str[i]==="e" || str[i]==="E" || str[i]==="i" || str[i]==="I" || str[i]==="o" || str[i]==="O" || str[i]==="u" || str[i]==="U"){
//             str1+=str[i].replace(str[i],"")
//         }
//         else{
//             str1+=str[i];
//         }
//     }
//     return str1
// }
// var str="My name is Bilal";
// document.write("Actual sring: "+str+"<br>");
// document.write("Dleted vowel string: "+deleteVowel(str));
//TASK 7:
// function vowel(str) {
//     var count = 0;
//     var occ = "";
//     for (var i = 0; i < str.length; i++) {
//         switch (str.slice(i, i + 2)) {
//             case "aa":
//                 occ += "aa<br>";
//                 count++;
//                 break;
//             case "ae":
//                 occ += "ae<br>";
//                 count++;
//                 break;
//             case "ai":
//                 occ += "ai<br>";
//                 count++;
//                 break;
//             case "ao":
//                 occ += "ao<br>";
//                 count++;
//                 break;
//             case "au":
//                 occ += "au<br>";
//                 count++;
//                 break;
//             /////////////////////////
//             case "ea":
//                 occ += "ea<br>";
//                 count++;
//                 break;
//             case "ee":
//                 occ += "ee<br>";
//                 count++;
//                 break;
//             case "ei":
//                 occ += "ei<br>";
//                 count++;
//                 break;
//             case "eo":
//                 occ += "eo<br>";
//                 count++;
//                 break;
//             case "eu":
//                 occ += "eu<br>";
//                 count++;
//                 break;
//             /////////////
//             case "ia":
//                 occ += "ia<br>";
//                 count++;
//                 break;
//             case "ie":
//                 occ += "ie<br>";
//                 count++;
//                 break;
//             case "ii":
//                 occ += "ii<br>";
//                 count++;
//                 break;
//             case "io":
//                 occ += "io<br>";
//                 count++;
//                 break;
//             case "iu":
//                 occ += "iu<br>";
//                 count++;
//                 break;
//             ////////////
//             case "oa":
//                 occ += "oa<br>";
//                 count++;
//                 break;
//             case "oe":
//                 occ += "oe<br>";
//                 count++;
//                 break;
//             case "oi":
//                 occ += "oi<br>";
//                 count++;
//                 break;
//             case "oo":
//                 occ += "oo<br>";
//                 count++;
//                 break;
//             case "ou":
//                 occ += "ou<br>";
//                 count++;
//                 break;
//             /////////
//             case "ua":
//                 occ += "ua<br>";
//                 count++;
//                 break;
//             case "ue":
//                 occ += "ue<br>";
//                 count++;
//                 break;
//             case "ui":
//                 occ += "ui<br>";
//                 count++;
//                 break;
//             case "uo":
//                 occ += "uo<br>";
//                 count++;
//                 break;
//             case "uu":
//                 occ += "uu<br>";
//                 count++;
//                 break;
//             default:
//                 break;
//         }
//     }
//     return "Such occurrences are<br>" + occ+"Count is: "+count;
// }
// document.write(vowel("Pleases read this application and give me gratuity"))
//TASK 8:
// function meter(km){
//     return km*1000;
// }
// function feet(km){
//     return km*3281;
// }
// function inches(km){
//     return km*39370;
// }
// function centimeter(km){
//     return km*100000;
// }
// km=+prompt("Enter the distance between two cities (in km.)");
// document.write("the distance between two cities (in m.):  "+meter(km)+"<br>the distance between two cities (in feet.): "+
// feet(km)+"<br>the distance between two cities (in inch.): "+inches(km)+"<br>the distance between two cities (in cm.): "+centimeter(km));
//TASK 9:
// var overtimeRate=12.00;
// var overtimeHours=+prompt("Enter your overtime hours:");

// if(overtimeHours>40)
// {
//     overtimePay=(overtimeHours*12.00);
//     alert("Your overtime pay is: "+overtimePay);
// }
// else{
//     alert("complete 40 hours to get overtime benefit");
// }
//TASK 10:
// var amount=+prompt("Enter amount to withdraw: ");
// var hn=parseInt(amount/100);
// var r1=amount%100;
// var fn=parseInt(r1/50);
// var r2=r1%50;
// var tn=parseInt(r2/10);
// document.write("You will have "+hn+" hundred notes, "+fn+" fifty notes and "+tn+" ten notes");







//                                                  CHAP: 43-48
//TASK 1:
// function alerting(){
//     alert("Welocome")
// }
//TASK 2:
// function msg(){
//     alert("Thanks for purchasing a phone from us.")
// }
//TASK 3:
// function deleteRow(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("myTable").deleteRow(i);
//   }
//TASK 4:
// function change(id,source){
//     var Carimg = document.getElementById(id);
//     Carimg.src=source;
// }
//TASK 5:
// var counter1=0
// var c=document.getElementById("counter");
// function inc(){
//     counter1++;
//     c.innerHTML=counter1;
// }
// function dec(){
//     if(counter1>0){
//         counter1--;
//         c.innerHTML=counter1;
//     }
// }






//                                              CHAP: 49-52
//TASK 1:
// function submission(){
//     var val1=document.getElementById("val1");
//     var val2=document.getElementById("val2");
//     var val3=document.getElementById("val3");
//     var data1=document.createTextNode("Username: "+val1.value);
//     var p1= document.createElement("p");
//     p1.appendChild(data1);
//     var dataForm=document.getElementById("dataForm");
//     dataForm.appendChild(p1);
//     var data2=document.createTextNode("Email: "+val2.value);
//     var p2= document.createElement("p");
//     p2.appendChild(data2);
//     dataForm.appendChild(p2);
//     var data3=document.createTextNode("Password: "+val3.value);
//     var p3= document.createElement("p");
//     p3.appendChild(data3);
//     dataForm.appendChild(p3);
//     val1.value="";
//     val2.value="";
//     val3.value="";
// }
//TASK 2:
// var para=document.getElementById("para")
// function detail(){
//     para.innerHTML="I am Muhammad Bilal Hanif, currently doing software Engineering from NEDUET."
// }
//TASK 3:
// var val1=document.getElementById("val1");
// var val2=document.getElementById("val2");
// var table = document.getElementById("myTable");

// function add(){
//     var row = table.insertRow(1);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     var cell4 = row.insertCell(3);

//     cell1.innerHTML = val1.value;
//     cell2.innerHTML = val2.value;
//     var p = document.createElement("p");
//     var text=document.createTextNode("Delete");
//     p.appendChild(text);
//     p.setAttribute("onclick","deleteRow(this)");
//     cell3.appendChild(p);
//     var p1 = document.createElement("p");
//     var text1=document.createTextNode("Edit");
//     p1.appendChild(text1);
//     p1.setAttribute("onclick","editRow(this)");
//     cell4.appendChild(p1);
//     val1.value="";
//     val2.value="";
// }
// function deleteRow(r) {
//         var i = r.parentNode.parentNode.rowIndex;
//         document.getElementById("myTable").deleteRow(i); 
//       }
// function editRow(r){
//     window.i = r.parentNode.parentNode.rowIndex;
//     window.update=document.getElementById("update");
//     update.style.display="block";
//     var val3=document.getElementById("val3");
//     var val4=document.getElementById("val4");
//     val3.value=document.getElementById("myTable").rows[i].cells.item(0).innerHTML;
//     val4.value=document.getElementById("myTable").rows[i].cells.item(1).innerHTML;
   
// }
// function edit(){
//     document.getElementById("myTable").rows[i].cells.item(0).innerHTML=val3.value;
//     document.getElementById("myTable").rows[i].cells.item(1).innerHTML=val4.value;
//     update.style.display="none";
//     }







//                                              CHAP: 52-57
//TASK 1:
// function image(id){
//     var src=document.getElementById(id);
//     var srcM=src.getAttribute("src")
//     var modal = document.getElementById('modal');
//     modal.classList.add('modal-open')
//     modal.classList.remove('modal-close');
//     modal.style.display="block";
//     var modalimg=document.getElementById("modal-img");
//     modalimg.setAttribute("src",srcM)
// }

// function onClosedImagModal(){
//     var modal = document.getElementById('modal');
//     modal.classList.add('modal-close')
//     modal.classList.remove('modal-open'); 
//     setTimeout(()=>{ modal.style.display = "none"; }, 550)
// }







//                                              CHAP: 58-67
//TASK 1:
//i:
// var maincontent=document.getElementById("main-content");
//ii:
// var c=maincontent.children;
// var txt = "";
//   for (var i = 0; i < c.length; i++) {
//     txt = txt + c[i].tagName + "<br>";
//   }
//   document.getElementById("demo").innerHTML = txt;
//iii:
// var render=document.getElementsByClassName("render");
// var txt = "";
// for(var i=0;i<render.length;i++){
//     txt = txt + render[i].innerHTML + "<br>";
// }
// document.getElementById("demo").innerHTML = txt;
//iv:
// var fn=document.getElementById("first-name");
// fn.setAttribute("value","Bilal");
//v:
// var ln=document.getElementById("last-name");
// var email=document.getElementById("email");
// ln.setAttribute("value","Hanif");
// email.setAttribute("value","bilal@gmail.com");
//TASK 2:
//i:
// var formcontent=document.getElementById("form-content");
// console.log(formcontent.nodeType)
//ii:
// var lastName=document.getElementById("lastName");
// console.log(lastName.nodeType);
// console.log(lastName.childNodes)
//iii:
// var lastName=document.getElementById("lastName");
// lastName.childNodes[0].nodeValue="Last Name: Smith";
//iv:
// var maincontent=document.getElementById("main-content");
// console.log(maincontent.firstChild);
// console.log(maincontent.lastChild);
//v:
// var lastName=document.getElementById("lastName");
// console.log(lastName.nextSibling)
// console.log(lastName.previousSibling)
//vi:
// var email=document.getElementById("email");
// console.log(email.parentNode)
// console.log(email.nodeType)







