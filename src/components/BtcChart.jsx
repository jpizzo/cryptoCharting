import React from 'react';
import { Line } from 'react-chartjs-2';


class BtcChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      dataObj: {}
    }
    this.createData = this.createData.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.btcData !== prevProps.btcData) {
      this.setState({
        data: this.props.btcData,
        dataObj: this.createData(this.props.btcData) 
      })
    }
  }

  createData(data) {
    return {
      datasets: [{
        label: 'BTC',
        data: data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }],
      maintainAspectRatio: false
    }
  }

  render() {
    return (
      <div>
        <Line 
          data={this.state.dataObj} 
          height={100}
          width={400}
        />
      </div>
    )
  }
}

export default BtcChart;  