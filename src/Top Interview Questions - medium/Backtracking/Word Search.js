// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/109/backtracking/797/

// var exist = function(board=[['a']], word='a') {
//     const wordCharsSet = new Set(word);
//     const visitedRoute = new Map();

//     const visitBoard = (board=[['a']], word='a', x = -1, y = -1, wordOffset = 0) => {
//         if (wordOffset === wordOffset.length) return true;
//         if (board[y][x] !== word[wordOffset]) return false;
    
//         for (let dy = 0; dy <= 1; dy++) {
//             for (let dx = 0; dx <= 1; dx++) {
//                 if ()

//                 visitedRoute.set(y, x)

//                 if (dx === 0 && dy === 0) continue;
            
//                 if (visitBoard(board, word, x + dx, y + dy, wordOffset)) {
//                     return true;
//                 }
//             }
//         }
    
//         return false;
//     }

//     for (let y = 0; y < board.length; y++) {
//         for (let x = 0; x < board[y].length; x++) {
//             if (word.includes(board[y][x])) {
//                 visitBoard(board, word, x, y, 0)
//             }
//         }
//     }


// };



// var exist1 = function(board=[['a']], word='a') {
//     const charIndexesMap = new Map();
//     for (let i = 0; i < word.length; i++) {
//         if (charIndexesMap.has(word[i])) charIndexesMap.set(word[i], []);
//         charIndexesMap.get(word[i]).push(i)
//     }

//     const visitTillEnd = (x = 0, y = 0, wordOffset = 0, direction = 0) => {
//         if (wordOffset === 0 || wordOffset === word.length) return true;
    
//         for (let dy = 0; dy <= 1; dy++) {
//             for (let dx = 0; dx <= 1; dx++) {

//                 visitedRoute.set(y, x)

//                 if (dx === 0 && dy === 0) continue;
            
//                 if (visitTillEnd(board, word, x + dx, y + dy, wordOffset)) {
//                     return true;
//                 }
//             }
//         }
    
//         return false;
//     }

//     for (let y = 0; y < board.length; y++) {
//         for (let x = 0; x < board[y].length; x++) {
//             for (let idx of charIndexesMap.get(board[y][x]) || []) {
//                 if (visitTillEnd(x, y, idx - 1, -1) && visitTillEnd(x, y, idx, 1)) {
//                     return true;
//                 }
                
//             }
//         }
//     }

//     return false;
// };

var exist = function(board=[['A']], word='A') {
    const wordChars = [...word];

    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
            if (trackWordChar(board, wordChars, y, x, 0)) return true;
        }
    }

    return false;
};

const trackWordChar = (board, wordChars, y, x, charOffest) => {
    if (y >= board.length || y < 0 || x >= board[y].length || x < 0) return false;
    if (board[y][x] !== wordChars[charOffest]) return false;
    if (charOffest + 1 === wordChars.length) return true;
    
    board[y][x] = null;

    const haveNextChars =
           trackWordChar(board, wordChars, y, x + 1, charOffest + 1)
        || trackWordChar(board, wordChars, y, x - 1, charOffest + 1)
        || trackWordChar(board, wordChars, y + 1, x, charOffest + 1)
        || trackWordChar(board, wordChars, y - 1, x, charOffest + 1);

    board[y][x] = wordChars[charOffest];

    return haveNextChars;
}


exist([
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]],
    "ABCCED");