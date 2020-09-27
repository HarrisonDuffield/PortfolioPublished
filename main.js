console.log("This site serves a temporary portfolio. Yes, it has been hastily put together.")
var CurrentlyActivePage = "About"
console.log("This site was written rather quickly over the summer of 2020. My main site is under delicate construction, this merely servers as a stopgap.")
document.getElementById("JSWarningMessage").style.display = "none";


var WhatIsLeftBox = "Media" // tracks the boxes
function LinkedInHandler(){
    window.location.replace("https://www.linkedin.com/in/harrison-duffield-70615b196/")

}
function GithubHandler(){
    window.location.replace("https://github.com/HarrisonDuffield")


}
function ActiveDivReset(){
    window.location.href='/';
}







