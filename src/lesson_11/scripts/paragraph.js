function Paragraph () {
  let paragraphText = prompt('Введите текст параграфа');
  while (paragraphText == '') {
    paragraphText = prompt('Необходимо ввести текст');
  }
  this.target = document.querySelector('.content');
  this.parag = document.createElement('div');
  this.parag.className = 'paragraph';
  this.parag.innerHTML = paragraphText;
  this.target.append(this.parag);
}

export { Paragraph };
