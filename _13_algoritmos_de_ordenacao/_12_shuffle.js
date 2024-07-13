import { swap } from '../utils.js';

function shuffle(array) {
    for (let i = array.length - i; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        swap(array, i, randomIndex);
    }
    return array;
}