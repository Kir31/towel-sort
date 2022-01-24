// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = []
    if (matrix === undefined) {
        return arr
    } else {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                let n = i % 2 === 0 ? j : matrix[i].length - 1 - j
                arr.push(matrix[i][n])
            }
        }
        return arr
    }
}

// towelSort ([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ])
