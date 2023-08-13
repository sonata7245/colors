import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import styles from './styles/PaletteStyle'
import withStyles from '@material-ui/styles/withStyles';
import PaletteFooter from './PaletteFooter';





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
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles)(Palette);