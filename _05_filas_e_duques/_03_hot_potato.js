import Queue from "./queue.js";

function hotPotato(elementList, num) {
    const queue = new Queue;

    for (let i = 0; i < elementList.length; i++) {
        queue.enqueue(elementList[i]);
    }

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }

        elementList.push(queue.dequeue());
    }

    return {
        eliminated: elementList,
        winner: queue.dequeue()
    }
}

const names = ['Karla', 'John', 'Jack', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);

result.eliminated.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato game.`);
});

console.log(`The winner is: ${result.winner}`)