


function gameBoard(){

let slot=[]
for(i=0;i<9;i++){
    slot[i] = ""
}

function initialize(){
    but = document.getElementById("resetButton")
            but.innerHTML = ""

    table = document.getElementById("mainTable")
    table.innerHTML = ""
    for(i=0;i<9;i++){
        slot[i] = ""
    }
    buttons =[]
    cells = []
    j=0;
    row1 = document.createElement("tr")
    row2 = document.createElement("tr")
    row3 = document.createElement("tr")
    for(i =0; i<9; i++){
        buttons[i] = document.createElement("button")
        buttons[i].id = i
        buttons[i].innerHTML = "    "
        buttons[i].addEventListener("click", buttonOnClick)
        cells[i] = document.createElement("td")
        cells[i].appendChild(buttons[i])

    }
    for(i=0;i<3;i++){
        row1.appendChild(cells[i])
    }
    for(i=3;i<6;i++){
        row2.appendChild(cells[i])
    }
    for(i=6;i<9;i++){
        row3.appendChild(cells[i])
    }

table.appendChild(row1)
table.appendChild(row2)
table.appendChild(row3)

reset = document.createElement("button")
reset.innerHTML = "RESET"
reset.addEventListener("click",resetOnClick)
upper = document.getElementById("resetButton")
upper.appendChild(reset)
reset.id = "reset"

    control.updateDisplay()
}
function resetOnClick(event){
    console.log("resert")
control.reset()
}

function buttonOnClick(event){
console.log(this.id)
if(slot[this.id] == ""){
this.innerHTML = control.getTurn()
board.play(this.id)
}
}

function play(index){
    if(slot[index] == ""){
    slot[index] = control.getTurn()
    console.log("Played " +control.getTurn() +" at " + index)
    control.checkWin(board.slot)
    control.turnOver()
}
}




return{slot, play, initialize}
}



    function gameController(){

        let xScore =0
        let oScore =0
        let turn = Math.round(Math.random())
        console.log(turn)

        function getTurn(){
            if(turn == 0){
                return "x"
            }else{
                return "o"
            }

        }
        function updateDisplay(){
            turnDisplay = document.getElementById("turn")
            xname = document.getElementById("xInput")
            oname = document.getElementById("oInput")
            x = document.getElementById("xScore")
            x.innerHTML = (xname.value + "(X): " +xScore)
            o = document.getElementById("oScore")
            o.innerHTML = oname.value + "(O): " +oScore
            turnDisplay.innerHTML = getTurn()
        }

        function turnOver(){


            if(control.getTurn() == "x"){
                turn = 1
            }else{
                turn = 0
            }
            updateDisplay()
        }

        


        function checkWin(slot){
            console.log(slot[0] + slot[1] + slot[2])
            
            
            if(slot[0] == slot[1] && slot[0] == slot[2]){
                if(slot[0] != ""){gameWin(slot[0])}
            }
            if((slot[3] == slot[4] && slot[3] == slot[5])){
                if(slot[3] != ""){gameWin(slot[3])}
            }
            if(slot[6] == slot[7] && slot[6] == slot[8]){
                if(slot[6] != ""){gameWin(slot[6])}
            }

            if(slot[0] == slot[3] && slot[0] == slot[6]){
                if(slot[0] != ""){gameWin(slot[0])}
            }
            if(slot[1] == slot[4] && slot[1] == slot[7]){
                if(slot[1] != ""){gameWin(slot[1])}
            }
            if(slot[2] == slot[5] && slot[2] == slot[8]){
                if(slot[2] != ""){gameWin(slot[2])}
            }
            if(slot[0] == slot[4] && slot[0] == slot[8]){
                if(slot[0] != ""){gameWin(slot[0])}
            }
            if(slot[2] == slot[4] && slot[2] == slot[6]){
                if(slot[6] != ""){gameWin(slot[6])}
            }
            checkTie()

        
        }
        function checkTie(){
            mark = 0
            for(i =0; i<9;i++){
                if(board.slot[i] == ""){
                    console.log(board.slot[i])
                    mark =1
                }
            }
            if(mark == 0){
                console.log("Game Tie")
                lastGame = document.getElementById("lastGame")
                lastGame.innerHTML = ("Last Game Results: TIE ")
                board.initialize()
            }
        }

        function gameWin(winner){
            if(winner == "x"){
                xScore++
            }else{
                oScore++
            }
            lastGame = document.getElementById("lastGame")
                lastGame.innerHTML = ("Last Game Results: WINNER  -" + winner)
            board.initialize()
        }
        function reset(){
            xScore =0
            oScore =0
          
            
            
            updateDisplay()
            board.initialize()

        }
        return{getTurn,turnOver, checkWin,updateDisplay,reset}
}



board = gameBoard()
control = gameController()
board.initialize();


console.log(board.slot)





