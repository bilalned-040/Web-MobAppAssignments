var interval;
var min=0;
var sec=0;
var msec=0;
var minheading=document.getElementById("min");
var secheading=document.getElementById("sec");
var msecheading=document.getElementById("msec");

function timer(){
    msec++;
    msecheading.innerHTML=msec;
    if(msec>=100){
        sec++;
        secheading.innerHTML=sec;
        msec=0;
    }
    else if(sec>=60){
        min++;
        minheading.innerHTML=min;
        sec=0;
    }
}
var dis=document.getElementById("dis");
   
function start(){
   interval = setInterval(timer, 10); //10 in milisecond
   dis.disabled=true;

}

function stop(){
    clearInterval(interval);
    dis.disabled=false;
}

function reset(){
    min=0;
    sec=0;
    msec=0;
    msecheading.innerHTML=msec+"0";
    secheading.innerHTML=sec+"0";
    minheading.innerHTML=min+"0";
    stop();
    dis.disabled=false;
}