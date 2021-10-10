window.onload = function(){
    var divsquare = document.querySelectorAll("#board > div");
    var currplayer = true;
    var playerX = "X";
    var playerO = "O";

    for(let i=0; i<=8; i++){
        divsquare[i].setAttribute("class","square");
        divsquare[i].innerHTML = "";
    }

    divsquare.forEach((element) =>{
        element.classList.add("square");
        element.innerHTML = "";
        element.addEventListener("click", function(){
            if ((currplayer == true) && (element.innerHTML == "")){
                element.innerHTML = playerX;
                element.classList.add("X");
                currplayer = false;
            }
            else if ((currplayer == false) && (element.innerHTML =="")){
                element.innerHTML = playerO;
                element.classList.add("O");
                currplayer = true;
            }
        });
    });
}