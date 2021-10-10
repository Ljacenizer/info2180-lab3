/*var divsquare = document.querySelector('div').classList('.square');
divsquare.setAttribute('id', '.square');
*/
window.onload = function(){
    var divsquare = document.getElementById("board");
    for(let i=0; i<divsquare.children.length;i++){
        divsquare.children[i].setAttribute("class","square");
    }

}