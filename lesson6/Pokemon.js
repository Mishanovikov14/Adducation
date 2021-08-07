class Pokemon {
  constructor(name, height, weight, id, url) {
    this.name = name,
    this.height = height,
    this.weight = weight,
    this.id = id,
    this.url = url
  }

  render = () => {
    const block = document.createElement("div");

    block.innerHTML = `
      <div class="wrapper" data-url="${this.url}">
        <h2 class="name" data-url="${this.url}">Name: ${this.name}</h2>
        <img class="pokemon" src="${this.url}" data-url="${this.url}" alt="pokemon">
        <div id="${this.url}" class="description hide" data-url="${this.url}">
          <div data-url="${this.url}">ID: ${this.id}</div>
          <div data-url="${this.url}">Height: ${this.height}</div>
          <div data-url="${this.url}">Weight: ${this.weight}</div>
        </div>
      </div>
    `;

    block.style.width = "25%";

    dataRow.appendChild(block);
  }
}

export default Pokemon;
