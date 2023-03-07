// url: https://app.codility.com/demo/results/training7Q3HVE-KZ6/#

function solution(A) {
    const set = new Set();
    let count = A.length;

    for(let num of A) {
        if (set.has(num)) count--;
        else set.add(num);
    }

    return count;
}