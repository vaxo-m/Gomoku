import React, { Component } from 'react';
import './App.css';
import Player from './player.js'
import PrintButtons from './button1.js';
class App extends Component {
  constructor() {
    super()
    this.state = {
      valueArray: [],

        player1 : {
          name: "Player1",
          score: 0,
          gameTime: 645,
          playTime: 45,
          playerValue: 'X'
        },
        player2 : {
          name: "Player2",
          score: 0,
          gameTime: 645,
          playTime: 45,
          playerValue: 'O'
        },
        activePlayer: true
    }
  }


  componentDidMount (){
    let helpArray = []
    for(let i=0; i<14; i++){
      helpArray[i] = []
      for(let j=0; j<14; j++){
        helpArray[i][j] = {
          value:"T"
        }
      }
    }
    this.playerTime()
    this.setState({
       valueArray : helpArray
     })
  }

  playerClick(btn) {
    console.log("playerclick");
    let currentplayer;
    const {player1, player2, activePlayer, valueArray} = this.state;
    console.log(player1, ' ', player2, ' ', activePlayer, ' ', valueArray);
    let helpArray = valueArray
    if(this.state.activePlayer){
      currentplayer = player1;
      helpArray[btn[0]][btn[1]].value="X";
      currentplayer.playTime = 45;
      this.setState({player1: currentplayer, valueArray:helpArray , activePlayer:!activePlayer})
      if(player1.playTime > player1.gameTime) {
        currentplayer.playTime = currentplayer.gameTime
        this.setState({player1: currentplayer})
      }
    }
    else{
      currentplayer= player2;
      helpArray[btn[0]][btn[1]].value="O"
      currentplayer.playTime = 45;
      this.setState({player2: currentplayer, valueArray:helpArray , activePlayer:!activePlayer})
      if(player2.playTime > player2.gameTime) {
        currentplayer.playTime = currentplayer.gameTime
        this.setState({player2 :currentplayer})
      }
    }
    this.checkWinner(helpArray, btn)
  }

  checkWinner(helpArray, btn){
    let counter = 1
    let countSimilarValues = 1
    let clickedBtnValue = helpArray[btn[0]][btn[1]].value
    // --------------- check vertical
    this.checkVerticalUTD(clickedBtnValue, btn, helpArray, counter, countSimilarValues)
    // --------------- check horizontal
    this.checkHorizontalLTR(clickedBtnValue, btn, helpArray, counter, countSimilarValues)
    // --------------- check top left diagonal
    this.checkTopLeftDiagonalDown(clickedBtnValue, btn, helpArray, counter, countSimilarValues)
    // --------------- check top right diagonal
    this.checkTopRightDiagonalDown(clickedBtnValue, btn, helpArray, counter, countSimilarValues)
  }

  // --------------------------------------vertical check start -------------------------------
  // ----------------- check from top to bottom
  checkVerticalUTD(clickedBtnValue, btn, helpArray, counter, countSimilarValues) {
    if(btn[0]+counter<14 && clickedBtnValue===helpArray[btn[0]+counter][btn[1]].value){
      counter ++
      countSimilarValues ++
      if (countSimilarValues === 5) {
        this.playerWins()
        // this.setState({
        //   valueArray : [],
        //   player : true,
        //   XStyle : {
        //     backgroundColor: "green"
        //   },
        //   buttonsArray : []
        // })
        return 0
      }
      this.checkVerticalUTD(clickedBtnValue, btn, helpArray, counter, countSimilarValues)
    }
    else {
      this.checkVerticalDTU(clickedBtnValue, btn, helpArray, 1, countSimilarValues)
    }
  }

  // ------------------- check from bottom to top
  checkVerticalDTU(clickedBtnValue, btn, helpArray, counter, countSimilarValues){
  if(btn[0]-counter>-1 && clickedBtnValue===helpArray[btn[0]-counter][btn[1]].value){
   counter ++
   countSimilarValues ++
   if (countSimilarValues === 5) {
     this.playerWins()
   }
   this.checkVerticalDTU(clickedBtnValue, btn, helpArray, counter, countSimilarValues)
  }
  }
  // --------------------------------------vertical check end -------------------------------

  // --------------------------------------horizontal check start -------------------------------
  // ----------------- check from left to right
  checkHorizontalLTR(clickedBtnValue, btn, helpArray, counter, countSimilarValues) {
  if(btn[1]+counter<14 && clickedBtnValue===helpArray[btn[0]][btn[1]+counter].value){
  counter ++
  countSimilarValues ++
    if (countSimilarValues === 5) {
      this.playerWins()
      return 0
    }
      this.checkHorizontalLTR(clickedBtnValue, btn, helpArray, counter, countSimilarValues)
  }
  else {

  this.checkHorizontalRTL(clickedBtnValue, btn, helpArray, 1, countSimilarValues)
  }
  }

