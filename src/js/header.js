import React from 'react'
import {Link} from 'react-router'

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/players">players</Link></li>
          </ul>
        </nav>
      </header>
    )
  };
}

module.exports = Header;
