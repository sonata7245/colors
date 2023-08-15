import React from 'react'
import withStyles from '@material-ui/styles/withStyles'
import DeleteIcon from '@material-ui/icons/Delete'

const styles = {
    root: {
        height: "25%",
        width: "20%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)"
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "rgba(0,0,0,0.5)",
        textTransform: "uppercase",
        letterSpacing: "1px",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out"
    }
}

function DraggableColorBox(props){
    const {classes, handleClick, name, color} = props
    return (
        <div className={classes.root} style={{backgroundColor: color}}>
           <div className={classes.boxContent}>
            <span>{name}</span>
            <DeleteIcon className={classes.deleteIcon} onClick={handleClick}/>
            </div>
            
        </div>
    )
}

export default withStyles(styles)(DraggableColorBox)