


function gameBoard(){

let slot=[]
for(i=0;i<9;i++){
    slot[i] = ""
}

function initialize(){
    table = document.getElementById("mainTable")
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
    
}

function buttonOnClick(event){
console.log(this.id)
this.innerHTML = control.getTurn()
board.play(this.id)
}

function play(index){
    slot[index] = control.getTurn()
    console.log("Played " +control.getTurn() +" at " + index)
    control.checkWin(board.slot)
    control.turnOver()
}




return{slot, play, initialize}
}



    function gameController(){


        let turn = Math.round(Math.random())
        console.log(turn)

        function getTurn(){
            if(turn == 0){
                return "x"
            }else{
                return "o"
            }

        }

        function turnOver(){

            if(control.getTurn() == "x"){
                turn = 1
            }else{
                turn = 0
            }
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
        
        }

        function gameWin(winner){
            console.log("Winner is: " + winner)
        }
        return{getTurn,turnOver, checkWin}
}



board = gameBoard()
control = gameController()
board.initialize();


console.log(board.slot)





