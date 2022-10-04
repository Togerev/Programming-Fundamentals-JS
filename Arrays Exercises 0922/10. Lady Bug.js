function ladyBug(arr) {
    let fieldSize = arr[0];
    let initialPositions = arr[1].split(" ")
    let arrCommands = arr.slice(2);

    let field = []

    for (let i = 0; i < fieldSize; i++) {
        field.push(0)
    }

    for (let i = 0; i < initialPositions.length; i++) {
        if (initialPositions < 0 || initialPositions > field.length){
            continue
        }else{
            field[initialPositions[i]] = 1;
        }
        
    }

    
    for (let i = 0; i < arrCommands.length; i++) {
        
        let command = arrCommands[i].split(" ")

        let pickedBug = Number(command[0]);

        let direction = command[1];

        let nrMoves = Number(command[2]);

        
        if (field[pickedBug] == 0){
            continue
        }else{
            field[pickedBug] = 0;
        }
        
        

        let newPosition = 0;

        if (direction == "right") {
            if (nrMoves < 0){
                direction = "left"
                nrMoves = Math.abs(nrMoves)
                newPosition = Number(pickedBug) - nrMoves
            }else{
                newPosition = Number(pickedBug) + nrMoves
            }


        }else if(direction == "left"){
            if (nrMoves<0){
                direction = "right"
                nrMoves = Math.abs(nrMoves)
                newPosition = Number(pickedBug) + nrMoves
            }else{
                newPosition = newPosition = Number(pickedBug) - nrMoves
            }
        }
        while ( field[newPosition] == 1){
            if (direction == "right"){
                newPosition += 1
            }else{
                newPosition -= 1
            }
            
        }
        if (newPosition <0 || newPosition > field.length-1) {
            continue
        }else{
            field[newPosition] = 1
        }
        


    }
    console.log(field.join(" "))

}
ladyBug( [ 5, '3',
'3 left 2',
'1 left -2'])
ladyBug([ 3, '0 1',
'0 right 1',
'2 right 1' ])
ladyBug([ 3, '0 1 2',
'0 right 1',
'1 right 1',
'2 right 1'])