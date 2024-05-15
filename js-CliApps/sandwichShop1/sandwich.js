class Sandwich {
    #bun;
    #meat;
    #vegetables;
    #cheese;
    constructor(bun, meat, vegetables, cheese) {
      this.#bun = bun;
      this.#meat = meat;
      this.#vegetables = vegetables;
      this.#cheese = cheese;
    }
  
    get bun() {
      return this.#bun;
    }
  