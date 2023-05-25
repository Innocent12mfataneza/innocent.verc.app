var clickable = document.getElementById("clickable");
var icon = document.getElementById("icon");
var menu = document.getElementById("menu");
menu.style.right ="-300px";
clickable.onclick = function()
{
    console.log("clicked");
    if(menu.style.right == "-300px"){
        menu.style.right ="0";
        icon.src ="close.png";
    }
    else{
        menu.style.right ="-300px";
        icon.src ="bars2.png";
    }
}