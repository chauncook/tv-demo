import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ManageShows from './Pages/ManageShows'
import ViewShows from './Pages/ViewShows'
import './App.css';

class App extends Component {
  state = {
    shows: [
      {
        name: 'Sons of Anarchy',
        rating: 5,
        previewImage: 'https://images5.alphacoders.com/300/thumb-350-300095.jpg'
      }
    ]
  }

  createShow = (show) => {
    this.setState((previousState) => {
      const existingShows = previousState.shows
      existingShows.push(show)
      return {
        shows: existingShows
      }
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={() => <ViewShows allShows={this.state.shows} />} />
            <Route path="/manageShows" component={() => <ManageShows allShows={this.state.shows} createShow={this.createShow} />} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
