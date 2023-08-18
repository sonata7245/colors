import React, { Component } from 'react'
import withStyles from '@material-ui/styles/withStyles';
import styles from './styles/MiniPaletteStyles'
import DeleteIcon  from '@material-ui/icons/Delete';


class MiniPalette extends Component{
    constructor(props){
        super(props);
        this.deletePalette = this.deletePalette.bind(this)
    }

    deletePalette(e){
        e.stopPropagation()
        this.props.deletePalette(this.props.id)
    }

    
    render(){
        const {classes, paletteName, emoji, colors, handleClick} = this.props;
        return(
            <div className={classes.root} onClick={handleClick}>
           
                <DeleteIcon className={classes.deleteIcon} style={{transition: "all .3s ease-in-out"}} onClick={this.deletePalette}/>

            <div className={classes.colors}>
                {colors.map(c => <div className={classes.miniColor} key={c.name} style={{backgroundColor: c.color}}></div>)}
            </div>
                 <h5 className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span></h5>
            </div>
         )
    }
}

export default withStyles(styles)(MiniPalette);