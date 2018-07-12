import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.getCoindeskData();
  }

  getCoindeskData() {
    axios.get('/btcdata')
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  };

  render() {
    return (
      <div> Here is my starter page </div>
    )
  }
}

export default App;
