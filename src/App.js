import React, { Component } from 'react';
import './App.css';
import getData from './getData';

import { Button, Card, CardContent, Typography } from '@material-ui/core'

class App extends Component {
  state = {
    trivia: '',
    year: '',
  }

  handleClick = () => {
    getData().then((data) => {
      let realData = JSON.parse(data)
      this.setState({
        trivia: realData.text,
        year: realData.number
      })
      // JSON.parse() converts JSON to an object
      // console.log(JSON.parse(data))
      // console.log(realData.text)
    })
  }

  render() {
    return (
      <div className="app">
        <Typography variant="h2">Random Number Trivia Generator</Typography>
        <Card className="card">
          <CardContent>
            <Typography variant="h5">{this.state.trivia}</Typography>
            <Typography color="textSecondary">{this.state.year}</Typography>
            <hr />
            <Button className="margin-top" color="primary" variant="outlined" onClick={() => this.handleClick()}>Click for Quotes</Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default App;
