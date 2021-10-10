window.onload = function(){
    var divsquare = document.querySelectorAll("#board > div");
    var currplayer = true;
    var playerX = "X";
    var playerO = "O";


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

        element.onmouseover = (event) =>{
            element.style.transition = "all .3s ease-in-out"
            element.classList.add("hover");
        }

        element.onmouseout = (event) =>{
            element.classList.remove("hover");
        }
    });
}