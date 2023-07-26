// callbacks
function fetch(callback) {
    setTimeout(() => {
        const data = { name: 'Gowri Shankar', age: 20 };
        callback(data);
    }, 1000);
}

function processData(data) {
    console.log(data);
}

fetch(processData);

console.log("Hello");

// promises
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = { name: "John", age: 30 };
            resolve(data);
        }, 1000);
    });
}

function processData(data) {
    console.log("Processing data:", data);
}

fetchData().then(processData);
console.log("Other tasks can continue here while waiting for data...");

// handling reject
let promise = new Promise((resolve, reject) => {
    let x = "Gowri Shankar";
    let y = "Gowri Shankar"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});
 
promise.
    then(function () {
        console.log('Success, You are a GEEK');
    }).
    catch(function () {
        console.log('Some error has occurred');
    });

// async await

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = { name: "Gowri Shankar", age: 20 };
            resolve(data);
        }, 1000);
    })
}

async function processedData(){
    const data = await fetchData();
    console.log(data);
}

processedData();

console.log("Others will be executed");