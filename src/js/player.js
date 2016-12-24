import React from 'react'

class Player extends React.Component {
  render() {
    return (
      <div>
        <h2>Player</h2>
        <p>PlayerID: {this.props.params.playerId}</p>
      </div>
    )
  }
}

module.exports = Player;
