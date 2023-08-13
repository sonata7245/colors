import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css'
import withStyles from '@material-ui/styles/withStyles';



const styles = {
    palette:{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    paletteColors: {
        height: "90%",
        overflow: "hidden",
    },
    
    
    paletteFooter:{
        backgroundColor: "white",
        height: "5vh",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        fontWeight: "bold",
    },
    
    emoji: {
        fontSize: "1.5rem",
        margin: "0 1rem",
    },
    

}

class Palette extends Component {
    constructor(props){
        super(props);
        this.state = {level: 500, format: "hex"};
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }

    changeLevel(level){
        this.setState({level})
    }

    changeFormat(val){
        this.setState({format: val})
    }

    render(){
        const {classes} = this.props
        const {colors, paletteName, emoji, id} = this.props.palette
        const {level, format} = this.state;
        const colorBoxes = colors[level].map(color => {
          return  <ColorBox background={color[format]} name={color.name} key={color.id} id={color.id} paletteId={id} showingFullPalette={true}/>
        })

        return(
            <div className={classes.palette}>
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showSlider={true} />
                <div className={classes.paletteColors}>{colorBoxes}</div>
                <footer className={classes.paletteFooter}>
                    {paletteName}
                    <span className={classes.emoji}>{emoji}</span>
                </footer>
            </div>
        )
    }
}

export default withStyles(styles)(Palette);