function maxSeq(arr){
    let letMost = []

    for (let i = 0; i < arr.length; i++){
        let currentNumber = arr[i];
        let bufferArr = []
        for (let j = i; j<arr.length; j++){
            let nextNum = arr[j]
            if (currentNumber == nextNum){
                bufferArr.push(currentNumber)
        
            }else{
                break
            }
        }if (letMost.length<bufferArr.length){
            letMost = bufferArr
        }    
    }
    console.log(letMost.join(" "))


}
maxSeq([1, 1, 1, 2, 3, 1, 3, 3])
maxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSeq([4, 4, 4, 4])
maxSeq([0, 1, 1, 5, 2, 2, 6, 3, 3])
