document.getElementById("CurrentWebAddress").innerHTML = window.location.hostname;
document.getElementById("BigDiv").style.display="none";
document.getElementById("ExitCross").style.display="none";
AddToHistory("Harrison Duffield","")

var cards = $(".card");
console.log(cards.length)
WelcomeText();
var WelcomeTracker = 0;
for(var i = 0; i <= cards.length; i++){
    var target = Math.floor(Math.random() * cards.length -1) + 1;
    var target2 = Math.floor(Math.random() * cards.length -1) +1;
    cards.eq(target).before(cards.eq(target2));
}


function HideDivs(ElementToSave){//hide the non active div
    for(var i = 0; i < cards.length; i++){
        if(cards[i].id === ElementToSave){
            cards[i].style.display = "none";
            //continue;
        }
        else{
             cards[i].style.display = "none";
        }
}
}

window.onbeforeunload = function(){ ActiveDivReset();};