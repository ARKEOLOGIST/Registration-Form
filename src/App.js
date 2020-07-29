import React from 'react';
import './App.css';

class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      name: "",
      address: "",
      phone: "",
      identity: "",
      reason: "none",
      error: "",
    };
  }

  handleSubmit = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        address: this.state.address,
        phone_number: parseInt(this.state.phone),
        identity: parseInt(this.state.identity),
        reason: this.state.reason
      })
  };
  fetch('https://loangrow-backend.herokuapp.com/registration', requestOptions).then(res => res.json())
  .then(data => {if (data.hasOwnProperty('message')) {this.setState({error: "Submission failed"})} else {this.setState({error: "Submission successful"})}});
  this.setState({
    name: "",
    address: "",
    phone: "",
    identity: "",
    reason: "none"
  });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render()
  {
  return (
    <div className="wrapper">
    <div className="title">
      Registration Form
    </div>
    <div className="form">
       <div className="inputfield">
          <label>Name</label>
          <input name="name" value={this.state.name} type="text" className="input"  onChange={this.handleChange}/>
       </div>  
        <div className="inputfield">
          <label>Reason</label>
          <div className="custom_select">
            <select value={this.state.reason} name="reason" onChange={this.handleChange}>
              <option value="none">None</option>
              <option value="looking for an internship">Looking for an internship</option>
              <option value="adding a new skill">Adding a new skill</option>
              <option value="for doing coursework">For doing coursework</option>
              <option value="for getting more marks">For getting more marks</option>
            </select>
          </div>
       </div> 
      <div className="inputfield">
          <label>Phone Number</label>
          <input name="phone" value={this.state.phone} type="text" className="input"  onChange={this.handleChange}/>
       </div> 
       <div className="inputfield">
          <label>Identity</label>
          <input name="identity" value={this.state.identity} type="text" className="input"  onChange={this.handleChange}/>
       </div> 
      <div className="inputfield">
          <label>Address</label>
          <textarea name="address" value={this.state.address} className="textarea" onChange={this.handleChange}></textarea>
       </div> 
      <div className="inputfield">
        <input type="submit" value="Submit" className="btn" onClick={this.handleSubmit}/>
      </div>
    </div>
    {this.state.error==="Submission failed"?<div style={{color: "red"}}>Submission failed!</div>:this.state.error==="Submission successful"?<div style={{color: "green"}}>Submission successful</div>:null}
</div>
  );
}
}

export default App;
