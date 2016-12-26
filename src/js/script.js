import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

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
        {this.props.children}
      </div>
    );
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="players" component={Players}/>
      <Route path="players/:playerId" component={Player}/>
    </Route>
  </Router>
), document.getElementById('root'));
