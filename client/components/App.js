import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
 
import SongList from './SongList';

 
class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={SongList} />
          <Route component={SongList} />
        </Switch>
      </div>
    );
  }
}
 
export default App;