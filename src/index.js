import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

export default class Index extends React.Component {
  state = {
    covid: []
  }

  componentDidMount() {
    axios.get(`https://covid-19.dataflowkit.com/v1`)
      .then(res => {
        const covid = res.data;
        this.setState({ covid });
      })
  }

  render() {
    return (
      <React.Fragment>
        <h1>COVID-19 live statistics per hour</h1>
        <table>
          <tr>
            <th>Country</th>
            <th>Active Cases</th>
            <th>Last Update</th>
            <th>New Cases</th>
            <th>New Deaths</th>
            <th>Total Cases</th>
            <th>Total Deaths</th>
            <th>Total Recovered</th>
          </tr>
          {this.state.covid.map(covid =>
            <React.Fragment>
              <tr>
                <td>{covid['Country_text']}</td>
                <td>{covid['Active Cases_text']}</td>
                <td>{covid['Last Update']}</td>
                <td>{covid['New Cases_text']}</td>
                <td>{covid['New Deaths_text']}</td>
                <td>{covid['Total Cases_text']}</td>
                <td>{covid['Total Deaths_text']}</td>
                <td>{covid['Total Recovered_text']}</td>
              </tr>
            </React.Fragment>
          )}
        </table>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Index></Index>, document.getElementById('root'));