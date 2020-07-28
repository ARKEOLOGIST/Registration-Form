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
      reason: ""
    };
  }

  handleSubmit = () => {
    this.setState({phone: parseInt(this.state.phone),
                   identity: parseInt(this.state.identity)});
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: this.state
  };
  fetch('https://loangrow-backend.herokuapp.com/registration', requestOptions);
  this.setState({
    name: "",
    address: "",
    phone: "",
    identity: "",
    reason: ""
  });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(name);
    console.log(value);
  }

  render()
  {
  return (
    <div class="wrapper">
    <div class="title">
      Registration Form
    </div>
    <div class="form">
       <div class="inputfield">
          <label>Name</label>
          <input type="text" class="input"  onChange={this.handleChange}/>
       </div>  
        <div class="inputfield">
          <label>Reason</label>
          <div class="custom_select">
            <select onChange={this.handleChange}>
              <option value="none">None</option>
              <option value="looking for an internship">Looking for an internship</option>
              <option value="adding a new skill">Adding a new skill</option>
              <option value="for doing coursework">For doing coursework</option>
              <option value="for getting more marks">For getting more marks</option>
            </select>
          </div>
       </div> 
      <div class="inputfield">
          <label>Phone Number</label>
          <input type="text" class="input"  onChange={this.handleChange}/>
       </div> 
       <div class="inputfield">
          <label>Identity</label>
          <input type="text" class="input"  onChange={this.handleChange}/>
       </div> 
      <div class="inputfield">
          <label>Address</label>
          <textarea class="textarea" onChange={this.handleChange}></textarea>
       </div> 
      <div class="inputfield">
        <input type="submit" value="Submit" class="btn" onClick={this.handleSubmit}/>
      </div>
    </div>
</div>
  );
}
}

export default App;
