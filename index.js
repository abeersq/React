import React, { Component } from 'react';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
     <div className="box">
  <img src="abeer.jpg" alt="" className="box-img" />
  <h1> Abeer Alquriny</h1>
<h5>  Student in CS dep @ IMSU </h5>
<ul>
<li><a href="https://twitter.com/sq_abeer"/><i className="fa fa-twitter-square" aria-hidden="true" /></li>
<li><a href="mailto:abeeralquriny@gmail.com"/><i className="fa fa-google-plus-square" aria-hidden="true"/></li>
</ul>
</div>
      </div>
    );
  }
}

export default App;
