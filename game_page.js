player1name=localStorage.getItem("p1");
player2name=localStorage.getItem("p2");
player1score=0;
player2score=0;
document.getElementById("p1n").innerHTML=player1name+":";
document.getElementById("p2n").innerHTML=player2name+":";
document.getElementById("p1score").innerHTML=player1score;
document.getElementById("p2score").innerHTML=player2score;
document.getElementById("Question").innerHTML="Question Turn -"+player1name;
document.getElementById("Answer").innerHTML="Answer Turn -"+player2name;
function sending(){
    get = document.getElementById("inputid").value;
    work=get.toLowerCase();
    charrot=work.charAt(1);
    console.log (charrot);
    length=Math.floor(work.length/2);
    charrot2=work.charAt(length);
    console.log (charrot2);
    var minus = work.length-1;
    var charrot3=work.charAt(minus);
    console.log(charrot3);
    var replace1=work.replace(charrot,"_");
    var replace2=replace1.replace(charrot2,"_");
    var replace3 = replace2.replace(charrot3,"_");
    console.log(replace3);
    var question= "<h4 id='word_display'>Question: "+replace3+"</h4>";
    var input= "<br> Answer: <input id='input_check_box' type='text' > ";
    var button = "<br> <br> <button class='btn btn-info'  onclick='checkbt()'> check </button>";
    var row = question+input+button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("inputid").value=" ";
}
var playerturn = "player1";
var answerturn = "player2";
function checkbt(){
    get_ans = document.getElementById("input_check_box").value;
     ans = get_ans.toLowerCase();
    console.log(ans);
    if(work==ans){
     if(answerturn=="player1"){
         player1score=player1score+1;
         document.getElementById("p1score").innerHTML=player1score;

     }
     else{
         player2score=player2score+1;
         document.getElementById("p2score").innerHTML=player2score;
     }
    }
    if(playerturn=="player1"){
        playerturn="player2";
        document.getElementById("Question").innerHTML="Question turn- "+player2name;
    }
    else{
        playerturn="player1";
        document.getElementById("Question").innerHTML="Question turn- "+player1name;
    }
    if(answerturn=="player1"){
        answerturn="player2";
        document.getElementById("Answer").innerHTML="Answer turn - "+player2name;
    }
    else{
        answerturn="player1";
        document.getElementById("Answer").innerHTML="Answer turn - "+player1name;
    }
    document.getElementById('output').innerHTML=" ";

}
