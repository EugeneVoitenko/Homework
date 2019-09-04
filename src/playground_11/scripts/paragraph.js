function promptText() {
  let text = prompt("Please enter paragraph text");
  while (text === "") {
    text = prompt("Please enter paragraph text");
  }
  if (text === null) {
    return;
  }
}

function Paragraph(paragraphText) {
  this.target = document.querySelector(".content");
  this.parag = document.createElement("div");
  this.parag.className = "paragraph";
  this.parag.innerHTML = paragraphText;
  this.target.append(this.parag);
}

export { promptText, Paragraph };
