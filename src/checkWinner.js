import React, { Component } from 'react';

class CheckWinner extends Component {


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

}

export default CheckWinner;
