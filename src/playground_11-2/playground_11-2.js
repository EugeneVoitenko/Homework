import './playground_11-2.scss';
import { Button } from './scripts/button';
const test = [];

function showModal() {
    const str = prompt('Enter text');
    test.push(str);
}

const btn1 = new Button ('Hello', showModal);
console.log(btn1);