  // ------------------- check from right to left
  checkHorizontalRTL(clickedBtnValue, btn, helpArray, counter, countSimilarValues){
  if(btn[1]-counter>-1 && clickedBtnValue===helpArray[btn[0]][btn[1]-counter].value){
   counter ++
   countSimilarValues ++
     if (countSimilarValues === 5) {
       this.playerWins()
     }
   this.checkHorizontalRTL(clickedBtnValue, btn, helpArray, counter, countSimilarValues)
  }
  }
  // --------------------------------------horizontal check end -------------------------------


  // --------------------------------------top left diagonal check start -------------------------------
  // ----------------- check from top left to bottom right
  checkTopLeftDiagonalDown(clickedBtnValue, btn, helpArray, counter, countSimilarValues) {
  if(btn[0]+counter<14 && btn[1]+counter<14 && clickedBtnValue===helpArray[btn[0]+counter][btn[1]+counter].value){
    counter ++
    countSimilarValues ++
    if (countSimilarValues === 5) {
      this.playerWins()
      return 0
    }
    this.checkTopLeftDiagonalDown(clickedBtnValue, btn, helpArray, counter, countSimilarValues)
  }

  else {

  this.checkBottomRightDiagonalUp(clickedBtnValue, btn, helpArray, 1, countSimilarValues)
  }
  }

  // ------------------- check from bottom right to top left
  checkBottomRightDiagonalUp(clickedBtnValue, btn, helpArray, counter, countSimilarValues){
  if(btn[0]-counter>-1 && btn[1]-counter>-1 && clickedBtnValue===helpArray[btn[0]-counter][btn[1]-counter].value){
   counter ++
   countSimilarValues ++
     if (countSimilarValues === 5) {
       this.playerWins()
     }
   this.checkBottomRightDiagonalUp(clickedBtnValue, btn, helpArray, counter, countSimilarValues)
  }
  }
  // --------------------------------------top left diagonal check end -------------------------------


  // --------------------------------------top right diagonal check start -------------------------------
  // ----------------- check from top right to bottom left
  checkTopRightDiagonalDown(clickedBtnValue, btn, helpArray, counter, countSimilarValues) {
  if(btn[0]+counter<14 && btn[1]-counter>-1 && clickedBtnValue===helpArray[btn[0]+counter][btn[1]-counter].value){
    counter ++
    countSimilarValues ++
    if (countSimilarValues === 5) {
      this.playerWins()
      return 0
    }
    this.checkTopRightDiagonalDown(clickedBtnValue, btn, helpArray, counter, countSimilarValues)
  }
  else {

  this.checkBottomLeftDiagonalUp(clickedBtnValue, btn, helpArray, 1, countSimilarValues)
  }
  }

  // ------------------- check from bottom left to top right
  checkBottomLeftDiagonalUp(clickedBtnValue, btn, helpArray, counter, countSimilarValues){
  if(btn[0]-counter>-1 && btn[1]+counter<14 && clickedBtnValue===helpArray[btn[0]-counter][btn[1]+counter].value){
   counter ++
   countSimilarValues ++
     if (countSimilarValues === 5) {
       this.playerWins()
     }
   this.checkBottomLeftDiagonalUp(clickedBtnValue, btn, helpArray, counter, countSimilarValues)
  }
  }
  // --------------------------------------top right diagonal check end -------------------------------


playerWins() {
  let currentplayer;
  if(this.state.activePlayer) {
    currentplayer = this.state.player1
    currentplayer.score++;
    console.log(currentplayer.name + " is winner");
    this.setState({player1: currentplayer})
  }
  else {
    currentplayer = this.state.player2
    currentplayer.score++;
    console.log(currentplayer.name + " is winner");
    this.setState({player2: currentplayer})
  }
}

printAllButton() {
  return this.state.valueArray.map((buttonValuesColumn, indexi) =>
    buttonValuesColumn.map((buttonValue, indexj) =>
      <PrintButtons buttonValue={buttonValue} btnIndex={[indexi, indexj]} key={[indexi, indexj]} playerClick = { this.playerClick.bind(this)}/>
    )
  )
}

playerTime() {
  let currentplayer;
  const interval = setInterval(() => {
      if(this.state.activePlayer) {
        currentplayer = this.state.player1;
        currentplayer.gameTime--;
        currentplayer.playTime--;
        this.setState({player1: currentplayer});
      }
      else{
        currentplayer = this.state.player2
        currentplayer.gameTime--;
        currentplayer.playTime--;
        this.setState({player2: currentplayer});
      }
      this.forceUpdate()
      return this.playTime
      if(3===5) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
}




render() {
  return (
    <div className="App">
      <div className="game-desk">
        <div className="buttons-container">{this.printAllButton()}</div>
        <div className="right-side-bar">
          <div className="players-section">
            <Player player={this.state.player1} />
            <Player player={this.state.player2} />
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
