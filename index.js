const targetDiv = document.querySelector('.menubar-content-lg-right');
const menuStyle = document.querySelector('.nav-bar-laptop');
const btn = document.querySelector('.menu-button');
const closeBtn = document.querySelector('.btn-close');


btn.onclick = function() {
    if(targetDiv.style.display !== "none"){
        targetDiv.style.display = "none";
        menuStyle.style.justifyContent = "flex-start";
    } 
    else {
        targetDiv.style.display = "flex";
    }
};

closeBtn.onclick = function() {
    targetDiv.style.display = "flex";
};


