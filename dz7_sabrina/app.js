
class Start{
  constructor(player,computer){
    this.playerSelect = player
    this.computerSelect = computer
    this.winnerScore = [0,0]
  }
  get comp(){
    if (this.computerSelect < 4) {
      return  this.ComputerChoice = "Камень";
    } else if (this.computerSelect <=8 && this.computerSelect>4) {
      return this.ComputerChoice = "Бумага";
    } else if(this.computerSelect >8 && this.computerSelect<12) {
      return this.ComputerChoice = "Ножницы"
    }
    }
    get checkWinner() {
      if (this.playerSelect === "Камень" && this.ComputerChoice === "Бумага" || this.playerSelect === "Бумага" && this.ComputerChoice === "Ножницы" ||  this.playerSelect === "Ножницы" && this.ComputerChoice === "Камень") {
        return  this.winner="Компьютер";
      } else if (this.playerSelect === "Бумага" && this.ComputerChoice === "Камень" || this.playerSelect === "Ножницы" && this.ComputerChoice === "Бумага"|| this.playerSelect === "Камень" && this.ComputerChoice === "Ножницы") {
        return  this.winner="Игрок";
      }else if (this.playerSelect === "Бумага" && this.ComputerChoice === "Бумага" || this.playerSelect === "Камень" && this.ComputerChoice === "Камень"||  this.playerSelect === "Ножницы" && this.ComputerChoice === "Ножницы"){
        return this.winner="Ничья"
    }
}
  get win(){
    if (this.winner === "Игрок") {
      return this.winnerScore[0]=+1;
    }
    else if (this.winner === "Компьютер") {
      return this.winnerScore[1]=+1;
    }else {
      const w = this.winnerScore[0]=+1
      const s = this.winnerScore[1]=+1
      return this.winnerScore
    }
  }
}


const btnstart = document.querySelector('#Start')

var computerSelect = Math.floor(Math.random() * 12);

btnstart.onclick=()=>{
  StartGame(computerSelect)
}
function StartGame(computer){
    var start = new Start(prompt(),computer)
    start.comp
    alert('Комп выбрал: '+start.ComputerChoice)
    start.checkWinner
    alert('Выиграл: '+ start.winner)
    start.win
    alert('Счет: '+start.winnerScore)
    location.reload()
}