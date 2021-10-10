window.onload = function(){
    var divsquare = document.querySelectorAll("#board > div");
    var statusbar = document.getElementById("status");
    var newgame = document.querySelector(".btn");

    var currplayer = true;
    var playerX = "X";
    var playerO = "O";
    var wincon = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


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
            wincon.forEach((index)=> {
                if((divsquare[index[0]].innerHTML == playerX) && (divsquare[index[1]].innerHTML == playerX) && (divsquare[index[2]].innerHTML == playerX)){
                    statusbar.classList.add("you-won");
                    statusbar.innerHTML = ("Congratulations! X is the Winner!");

                    divsquare.forEach((sq)=>{
                        if (sq.innerHTML == ""){
                            sq.innerHTML = " ";
                        }
                    });
                }

                else if((divsquare[index[0]].innerHTML == playerO) && (divsquare[index[1]].innerHTML == playerO) && (divsquare[index[2]].innerHTML == playerO)){
                    statusbar.classList.add("you-won");
                    statusbar.innerHTML = ("Congratulations! O is the Winner!");

                    divsquare.forEach((sq)=>{
                        if (sq.innerHTML == ""){
                            sq.innerHTML = " ";
                        }
                    });
                }
            });
        });

        element.onmouseover = (event) =>{
            element.style.transition = "all .3s ease-in-out"
            element.classList.add("hover");
        }

        element.onmouseout = (event) =>{
            element.classList.remove("hover");
        }

        newgame.addEventListener("click", (event) => {
            location.reload();
        })
    });
}