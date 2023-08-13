import React from 'react'
import withStyles from '@material-ui/styles/withStyles';
import styles from './styles/MiniPaletteStyles'


function MiniPalette(props){
    const {classes, paletteName, emoji, colors} = props;
    return(
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.colors}>
                {colors.map(c => <div className={classes.miniColor} key={c.name} style={{backgroundColor: c.color}}></div>)}
            </div>
            <h5 className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);