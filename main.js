console.log("I Know this uses JQuery and I appreciate it's not 2014 anymore and a bit overkill, but it works well enough for this.") 
var CurrentlyActivePage = "Home"
console.log("This site was written rather quickly over the summer of 2020. My main site is under delicate construction, this merely servers as a stopgap.")

document.getElementById("CurrentWebAddress").innerHTML = window.location.hostname;
document.getElementById("BigDiv").style.display="none";
document.getElementById("ExitCross").style.display="none";



var cards = $(".card");
console.log(cards.length)
WelcomeText();
var WelcomeTracker = 0;
for(var i = 0; i < cards.length; i++){
    var target = Math.floor(Math.random() * cards.length -1) + 1;
    var target2 = Math.floor(Math.random() * cards.length -1) +1;
    cards.eq(target).before(cards.eq(target2));
}

function WelcomeText(){
    var TextToDisplay = ["Hello","Welcome","Wagwan"];
    for (var i=0;i<TextToDisplay.length;i++){
        
        AddToWelcomeText(TextToDisplay[i],0);
        //document.getElementById("WelcomeText").innerHTML = "";
        //document.getElementById("WelcomeText").innerHTML = TextToDisplay[i]
        console.log(TextToDisplay[i]);
        
        
    }
    
};

function AddToWelcomeText(CharToAdd,counter){
    if (counter !=CharToAdd.length){
        document.getElementById("WelcomeText").innerHTML += CharToAdd.charAt(counter);
        counter++;
        setTimeout(function(){AddToWelcomeText(CharToAdd,counter)},1000);
    }

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




function ExpandSpotify(){//original plan was to have this all generate dynamically from json files, but CORS requests will stop that when hosting on github pages
    HideDivs();
    CurrentlyActivePage = "Spotify"
    var TextParagraphs = ["Spotify Group Bangers is a system devised by msyelf with assistance from Daniel Perks , to curate spotify playlists together as a group. It is hosted on free tier heroku(so load times do slow down frequently), and is built on a flask backend."]
    HeaderImage = 'Assets\\SpotifyDemo.png';
    ExapndActiveDiv(HeaderImage,"Spotify Group Bangers");
    for (var i=0;i<TextParagraphs.length;i++){
        AddContentText(TextParagraphs[i]);
    } 
    AddButtonLink("http://news.bbc.co.uk","Give It A Go")
}

function ExpandPagoda(){
    CurrentlyActivePage = "Pagoda"
    HideDivs();
    var TextParagraphs = ["The Pagoda is a network based text game undertaken as part of 4007CEM. My contributions to this were written entirely in C++, however some of the project also involves some SQL and HTML/JS(these parts are not functional unfortunately) The main components of the game worked enough that my individual contributions to the project recived a mark of circa 80%","The remaining part is largely window-dressing","Unfortunately a wroking demonstraion is unavailable as the pre-requisite databases have been pulled,aswell as the window dressign code causing some remaining issues."]
    HeaderImage = 'Assets\\SpotifyDemo.png';
    ExapndActiveDiv(HeaderImage,"The Pagoda");
    for (var i=0;i<TextParagraphs.length;i++){
        AddContentText(TextParagraphs[i]);
    }
    AddButtonLink("http://news.bbc.co.uk","See the Repository") 

}

function ExpandCircle(){//original plan was to have this all generate dynamically from json files, but CORS requests will stop that when hosting on github pages
    CurrentlyActivePage = "Circle"
    HideDivs();
    var TextParagraphs = ["It may seem long ago now, but at the start of the pandemic the UK(and for that matter the US etc) was in the midst of a panic buying problem,culminating in toilet roll becoming scarce. To combat this , and to maintain social distancing the major UK supermarkets devised a system wehere people would have to queue 2m apart around their car parks. We didn't think this was an adequate enough solution,in particular with the stories of health workers not being able to queue, sow e devised a queue booking system for supermarkets","The Circle is a project created for the HackQuarantine with Daniel Perks"]
    HeaderImage = 'http://img.youtube.com/vi/dUIdQCkoBqY/hqdefault.jpg'
    ExapndActiveDiv(HeaderImage,"The Circle");
    for (var i=0;i<TextParagraphs.length;i++){
        AddContentText(TextParagraphs[i]);
    } 
    AddButtonLink("http://thecircle.digital","Take a look")
    AddButtonLink("http://news.bbc.co.uk","See the Repository")
    AddButtonLink("http://news.bbc.co.uk","Watch the Demonstration")
}

function LinkedInHandler(){

}

function PortfolioHandler(){

}

function GithubHandler(){

}


function ActiveDivReset(){
    ClearMainDiv();
    document.getElementById("ExitCross").style.display="block";
    document.getElementById("BigDiv").style.display="none";
    for(var i = 0; i < cards.length; i++){
                 cards[i].style.display = "block";
    }

}


function ExitHomeMenu(){
    switch(CurrentlyActivePage){
        case "Circle":
            ExpandCircle();
            break;
        case "Spotify":
            ExpandSpotify();
            break;
        case "Pagoda":
            ExpandPagoda();
            break;
        default:
            ExpandSpotify();
            break;
    }
}
function ExapndActiveDiv(HeaderImage,HeaderTitleContent){//clicked on div exapnds to full screen,picutre tops the article and dispaperas as scroll down, h1 header - back button to main page
//comme une parralax?
    ClearMainDiv()
    document.getElementById("ExitCross").style.display="none";
    document.getElementById("BigDiv").style.display="block";
    document.getElementById("headerImage").src = HeaderImage;
    document.getElementById("Header").innerHTML = HeaderTitleContent;
    
    var headerTitle = document.getElementById("HeaderDiv");
    var stickyTitle = headerTitle.offsetTop;
    window.onscroll = function(){
        if (window.pageYOffset> stickyTitle) {
            headerTitle.classList.add("sticky");
          }
         else {
            headerTitle.classList.remove("sticky");
          }

    }

}

function AddContentText(TextToAdd){
    var node = document.createElement("p");
    var textnode = document.createTextNode(TextToAdd);
    node.appendChild(textnode);
    document.getElementById("TextContent").appendChild(node);
    var node = document.createElement("br");//add a break
    document.getElementById("TextContent").appendChild(node);

}

function AddButtonLink(Destination,innerHTMLName){
    console.log(Destination);
    var node = document.createElement("button");
    node.innerHTML = innerHTMLName
    node.onclick =function(){
        window.location.href = Destination;
    }
    node.classList.add("ButtonLink")
    document.getElementById("TextContent").appendChild(node);
};


function ClearMainDiv(){
    document.getElementById("TextContent").innerHTML = "";
    document.getElementById("Header").innerHTML = "";
    document.getElementById("headerImage").src = "";
}



//document.getElementById("PagodaDiv").onclick =function (){DivClickTest("Pagoda")};//wonder if i can set these myself in the thing that makes it random like setting a js property
function DivClickTest(Element){
    console.log("Div click worked"+Element);
    HideDivs("LinkedInDiv")
    AddTextToPage(Element)
    ExpandActiveDiv()
    

}


