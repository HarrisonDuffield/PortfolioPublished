console.log("This site serves a temporary portfolio. Yes, it has been hastily put together.")
var CurrentlyActivePage = "About"
console.log("This site was written rather quickly over the summer of 2020. My main site is under delicate construction, this merely servers as a stopgap.")
document.getElementById("JSWarningMessage").style.display = "none";
document.getElementById("CurrentWebAddress").innerHTML = window.location.hostname;
document.getElementById("BigDiv").style.display="none";
document.getElementById("ExitCross").style.display="none";
AddToHistory("Harrison Duffield","")
var WhatIsLeftBox = "Media" // tracks the boxes


function scrollFunction() {
    return;
 
}

var cards = $(".card");
console.log(cards.length)
WelcomeText();
var WelcomeTracker = 0;
for(var i = 0; i <= cards.length; i++){
    var target = Math.floor(Math.random() * cards.length -1) + 1;
    var target2 = Math.floor(Math.random() * cards.length -1) +1;
    cards.eq(target).before(cards.eq(target2));
}

WindowReloader();

function WindowReloader(){
    var PreviousVisit = window.location.href;
    if(PreviousVisit.indexOf("#")>=0){
        console.log(PreviousVisit);
        CurrentlyActivePage = PreviousVisit.substr(PreviousVisit.indexOf("#")+1,PreviousVisit.length);
        console.log(CurrentlyActivePage);
        CurrentlyActivePageSwitch();

    }
    else{
        console.log("Not A history/back button");
    }
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


function AddToHistory(Title,PageToAdd){ // as essentially a one page JS i need this for UX when people use the back button
    history.pushState(null,Title,PageToAdd);
}

window.onpopstate = function(event){
    console.log(event)
}



function WelcomeText(){
    return;
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



function ExpandOtherWork(){
    AddToHistory("OtherWork","#OtherWork")
    HideDivs();
    CurrentlyActivePage = "OtherWork"
    var LinksToWork = ["https://livecoventryac-my.sharepoint.com/:w:/g/personal/duffiel5_uni_coventry_ac_uk/ETZxLo6sOVBDqBqpeYJWO1QBFxpJwB-d0abrvQMmmPHbQw?e=fgBMSh"]
    var DisplayName = ["Internet of Things 4007CEM - 02/2020"]
    var TextParagraphs = ["Here is a small but hopefully growing showcase of other bits of work I've completed recently : "]
    NonStandardExpandActiveDiv("Other Work");
    for (var i=0;i<TextParagraphs.length;i++){
        LeftAddContentText(TextParagraphs[i]);
    }
    for (var i=0;i<LinksToWork.length;i++){
        AddButtonLink(LinksToWork[i],DisplayName[i]);
    } 
    
}

function ExpandSpotify(){//original plan was to have this all generate dynamically from json files, but CORS requests will stop that when hosting on github pages
    AddToHistory("Spotify","#Spotify")
    HideDivs();
    CurrentlyActivePage = "Spotify"
    var TextParagraphs = ["My Spotify playist utility named 'Spotify Group Bangers' is a system devised by msyelf with assistance from Daniel Perks , to curate spotify playlists together as a group. It is hosted on free tier heroku(so load times do slow down frequently), and is built on a flask backend."]
    HeaderImage = 'Assets\\Spotify\\SpotifyDemo.png';
    ExapndActiveDiv(HeaderImage,"Spotify Group Bangers");
    for (var i=0;i<TextParagraphs.length;i++){
        AddContentText(TextParagraphs[i]);
    } 
    AddButtonLink("http://spotify.harrisonduffield.com","Give It A Go");
    AddButtonLink("https://github.com/HarrisonDuffield/SpotifyGroupPlaylist","View the Repository");
}


function ExpandMonocl(){
    AddToHistory("Monocl","#Monocl")
    HideDivs();
    CurrentlyActivePage = "Monocl"
    var TextParagraphs = ["Monocl was a rudimentary undertaking of a web based langugae education service that would be able to attempt to improve its answers based over time to track changes in language. It allowed for the communtiy of users to submit questions and answers, and gave more trust to certain users questions and answers than others to moderate the system whilst allowing for these users (Teachers) to set homework easily etc." ,"Undertaken over a period of 6 months,starting in January of 2019, it recieved full marks when submitted.","Monocl was the first project made of those listed upon here, and really the first of any actual value I've ever done. It is by far the most well documented of any I have done since.", "Whilst images of the UI of Monocl do exist(and are included in the documentation), they are very poorly designed with the project being very backend heavy.","The documentation and repositories are linked below, Take a look."]
    NonStandardExpandActiveDiv("Monocl");
    for (var i=0;i<TextParagraphs.length;i++){
        LeftAddContentText(TextParagraphs[i]);
    } 
    AddButtonLink("https://github.com/HarrisonDuffield/Monocl","Front End Repository")
    AddButtonLink("https://github.com/HarrisonDuffield/MonoclBackend","Back End Repository")
    AddButtonLink("https://github.com/HarrisonDuffield/MonoclBackend/blob/master/README.md","Documentation")
}

function ExpandPagoda(){
    AddToHistory("Pagoda","#Pagoda")
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
    AddToHistory("Circle","#Circle")
    CurrentlyActivePage = "Circle"
    HideDivs();
    var TextParagraphs = ["It may seem long ago now, but at the start of the pandemic the UK(and elsewhere) was in the midst of a panic buying problem,culminating in toilet roll becoming scarce. To combat this , and to maintain social distancing the major UK supermarkets devised a system where people would have to queue 2m apart around their car parks. We didn't think this was an adequate enough solution,in particular with the stories of the queuing system not really being flexible around timings,so we devised a queue booking system for supermarkets. This would also have had the benefit of tracking the people who were present at any time in the shop, to easily trace contacts in case of infection","The Circle is a project created for the HackQuarantine with Daniel Perks","Please contact me to view the private repostiory"]
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
    AddToHistory("Portfolio","#Portfolio")
    CurrentlyActivePage = "Portfolio"
    HideDivs();
    HeaderImage = "https://avatars1.githubusercontent.com/u/46687573?s=460&u=85245301c86579b24eaadc5c553fd169716f36f4&v=4"
    ExapndActiveDiv(HeaderImage,"About")
    var LastUpdated = "This site was last updated in September 2020";
    var TextParagraphs = ["Hi. I am 19 years old and studying towards a BSc in Computer Science at Coventry University in the United Kingdom." ,"Welcome to my current 'portfolio'. It contains the highlights of recent projects I have worked on , aswell as some of the larger pieces of work undertaken as part of my studies.","My main portfolio is under careful construction, however I intend to make regular improvements to this site just to keep it up to date and fresh.","Keep your eye out, and take a look around","Like what you see? Say hello.",LastUpdated]
    for (var i=0;i<TextParagraphs.length;i++){
        AddContentText(TextParagraphs[i]);
    } 

    
    
    AddButtonLink("https://www.linkedin.com/in/harrison-duffield-70615b196/","LinkedIn")
    AddButtonLink("https://github.com/HarrisonDuffield","Github")
   // AddIFrame(window.href.location,"Meta Portolio");
   


}

function GithubHandler(){
    window.location.replace("https://github.com/HarrisonDuffield")


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
    AddToHistory("","")
    CurrentlyActivePageSwitch();
}

function CurrentlyActivePageSwitch(){
    switch(CurrentlyActivePage){
        case "Circle":
            ExpandCircle();
            break;
        case "Spotify":
            ExpandSpotify();
            break;
        case "OtherWork":
            ExpandOtherWork();
            break;
        case "Monocl":
            ExpandMonocl();
            break;
        case "Pagoda":
            ExpandPagoda();
            break;
        case "Portfolio":
            PortfolioHandler();
            break;
        case "About":
            PortfolioHandler();
        default:
            ActiveDivReset();
            break;
    }
}

function LeftRightSwitch(){
    var leftBox = document.getElementById("MediaContentBox")
    var RightBox = document.getElementById("TextContentBox")
    initialLeftBoxId = LeftBox.id;
    initialRightBoxId = RightBox.id;
    LeftBox.id = initialRightBoxId;
    RightBox.id = initialLeftBoxId;

}

function ExapndActiveDiv(HeaderImage,HeaderTitleContent){//clicked on div exapnds to full screen,picutre tops the article and dispaperas as scroll down, h1 header - back button to main page
//comme une parralax?
    ClearMainDiv();
    document.getElementById("ExitCross").style.display="none";
    document.getElementById("BigDiv").style.display="block";
    document.getElementById("AlternateTextContent").style.display="none";
    if(HeaderImage != "Blank"){
        document.getElementById("headerImage").style.display = "";
        document.getElementById("headerImage").src = HeaderImage;
    }
    else{
        document.getElementById("headerImage").style.display="none";
    }
    
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



function NonStandardExpandActiveDiv(HeaderTitleContent){//Same But for using the left div instead of right div i.e specialist content
    ClearMainDiv();
    document.getElementById("ExitCross").style.display="none";
    document.getElementById("BigDiv").style.display="block";
    document.getElementById("AlternateTextContent").style.display="";
    document.getElementById("headerImage").style.display="none";
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
   // var node = document.createElement("br");//add a break
    //document.getElementById("TextContent").appendChild(node);

}


function LeftAddContentText(TextToAdd){
    var node = document.createElement("p");
    var textnode = document.createTextNode(TextToAdd);
    node.appendChild(textnode);
    document.getElementById("AlternateTextContent").appendChild(node);
}

function LeftAddHrefLinks(Destination,TextContent){
    var node = document.createElement("button");
    node.innerHTML = innerHTMLName
    node.onclick =function(){
        window.location.href = Destination;
    }
    node.classList.add("ButtonLink")
    document.getElementById("AlternateTextContent").appendChild(node);

};

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
    document.getElementById("AlternateTextContent").innerHTML="";
    document.getElementById("Header").innerHTML = "";
    document.getElementById("headerImage").src = "";
    document.getElementById("headerVideo").src="";
    
}



//document.getElementById("PagodaDiv").onclick =function (){DivClickTest("Pagoda")};//wonder if i can set these myself in the thing that makes it random like setting a js property
function DivClickTest(Element){
    console.log("Div click worked"+Element);
    HideDivs("LinkedInDiv")
    AddTextToPage(Element)
    ExpandActiveDiv()
    

}


