
function findBeforeMatrix1(after) {
    const before = [];
    for (let i = 0; i < after.length; i++) {
      before[i] = [];
      for (let j = 0; j < after[i].length; j++) {
        if (i === 0 && j === 0) {
          before[i][j] = after[i][j];
        } else if (i === 0) {
          before[i][j] = after[i][j] - after[i][j - 1];
        } else if (j === 0) {
          before[i][j] = after[i][j] - after[i - 1][j];
        } else {
          before[i][j] = after[i][j] - after[i][j - 1] - after[i - 1][j] + after[i - 1][j - 1];
        }
      }
    }
    return before;
  }


  function findBeforeMatrix(after) {
    const before = [];
    for (let y = 0; y < after.length; y++) {
      before[y] = [];
      for (let x = 0; x < after[y].length; x++) {
        if (y === 0 && x === 0) {
          before[y][x] = after[y][x];
        } else if (y === 0) {
          before[y][x] = after[y][x] - after[y][x - 1];
        } else if (x === 0) {
          before[y][x] = after[y][x] - after[y - 1][x];
        } else {
          before[y][x] = after[y][x] - after[y][x - 1] - after[y - 1][x] + after[y - 1][x - 1];
        }
      }
    }
    return before;
  }


  

  // function getBefore = 

const data = [[2,5],[7,17]];
const res = findBeforeMatrix(data);
console.log(res);

// function before(before=[[2,3][5,7]], x, y) {
//     let s = 0;

//     for (let i = 0; i <= x; i++) {
//         for (j = 0; j <= y; j++) {
//             s += before(before, i, j);
//         }
//     }

//     after(x, y) = s; 
// }
// algorithm used to convert 'before matrix' to 'after matrix'. Write function to convert after matrix to before matrix
// let s = 0;

// for (let i = 0; i <= x; i++) {
//     for (j = 0; j <= y; j++) {
//         s += before(before, i, j);
//     }
// }

// after(x, y) = s; 

// example: [[2,3][5,7]] => [[2,5],[7,17]]

// where
// after(0,0)=before(0,0) = 2
// after(0,1)= before(0,0)+before(0,1)
// after(1,0)= before(0,0)+before(1,0)
// after(1,0)= before(0,0)+before(1,1)+before(1,0)+before(1,1)






// function minimumMoves(arr1 = [], arr2 = []) {
//     let count = 0;

//     for (let numIdx = 0; numIdx < arr1.length; numIdx++) {
//         const [arr1Num, arr2Num] = [arr1[numIdx], arr2[numIdx]];
//         const numDigitsCount = getDigitsCount(arr1Num);

//         for (let digitIdx = 0; digitIdx < numDigitsCount; digitIdx++) {
//             const [digit1, digit2] = [getNthDigit(arr1Num, digitIdx + 1), getNthDigit(arr2Num, digitIdx + 1)];
//             count += Math.abs(digit1 - digit2);
//         }
//     }

//     return count;
// }


// function getNthDigit(num, n) {
//     const a = Math.abs(num) / Math.pow(10, n - 1);
//     console.log(a);
//     return Math.floor(a) % 10;
// }

// function getDigitsCount(num) {
//     return Math.floor(Math.log10(Math.abs(num))) + 1;
// }

// const tt = getNthDigit(12345, 2); //getNthDigit(-123, 3);
// console.log(tt);



// function findBeforeMatrix(before=[[2,3][5,7]]) {
    
//     for (let y = 0; y < before.length; y++) {
//         for (let x = 0; x < before[y].length; x++) {
//             let s = 0;

//             for (let i = 0; i <= x; i++) {
//                 for (j = 0; j <= y; j++) {
//                     s +=
//                 }
//             }
//         }
//     }
// }

// function findBeforeMatrix(after=[[2,3][5,7]]) {
//     const before = [];

//     for (let y = 0; y < before.length; y++) {
//         for (let x = 0; x < before[y].length; x++) {
//             let s = 0;

//             for (let i = 0; i <= x; i++) {
//                 for (j = 0; j <= y; j++) {
//                     s +=
//                 }
//             }
//         }
//     }
// }
