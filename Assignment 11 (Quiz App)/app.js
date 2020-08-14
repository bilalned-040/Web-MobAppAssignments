window.onload=function(){
    show(0);
}

var questions = [
    {
        q:"Q: Whats your age?",
        ans:"20",
        options:[
            "18",
            "19",
            "20",
            "21"
        ]
    },
    {
        q:"Q: Whats your sis age?",
        ans:"17",
        options:[
            "17",
            "19",
            "20",
            "21"
        ]
    },
    {
        q:"Q: Whats your bro age?",
        ans:"24",
        options:[
            "18",
            "19",
            "20",
            "24"
        ]
    },
    {
        q:"Q: Whats your father's age?",
        ans:"59",
        options:[
            "18",
            "59",
            "20",
            "24"
        ]
    },
    {
        q:"Q: Whats your mom's age?",
        ans:"none",
        options:[
            "18",
            "19",
            "20",
            "none"
        ]
    }
]

var questions_count=0;
var points=0;


var ques = document.getElementById("ques");
var mark = document.getElementById("mark")

function next(){
    questions_count++;
    check(questions_count);
}
function check(e){
    if(e>5){
        alert("Quiz has been completed") 
    }
    else if(e<=4){
        show(e);
    }
    else if(e==5){
        score();
    }
}
function score(){
    ques.innerHTML="Your Score: "+points+"/5";
    mark.innerHTML="";
}
function show(e){
    var opt1=document.getElementById("opt1");
    var opt2=document.getElementById("opt2");
    var opt3=document.getElementById("opt3");
    var opt4=document.getElementById("opt4");
    ques.innerHTML=questions[e].q;
    opt1.innerHTML=questions[e].options[0];
    opt2.innerHTML=questions[e].options[1];
    opt3.innerHTML=questions[e].options[2];
    opt4.innerHTML=questions[e].options[3];
}
