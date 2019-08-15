import { Paragraph } from "../../lesson_11/scripts/paragraph";

function promptText() {
    let text = prompt('Введите текст параграфа');
    while (text === '') {
        text = prompt('Введите текст параграфа');
    }
    if (text === null) {
        return;
    }
    console.log(text);
    Paragraph(text);
}

export { promptText };