function dungeonDark(arr) {

    let initialHealht = 100;
    let initialCoins = 0;
    let rooms = arr[0].split("|")
    let nrRoom = 0;

    for (let i = 0; i < rooms.length; i++) {
        let currentRoom = rooms[i].split(" ");
        let firstElement = currentRoom[0];
        let secondElement = Number(currentRoom[1]);
        nrRoom += 1

        if (firstElement == "potion") {
            initialHealht += secondElement
            if (initialHealht > 100) {
                initialHealht = 100
            }
            
            console.log(`You healed for ${secondElement} hp.`)
            console.log(`Current health: ${initialHealht} hp.`)

        } else if (firstElement == "chest") {
            initialCoins += secondElement
            console.log(`You found ${secondElement} coins.`)
        } else {
            initialHealht -= secondElement
            if (initialHealht > 0){
                console.log(`You slayed ${firstElement}.`)
            }else{
                console.log(`You died! Killed by ${firstElement}.`)
                console.log(`Best room: ${nrRoom}`)
                break
            }
        }
        if (nrRoom == rooms.length && initialHealht>0){
            console.log(`You´ve made it!`)
            console.log(`Coins: ${initialCoins}`)
            console.log(`Health; ${initialHealht}`)
        }
    }

}
dungeonDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
//dungeonDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])

