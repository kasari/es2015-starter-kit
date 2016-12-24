import React from 'react'
import {Link} from 'react-router'

class Players extends React.Component {
  render() {
    return (
      <div>
        <h1>This is Players page!</h1>
        <ul>
          <li><Link to="/players/39">player 39</Link></li>
          <li><Link to="/players/10000">player 10000</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

module.exports = Players;
