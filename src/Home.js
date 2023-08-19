import React, { Component } from 'react'
import MiniPalette from './MiniPalette'
import withStyles from '@material-ui/styles/withStyles';
import styles from './styles/PaletteListStyles'
import { Link } from 'react-router-dom/cjs/react-router-dom';



class Home extends Component{

    goToPalette(id){
        this.props.history.push(`/palette/${id}`)
    }
    render(){
        const {palettes, classes} = this.props
        return(
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1 className={classes.heading}>React Colors</h1>
                        <Link to="/palette/new">Create Palette</Link>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(palette => (
                        <MiniPalette {...palette} deletePalette={this.props.deletePalette} handleClick={() => this.goToPalette(palette.id)} key={palette.id} id={palette.id}/>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Home);