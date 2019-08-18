function Button(text, clickHandler) {
    this.target = document.querySelector('body');

    this.btn = document.createElement('button');
    this.btn.classList.add('btn');
    this.btn.textContent = text;
    this.btn.onclick = clickHandler;
    
    this.target.appendChild(this.btn);
}

export { Button };
