function maxNumber(arr) {
    let netSeq = []

    for (let i = 0; i < arr.length; i++) {
        let firstNum = arr[i];
        let isBigger = true

        for (let j = i + 1; j < arr.length; j++) {
            let nextNumber = arr[j]
            if (firstNum <= nextNumber) {
                isBigger = false
                break
            }
        }
        if (isBigger) {
            netSeq.push(firstNum)
        }

    }
    console.log(netSeq.join(" "))


}
maxNumber([41,
    41,
    34,
    20])