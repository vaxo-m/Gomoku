import React, { Component } from 'react';

class Button extends Component {

  printBoxes(){
    let XStyle = {
      backgroundColor:"green"
    }
    let OStyle = {
      backgroundColor:"red"
    }
    let unclickedStyle = {
      backgroundColor: "#bbb"
    }
    const buttons = []
    for(let i=0; i<this.props.valueArray.length; i++ ){
      for(let j=0; j<this.props.valueArray.length; j++ ){
        if(this.props.valueArray[i][j].value==="O"){
          buttons.push(<button key={[i, j]} style={OStyle}>O</button>)
        }
        // if(this.props.valueArray[i][j].value==="T"){
        //   buttons.push(<button key={[i, j]} onClick={ () => this.props.playerClick([i,j])} style={unclickedStyle}></button>)
        // }
        if(this.props.valueArray[i][j].value==="X"){
          buttons.push(<button key={[i, j]} style={XStyle}>X</button>)
        }
        else {
          buttons.push(<button key={[i, j]} onClick={ () => this.props.playerClick([i,j])} style={unclickedStyle}></button>)
        }
      }
    }
    return buttons
  }
  render(){
    // this.fillButtonsArray()
    console.log(this.props.valueArray);
    return (
      <div className="buttons-container">
        {this.printBoxes()}
      </div>
    )
  }
}

export default Button;
