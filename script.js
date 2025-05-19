


function gameBoard(){

let slot=[]
for(i=0;i<9;i++){
    slot[i] = ""
}

function playX(index){
    slot[index] = "x"
    console.log("Played x at " + index)
}

function playO(index){
    slot[index] = "o"
    console.log("Played o at " + index)
}


return{slot, playX, playO}
}



    function gameController(){


        let test = 4


        function checkWin(slot){
            console.log(slot[0] + slot[1] + slot[2])
            
            
            if(slot[0] == slot[1] && slot[0] == slot[2]){
                if(slot[0] != ""){gameWin(slot[0])}
            }
            if((slot[3] == slot[4] && slot[3] == slot[5])){

            }
            if(slot[6] == slot[7] && slot[6] == slot[8]){

            }
        
        }

        function gameWin(winner){
            console.log("Winner is: " + winner)
        }
        return{checkWin}
}



board = gameBoard()
control = gameController()

board.playX(2)
board.playO(5)
board.playX(0)
board.playX(1)

console.log(board.slot)

control.checkWin(board.slot)



