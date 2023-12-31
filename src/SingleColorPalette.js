import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './styles/PaletteStyle'
import withStyles from '@material-ui/styles/withStyles';




class SingleColorPalette extends Component{
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
        this.state = {format: "hex"}
        this.changeFormat = this.changeFormat.bind(this)
    }

    changeFormat(val){
        this.setState({format: val})
    }

    gatherShades(palette, colorToFilterBy){
        let shades = []
        let allColors = palette.colors;
        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        //return all shades of given color (slice off the 50 shade since it is white)
        return shades.slice(1);
    }

    render(){
        const {format} = this.state
        const {paletteName, emoji, id} = this.props.palette
        const {classes} = this.props
        const colorBoxes = this._shades.map(c => (
            <ColorBox key={c.name} name={c.name} background={c[format]} showingFullPalette={false}/>
        ))
        return(
            <div className={classes.palette}>
                <Navbar  handleChange={this.changeFormat} showSlider={false} />
            <div className={classes.paletteColors}>
                {colorBoxes}
                <div className={classes.goBack}>
                    <Link to={`/palette/${id}`}>Go Back</Link>
                </div>
            </div>
            <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette)