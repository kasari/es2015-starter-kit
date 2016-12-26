import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Header from './header'
import Home from './home'
import Players from './players'
import Player from './player'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div>
          {this.props.children}
        </div>
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
