const fibonacciSequence = document.getElementById("fibonacciSequence");

function fibonacciAfterFirstNums(prevPrev, prev, length) {
    let current = prevPrev + prev;
    if (length > 0) {
        fibonacciSequence.textContent += `,${current}`
        fibonacciAfterFirstNums(prev, current, length - 1);
    }
}

function fibonacci(length) {
    fibonacciSequence.textContent = `0,1`;
    fibonacciAfterFirstNums(0, 1, length - 2);
}
