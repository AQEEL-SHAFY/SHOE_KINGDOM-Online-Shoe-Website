//function for the tabs
$(function() {
    $("#tabs").tabs();
});
//function to drag and drop
function allowDrop(ev) {
    ev.preventDefault();

}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    document.getElementById("Drag").style.display = "block";

}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    document.getElementById("Drag").style.display = "none";
    alert("Shoe Added To Favourites");
}

function show() {
    document.getElementById("shoeCard1").style.display = "none";
    document.getElementById("shoeCard2").style.display = "none";
}