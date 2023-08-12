import React, { Component } from 'react'
import './App.css';
import Palette from './Palette';
import Home from './Home'
import seedColors from './seedColors'
import { generatePalette } from './colorhelpers';
import {Route, Switch} from "react-router-dom"

class App extends Component {

  findPalette(id){
   return seedColors.find(function(palette){
      return palette.id === id;
    });
  }
  render(){
    return (

      <Switch>
        <Route exact path='/' render={()=> <Home palettes={seedColors}/>}></Route>
        <Route exact path='/palette/:id' render={(routeProps)=> <Palette  palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
      </Switch>

  );
}

}

export default App;


