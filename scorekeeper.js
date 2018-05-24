var p1score = 0;
var p2score = 0;

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
}

function playingTo(){
    var x = document.getElementById("playingToInput").value;
    
    document.getElementById("playingToNumber").innerHTML= x;
    document.getElementById("p1").disabled=false;
    document.getElementById("p2").disabled=false;
    
}

function playerOneAddPoint(){
    p1score++;
    document.getElementById("p1score").innerHTML=p1score.toString();
    
    console.log('p1score is '+p1score);
    
    if(p1score == document.getElementById("playingToInput").value){
        document.getElementById("p1score").style.color="green";
        document.getElementById("p1").disabled=true;
        document.getElementById("p2").disabled=true;
    }else if (p2score == document.getElementById("playingToInput").value){
        document.getElementById("p2score").style.color="green";
        document.getElementById("p1").disabled=true;
        document.getElementById("p2").disabled=true;
    }
}


function playerTwoAddPoint(){
    p2score++;
    document.getElementById("p2score").innerHTML=p2score.toString();
    
    console.log('p2score is '+p2score);
    
    if(p1score == document.getElementById("playingToInput").value){
        document.getElementById("p1score").style.color="green";
        document.getElementById("p1").disabled=true;
        document.getElementById("p2").disabled=true;
    }else if(p2score == document.getElementById("playingToInput").value){
        document.getElementById("p2score").style.color="green";
        document.getElementById("p1").disabled=true;
        document.getElementById("p2").disabled=true;
    }
}

function reset(){
    p1score = 0;
    p2score = 0;
    
    document.getElementById("p1score").innerHTML=p1score.toString();
    
    document.getElementById("p2score").innerHTML=p2score.toString();
    
    document.getElementById("p1score").style.color="";
    
    document.getElementById("p2score").style.color="";
    
    document.getElementById("playingToInput").value="";
    
    document.getElementById("playingToNumber").innerHTML="";
    
    document.getElementById("p1").disabled=true;
    
    document.getElementById("p2").disabled=true;
}