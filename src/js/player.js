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
        <ul>
          <li>ID: {this.state.id}</li>
          <li>Name: {this.state.name}</li>
          <li>Email: {this.state.email}</li>
        </ul>
      </div>
    )
  }
}

module.exports = Player;
