import React from 'react'

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      name: undefined,
      email: undefined
    };

    let playerId = props.params.playerId;
    fetch(`http://localhost:8080/players/${playerId}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <h2>Player Info</h2>
        <PlayerInfo playerInfo={this.state}/>
      </div>
    )
  }
}

class PlayerInfo extends React.Component {
  render() {
    return (
      <ul>
        <li>ID: {this.props.playerInfo.id}</li>
        <li>Name: {this.props.playerInfo.name}</li>
        <li>Email: {this.props.playerInfo.email}</li>
      </ul>
    )
  }
}

module.exports = Player;
