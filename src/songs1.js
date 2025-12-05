console.log('Lets write javascript');

async function main() {

    let a = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let b = await a.json();
    console.log(b);
}