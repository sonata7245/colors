import React from 'react'
import withStyles from '@material-ui/styles/withStyles';


const styles = {
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover":{
            cursor: "pointer"
        }
    },
    colors:{
        backgroundColor: "#dae1e4",
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    },
    title:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    },
    emoji:{
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColor:{
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-4px"
    }
}

function MiniPalette(props){
    const {classes, paletteName, emoji, colors} = props;
    return(
        <div className={classes.root}>
            <div className={classes.colors}>
                {colors.map(c => <div className={classes.miniColor} key={c.name} style={{backgroundColor: c.color}}></div>)}
            </div>
            <h5 className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);



// <p><Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link></p>