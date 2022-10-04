function addSubstract(arr) {

    let modified = []
    let sumOriginal = 0
    let sumModified = 0
    for (let num of arr) {
        modified.push(num)
        sumOriginal += Number(num)
    }
    for (let i = 0; i < modified.length; i++) {
        if (modified[i] % 2 == 0) {
            modified[i] += i
        } else {
            modified[i] -= i
        }
        sumModified += modified[i]
    }
    console.log(modified)
    console.log(sumOriginal)
    console.log(sumModified)
}
addSubstract([5, 15, 23, 56, 35])
addSubstract([-5, 11, 3, 0, 2])