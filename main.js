console.log("I Know this uses JQuery and I appreciate it's not 2014 anymore and a bit overkill, but it works well enough for this.") 
var CurrentlyActivePage = "Home"
console.log("This site was written rather quickly over the summer of 2020. My main site is under delicate construction, this merely servers as a stopgap.")
document.getElementById("JSWarningMessage").style.display = "none";
document.getElementById("CurrentWebAddress").innerHTML = window.location.hostname;
document.getElementById("BigDiv").style.display="none";
document.getElementById("ExitCross").style.display="none";



function scrollFunction() {
    document.getElementById("HeaderDiv").style.padding = "5px 0px";
    document.getElementById("Header").style.fontSize ="1rem";
    return;
  if (document.body.scrollTop > 95 || document.documentElement.scrollTop > 95) {
    document.getElementById("HeaderDiv").style.padding = "5px 0px";
    document.getElementById("Header").style.fontSize ="1rem";
  } else {
    document.getElementById("HeaderDiv").style.padding = "10px 0px";
    document.getElementById("Header").style.fontSize = "3rem";
  }
}

var cards = $(".card");
console.log(cards.length)
WelcomeText();
var WelcomeTracker = 0;
for(var i = 0; i < cards.length; i++){
    var target = Math.floor(Math.random() * cards.length -1) + 1;
    var target2 = Math.floor(Math.random() * cards.length -1) +1;
    cards.eq(target).before(cards.eq(target2));
}

/* function WelcomeText(){
    var TextToDisplay = ["Hello","Welcome"];
    for (var i=0;i<TextToDisplay.length;i++){
        
        AddToWelcomeText(TextToDisplay[i],0);
        document.getElementById("WelcomeText").innerHTML = "";
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

} */


function WelcomeText(){
    var TextToDisplay = ["Hello","Welcome","Have a Browse of my projects"];
    var app = document.getElementById("SubheadingText");
    var typewriter = new Typewriter(app, {
        loop: true
    });
    
    typewriter.typeString('student')
        .pauseFor(2500)
        .deleteAll()
        .typeString('icon.')
        .pauseFor(2500)
        .deleteAll()
        .typeString("majestic.")
        .pauseFor(2500)
        .start();
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
    HeaderImage = 'Assets\\Spotify\\SpotifyDemo.png';
    ExapndActiveDiv(HeaderImage,"Spotify Group Bangers");
    for (var i=0;i<TextParagraphs.length;i++){
        AddContentText(TextParagraphs[i]);
    } 
    AddButtonLink("http://spotify.harrisonduffield.com","Give It A Go")
}

function ExpandPagoda(){
    CurrentlyActivePage = "Pagoda"
    HideDivs();
    var TextParagraphs = ["The Pagoda is a network based text game undertaken as part of 4007CEM. My contributions to this were written entirely in C++, however some of the project also involves some SQL and HTML/JS(these parts are not functional unfortunately) The main components of the game worked enough that my individual contributions to the project recived a mark of circa 80%","The remaining part is largely window-dressing","Unfortunately a wroking demonstraion is unavailable as the pre-requisite databases have been pulled,aswell as the window dressign code causing some remaining issues."]
    HeaderImage = 'Assets\\Pagoda\\PagodaStockImage.jpg';
    ExapndActiveDiv(HeaderImage,"The Pagoda");
    for (var i=0;i<TextParagraphs.length;i++){
        AddContentText(TextParagraphs[i]);
    }
    AddButtonLink("https://github.com/danperks/The-Pagoda","See the Repository") 

}

function ExpandCircle(){//original plan was to have this all generate dynamically from json files, but CORS requests will stop that when hosting on github pages
    CurrentlyActivePage = "Circle"
    HideDivs();
    var TextParagraphs = ["It may seem long ago now, but at the start of the pandemic the UK(and for that matter the US etc) was in the midst of a panic buying problem,culminating in toilet roll becoming scarce. To combat this , and to maintain social distancing the major UK supermarkets devised a system wehere people would have to queue 2m apart around their car parks. We didn't think this was an adequate enough solution,in particular with the stories of health workers not being able to queue, so we devised a queue booking system for supermarkets","The Circle is a project created for the HackQuarantine with Daniel Perks","Please contact me to view the private repostiory"]
    HeaderImage = 'http://img.youtube.com/vi/dUIdQCkoBqY/hqdefault.jpg'
    ExapndActiveDiv(HeaderImage,"The Circle");
    for (var i=0;i<TextParagraphs.length;i++){
        AddContentText(TextParagraphs[i]);
    } 
    AddButtonLink("http://thecircle.digital","Take a look")
    AddButtonLink("https://www.youtube.com/watch?v=dUIdQCkoBqY&feature=youtu.be","Watch the Demonstration")
}

function LinkedInHandler(){
    window.location.replace("https://www.linkedin.com/in/harrison-duffield-70615b196/")

}

function PortfolioHandler(){
    CurrentlyActivePage = "Portfolio"
    HideDivs();
    ExapndActiveDiv("","Portfolio")
    var TextParagraphs = ["Welcome to my current 'portfolio'. It contains the highlights of recent projects I have worked on , aswell as some of the larger pieces of work undertaken as part of my studies.","My main portfolio is under construction(albeit slow), however I intend to make regular improvements to this site just to keep it up to date and fresh.","Keep your eye out, and take a look around","Like what you see? Say hello."]
    for (var i=0;i<TextParagraphs.length;i++){
        AddContentText(TextParagraphs[i]);
    } 
    AddButtonLink("https://www.linkedin.com/in/harrison-duffield-70615b196/","LinkedIn")
    AddButtonLink("https://github.com/HarrisonDuffield","Github")
   // AddIFrame(window.href.location,"Meta Portolio");
   


}

function GithubHandler(){
    window.location.href("https://github.com/HarrisonDuffield")

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
        scrollFunction();
        if (window.pageYOffset> stickyTitle) {
           headerTitle.classList.add("sticky");
           console.log("Sticky Set")
           
          }
         else {
            headerTitle.classList.remove("sticky");
            console.log("Sticky Unset")
          }

    }

}

//function AddIFrame(Source,Title){
  //  var node = document.createElement("iframe");
    //var textnode = document.
    //<iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials"></iframe>
//}
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


