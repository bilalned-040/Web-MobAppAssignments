window.onload=function(){
    show(0);
}

var questions = [
    {
        q:"Q: What is the capital city of Pakistan?",
        ans:"Islamabad",
        options:[
            "Lahore",
            "Rawalpndi",
            "Islamabad",
            "Karachi"
        ]
    },
    {
        q:"Q: What does Pakistan means in Urdu?",
        ans:"Land of the pure",
        options:[
            "Land of the mighty",
            "Land of gold",
            "Land of wealth",
            "Land of the pure"
        ]
    },
    {
        q:"Q: Which of these is an official language of the country?",
        ans:"Urdu",
        options:[
            "Urdu",
            "English",
            "Arabic",
            "Turkish"
        ]
    },
    {
        q:"Q: Who is the current Prime Minister of Pakistan?",
        ans:"Imran Khan",
        options:[
            "Nawaz Sharif",
            "Arif Alvi",
            "Imran Khan",
            "None"
        ]
    },
    {
        q:"Q: Who is not the CM of Pakistan's provinces?",
        ans:"None",
        options:[
            "Usman Buzdar",
            "Jam Kamal Khan",
            "Murad Ali Shah",
            "None"
        ]
    }
]

var questions_count=0;
var points=0;


var ques = document.getElementById("ques");
var mark = document.getElementById("mark")

function next(){
    if(questions_count<=4){
        scoring(questions_count)
    }
    questions_count++;
    check(questions_count);
}

function scoring(e){
    var Radios1=document.getElementById("Radios1");
    var Radios2=document.getElementById("Radios2");
    var Radios3=document.getElementById("Radios3");
    var Radios4=document.getElementById("Radios4");
    var array=[Radios1,Radios2,Radios3,Radios4];
    
    for(var i=0;i<=3;i++){
        if(array[i].nextSibling.innerHTML===questions[e].ans){
            if(array[i].checked){
                points++;
            }
        }
    }
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
