function promptText() {
    let paragraphText = prompt('Введите текст параграфа');
    while (paragraphText === '') {
        paragraphText = prompt('Введите текст параграфа');
    }
    if (paragraphText === null) {
        return;
    }
    return paragraphText;
}

export { promptText };