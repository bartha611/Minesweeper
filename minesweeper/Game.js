import { settings } from "./settings";
import Bomb from "./Bomb";
import Player from "./Player";

export default class Game {
  time = 0;
  setting = "easy";
  mines = settings[this.setting].mines;
  rows = settings[this.setting].rows;
  columns = settings[this.setting].columns;
  totalCells = this.rows * this.columns;
  interval;

  constructor() {
    this.bombLocations = new Bomb(settings["easy"]).bombLocations;
    this.changeSettings();
    this.createBoard();
    new Player(this.bombLocations);
  }

  addTime() {
    this.time += 1;
    document.getElementById("time").innerHTML = this.time;
  }

  reset() {
    clearInterval(this.interval);
    this.time = 0;
    this.totalCells = this.rows * this.columns;
  }

  createBoard() {
    const board = document.getElementById("board");
    for (let i = 0; i < this.rows; i++) {
      let row = document.createElement("div");
      row.className = "row";
      for (let k = 0; k < this.columns; k++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.id = String(i * this.columns + k);
        row.appendChild(cell);
      }
      board.appendChild(row);
    }
  }

  changeSettings() {
    clearInterval(this.interval);
    const changeSettings = document.getElementsByClassName("setting");
    for (let i = 0; i < changeSettings.length; i++) {
      changeSettings[i].addEventListener("click", event => {
        this.setting = event.target.id;
        Object.keys(settings[this.setting]).forEach(key => {
          this[key] = settings[this.setting][key];
          this.reset();
        });
      });
    }
  }
}

new Game();
