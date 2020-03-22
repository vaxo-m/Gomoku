import React, { Component } from 'react';

class InputPlayers extends Component {

  printCurrentButton() {
    let XStyle = {
      backgroundColor:"green"
    }
    let OStyle = {
      backgroundColor:"red"
    }
    let unclickedStyle = {
      backgroundColor: "#bbb"
    }

    if (this.props.buttonValue.value === "T") {
      return <button onClick={ () => this.props.playerClick(this.props.btnIndex)} style={unclickedStyle}></button>
    }
    if (this.props.buttonValue.value === "X") {
      return <button style={XStyle}>X</button>
    }
    if (this.props.buttonValue.value === "O") {
      return <button style={OStyle}>O</button>
    }
  }

  render(){
    return (
      <div className="current-button">{this.printCurrentButton()}</div>
    )
  }
}

export default InputPlayers;
