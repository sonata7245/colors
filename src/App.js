import React, { Component } from 'react'
import './App.css';
import Palette from './Palette';
import {seedColors} from './seedColors'
import { generatePalette } from './colorhelpers';

class App extends Component {
  render(){
    return (
    <div className="App">
     <Palette palette={generatePalette({...seedColors[3]})}/>
    </div>
  );
}

}

export default App;
