import React from 'react';
import './App.css';

function App() {
  return (
    <div class="wrapper">
    <div class="title">
      Registration Form
    </div>
    <div class="form">
       <div class="inputfield">
          <label>Name</label>
          <input type="text" class="input"/>
       </div>  
        <div class="inputfield">
          <label>Reason</label>
          <div class="custom_select">
            <select>
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
          <input type="text" class="input"/>
       </div> 
       <div class="inputfield">
          <label>Identity</label>
          <input type="text" class="input"/>
       </div> 
      <div class="inputfield">
          <label>Address</label>
          <textarea class="textarea"></textarea>
       </div> 
      <div class="inputfield">
        <input type="submit" value="Submit" class="btn"/>
      </div>
    </div>
</div>
  );
}

export default App;
