function showAttribution() {
    document.getElementById("attributionArea").style.display="block";
    document.getElementById("attributionareaclosebtn").style.display="block";
    document.getElementById("attributionareabtn").style.display="none";
}
function closeAttribution() {
    document.getElementById("attributionArea").style.display="none";
    document.getElementById("attributionareaclosebtn").style.display="none";
    document.getElementById("attributionareabtn").style.display="block";
}
function menuClick() {
    document.getElementById("navMenuMobile").style.display="block";
    document.getElementById("menuButton").style.display="none";
}
function menuClose() {
    document.getElementById("navMenuMobile").style.display="none";
    document.getElementById("menuButton").style.display="block";
}
function showCompetencies() {
    document.getElementById("eduButton").style.display="none";
    document.getElementById("courseCompetencies").style.display="block";
    document.getElementById("educloseButton").style.display="block";
}
function closeCompetencies() {
    document.getElementById("eduButton").style.display="block";
    document.getElementById("courseCompetencies").style.display="none";
    document.getElementById("educloseButton").style.display="none";
}
function gotoRicos(){
    location.href= "https://ricostacos.netlify.app/";
}
function gotoCheeseWheels(){
    location.href= "https://cheesewheelsbeta.netlify.app/";
}
function gotoSubZero(){
    location.href= "https://subzerodetailing.netlify.app/";
}
    