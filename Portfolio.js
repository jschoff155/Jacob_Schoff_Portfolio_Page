function showHome() {
    document.getElementById("homeArea").style.display="block";
    document.getElementById("portfolio").style.display="none";
    document.getElementById("aboutMe").style.display="none";
    document.getElementById("navButtonHome").style.background="#E9B44C";
    document.getElementById("navButtonPortfolio").style.background="#7D8CC4";
    document.getElementById("navButtonAbout").style.background="#7D8CC4";

}
function showPortfolio() {
    document.getElementById("homeArea").style.display="none";
    document.getElementById("portfolio").style.display="block";
    document.getElementById("aboutMe").style.display="none";
    document.getElementById("navButtonHome").style.background="#7D8CC4";
    document.getElementById("navButtonPortfolio").style.background="#E9B44C";
    document.getElementById("navButtonAbout").style.background="#7D8CC4";
}
function showAbout() {
    document.getElementById("homeArea").style.display="none";
    document.getElementById("portfolio").style.display="none";
    document.getElementById("aboutMe").style.display="block";
    document.getElementById("navButtonHome").style.background="#7D8CC4";
    document.getElementById("navButtonPortfolio").style.background="#7D8CC4";
    document.getElementById("navButtonAbout").style.background="#E9B44C";
}

function gotoRicos(){
    location.href= "https://ricostacos.netlify.app/";
}
function gotoColorChanger(){
    location.href= "https://jacobschoffcolorchanger.netlify.app/";
}
function gotoSubZero(){
    location.href= "https://subzeromobiledetailing.com/";
}
    