const list = ["paper.png", "scissors.png","rock.png"]

const Paper = document.getElementById("paper")
const Scissors = document.getElementById("scissors")
const Rock = document.getElementById("rock")
const compSelect = document.getElementById("comp_select")
const Result = document.getElementById("result")




function MouseOver(x){
    x.style.height = "200px"
    x.style.width = "200px"
}

function MouseOut(x){
    x.style.height = "150px"
    x.style.width = "150px"
}

