const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.onclick = function () {
    const number = Number(input.value);

    // First Promise - 2 seconds
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(number);
        }, 2000);
    })
    .then((num) => {
        output.innerText = `Result: ${num}`;

        // Second Promise - 1 second
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(num * 2);
            }, 1000);
        });
    })
    .then((num) => {
        output.innerText = `Result: ${num}`;

        // Third Promise - 1 second
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(num - 3);
            }, 1000);
        });
    })
    .then((num) => {
        output.innerText = `Result: ${num}`;

        // Fourth Promise - 1 second
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(num / 2);
            }, 1000);
        });
    })
    .then((num) => {
        output.innerText = `Result: ${num}`;

        // Fifth Promise - 1 second
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(num + 10);
            }, 1000);
        });
    })
    .then((num) => {
        output.innerText = `Final Result: ${num}`;
    });
};