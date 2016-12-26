import React from 'react'
import {Link} from 'react-router'

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };

    fetch("http://localhost:8080/players")
      .then((response) => response.json())
      .then((json) => {
        console.dir(json);
        this.setState({
          players: json
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <h1>This is Players page!</h1>
        <ul>
          {
            this.state.players.map((player) => {
              return <li key={player.id}><Link to={`/players/${player.id}`}>{player.name}</Link></li>
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = Players;
