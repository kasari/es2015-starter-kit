import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Link, browserHistory} from 'react-router';

import Home from './home'
import Players from './players'
import Player from './player'

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to="/">home</Link></li>
              <li><Link to="/players">players</Link></li>
            </ul>
          </nav>
        </header>
        {this.props.children || <Home/>}
      </div>
    );
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="players" component={Players}/>
      <Route path="players/:playerId" component={Player}/>
    </Route>
  </Router>
), document.getElementById('root'));
