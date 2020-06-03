export default class Bomb {
  bombLocations = [];
  constructor({ mines, rows, columns }) {
    this.totalCells = rows * columns;
    this.mines = mines;
    this.generateBombs();
  }
  generateBombs() {
    let total = 0;
    while (total < this.mines) {
      let cell = Math.floor(Math.random() * this.totalCells);
      if (this.bombLocations.indexOf(cell) > -1) {
        continue;
      } else {
        this.bombLocations.push(cell);
        total += 1;
      }
    }
  }
}
