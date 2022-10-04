function eqaulSums(arr) {
    let isEqual = false

    for (let i = 0; i < arr.length; i++){
        let sumLeft = 0;
        let sumRight = 0;

        if (i!==0){
            for(let j = 0; j<i;j++){
                sumLeft += arr[j]
            }
        }if (i !== arr.length){
            for ( let r = i +1; r<arr.length; r++){
                sumRight += arr[r]
            }
        }
        if(sumLeft==sumRight){
            isEqual = true
            console.log(i)
        }
    }
}
//eqaulSums([1, 2, 3, 3])
eqaulSums([10, 5, 5, 99,
    3, 4, 2, 5, 1,
    1, 4])
eqaulSums([1, 2, 3, 3])