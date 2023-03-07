// url: https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/

// function solution1(X = 0, A = []) {
    
//     for (let idx = 0; idx < A.length; idx++) {
//         if (A[idx] === null) continue;
//         if (A[idx] > X) {
//             A[idx] = null;
//             continue;
//         }

//         for (let sIdx = idx + 1; sIdx < A.length; sIdx++) {
//             if (A[sIdx] === null) continue;
            
//             if (A[idx] === A[sIdx]) A[sIdx] = null;
//         }
//     }

//     const totalDistance = (X  * (X + 1)) / 2;

//     let distance = 0;
//     for (let idx = 0; idx < A.length; idx++) {
//         if (A[idx] === null) continue;
//         distance += A[idx];

//         if (distance === totalDistance) return idx;
//     }

//     return -1;
// }


function solution(X = 0, A = []) {
    const steps = Array(X + 1).fill(false);
    const totalDistance = (X  * (X + 1)) / 2;

    let distance = 0;
    for (let idx = 0; idx < A.length; idx++) {
        if (A[idx] > X) continue;

        if (!steps[A[idx]]) {
            steps[A[idx]] = true;
            distance += A[idx];
        }

        if (distance === totalDistance) return idx;
    }

    return -1;
}

solution(5, [1,3,1,4,2,3,5,4])