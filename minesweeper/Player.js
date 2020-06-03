export default class Player {
  flagLocations = [];
  pickedBomb = false;

  constructor(bombLocations) {
    this.bombLocations = bombLocations;
    this.pickCell();
    this.addFlag();
  }

  pickCell() {
    const cells = document.getElementsByClassName("cell");
    for (let k = 0; k < cells.length; k++) {
      cells[k].addEventListener("click", event => {
        if (!this.pickedBomb) {
          let pickedCell = parseInt(event.target.id, 10);
          if (this.bombLocations.indexOf(pickedCell) > -1) {
            let bomb = document.createElement("div");
            bomb.className = "bomb";
            document.getElementById(String(pickedCell)).appendChild(bomb);
            this.pickedBomb = true;
          } else {
            this.floodBoard();
            console.log(this.bombLocations);
          }
        }
      });
    }
  }

  addFlag() {
    const cells = document.getElementsByClassName("cell");
    for (let k = 0; k < cells.length; k++) {
      cells[k].addEventListener("contextmenu", event => {
        event.preventDefault();
        console.log(event.target.id);
      });
    }
  }

  floodBoard() {
    console.log("time to flood the board");
  }
}
