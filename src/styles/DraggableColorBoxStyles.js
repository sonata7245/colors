import down from './sizes'
import chroma from 'chroma-js'
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
        },
        [down("lg")]:{
            width: "25%",
            height: "20%"
        },
        [down("md")]:{
            width: "50%",
            height: "10%",
        },
        [down("sm")]:{
            width: "100%",
            height: "5%",
        },

    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: props => chroma(props.color).luminance() <= 0.08 ? "white" : "rgba(0,0,0,.5)",
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

export default styles