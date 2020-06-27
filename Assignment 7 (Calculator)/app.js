function getNumber(num){
    var result=document.getElementById("output-value");
    result.value+=num;
}

function clearResult(){
    var result=document.getElementById("output-value");
    result.value="";
}

function getResult(){
    var result=document.getElementById("output-value");
    result.value=eval(result.value);
}

function clearLast(){
    var result=document.getElementById("output-value");
    var x=result.value;
    result.value=x.slice(0,(x.length-1))
}

