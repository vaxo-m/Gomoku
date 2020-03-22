import React, { Component } from 'react';

class Player extends Component {



  render(){
    const {player} = this.props.
    return (
      <div className="player">
        <div className="name">
          {player.name}
        </div>
        <div className="time">
          {Math.floor(player.gameTime/60)}{":"}{player.gameTime%60}
          <p>{player.playTime}</p>
        </div>
        <div className="score">
          {player.score}
        </div>
      </div>
    )
  }
}

export default Player;
