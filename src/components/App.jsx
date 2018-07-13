import React from 'react';
import axios from 'axios';
import BtcChart from './BtcChart';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.getCoindeskData = this.getCoindeskData.bind(this)
  }

  componentDidMount() {
    this.getCoindeskData();
    // let x = 10
    // while( x > 0){
    //   this.getCoindeskData()
    //   x -= 1;
    // }
    // this.timerId = setInterval(() => {
    //   this.getCoindeskData()
    // }, 1000);

  }

  componentWillunmount() {
    clearInterval(this.timerId);
  }

  getCoindeskData() {
    axios.get('/btcdata')
    .then((response) => {
      this.setState({
        data: this.state.data.concat([response.data.bpi['USD'].rate])
      })
    })
    .catch((error) => {
      console.error(error)
    })
  };

  render() {
    return (
      <div> 
        <BtcChart btcData={this.state.data}/>
      </div>
    )
  }
}

export default App;
