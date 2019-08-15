function Paragraph() {

  let paragraphText = prompt('Please enter paragraph text');
  while (paragraphText === '') {
    paragraphText = prompt('Please enter paragraph text');
  }
  if (paragraphText === null) {
    return;
  }

  this.target = document.querySelector('.content');
  this.parag = document.createElement('div');
  this.parag.className = 'paragraph';
  this.parag.innerHTML = paragraphText;
  this.target.append(this.parag);
}

export { Paragraph };