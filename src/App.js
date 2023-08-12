import React, { Component } from 'react'
import './App.css';
import Palette from './Palette';
import {seedColors} from './seedColors'
import { generatePalette } from './colorhelpers';

class App extends Component {
  render(){
    console.log(seedColors)
    console.log(generatePalette({...seedColors[2]}))
    return (
    <div className="App">
     <Palette {...seedColors[3]}/>
    </div>
  );
}

}

export default App;
