function rotation(arr, n) {

    for (let i = 0; i < n; i++) {
        let element = arr.shift()
        arr.push(element)
    }
    console.log(arr.join(" "))
}
rotation([51, 47, 32, 61, 21], 2 )
rotation([32, 21, 61, 1], 4)
rotation([2, 4, 15, 31], 5)