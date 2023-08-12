import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import MiniPalette from './MiniPalette'

class Home extends Component{
    render(){
        const {palettes} = this.props
        return(
            <div>
            <h1>React Colors</h1>
            {palettes.map(palette => (
                <MiniPalette {...palette}/>
                
            ))}
            </div>
        )
    }
}

export default Home