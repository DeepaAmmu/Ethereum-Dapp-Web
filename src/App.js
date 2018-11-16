import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import hearerimg from './healthcare.png'
let contractABI = JSON.parse(); //pass contract abi as a string
let contractAddress = ''; //assign contract address

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: '',
      patientName: '',
      patientId: '',
      content: '',
      getPatientId: ''
    }
    this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8541'));
    this.web3.eth.defaultAccount = this.web3.eth.accounts[0]
    this.patientContract = this.web3.eth.contract(contractABI).at(contractAddress);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleView = this.handleView.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit(event) {
    debugger;
    console.log(this.state.patientName, this.state.patientId, this.state.content);
    this.patientContract.addPatientDetails(this.state.patientName, this.state.patientId, this.state.content)
    
    alert('An Patient Details was submitted');
    this.setState({
      patientName : "",
      patientId : "",
     content : "",
    });
    
  }

  handleView(event)
  {
    debugger;
    var data = this.patientContract.getPatientDetails(this.state.getPatientId);
    console.log(this.state.getPatientId);
    if (this.web3) {
      this.setState({ patient: String(data) });
    }
    this.state.getPatientId = "";
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={hearerimg} alt="logo" className="App-header " />
      <table>
        <tr>
          <td>
          <div>
            <p>Submit Patient Report</p>
            <div>
              <label>Patient Name</label>
              <br />
              <input type="text" name="patientName" value={this.state.patientName} onChange={this.handleChange.bind(this)} />
            </div>
            <div>
              <label>Patient ID</label>
              <br />
              <input type="text" name="patientId" value={this.state.patientId} onChange={this.handleChange.bind(this)} />
            </div>
            <div>
              <label>Health Issue</label>
              <br />
              <textarea rows="4" cols="23" name="content" value={this.state.content} onChange={this.handleChange.bind(this)} />
            </div>
            <button type="submit" onClick={this.handleSubmit}>Submit</button>
          </div>
          </td>
          <td>
          <div>
            <p>View Patient Report</p>
            <div>
              <label>Patient Name</label>
              <br />
              <input type="text" name="getPatientId" value={this.state.getPatientId} onChange={this.handleChange.bind(this)} />
            </div>
            <button type="submit" onClick={this.handleView}>View</button>
            <h4>Health Issue: {this.state.patient}</h4>
          </div>
          </td>
        </tr>
      </table>
      
        </header>
      </div>
    );
  }
}

export default App;
