function promptText() {
  let text = prompt('Введите текст параграфа');
  while (text === '') {
    text = prompt('Введите текст параграфа');
  }
  if (text === null) {
    return text;
  }
  
  Paragraph(text);
}

function Paragraph(paragraphText) {

  this.target = document.querySelector('.content');
  this.parag = document.createElement('div');
  this.parag.className = 'paragraph';
  this.parag.innerHTML = paragraphText;
  this.target.append(this.parag);
}

export { promptText, Paragraph };