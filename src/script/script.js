function btnClicked() {
    document.getElementById("main-body").hidden = true;
    document.getElementById("rolled-page").hidden = false;
    let option = [1,2,3,4,5,6];
    document.getElementById("rolled-display").innerHTML = option[Math.floor(Math.random()*option.length)];
}

function reroll() {
    btnClicked();
}

function cancelRoll() {
    document.getElementById("main-body").hidden = false;
    document.getElementById("rolled-page").hidden = true;
}
