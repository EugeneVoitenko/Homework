function Button(text, clickHandler) {
  this.target = document.querySelector('.content');
  this.btn = document.createElement('button');
  this.btn.className = 'btn';
  this.btn.textContent = text;
  this.btn.onclick = clickHandler; 
  this.target.append(this.btn);
}

export { Button };


