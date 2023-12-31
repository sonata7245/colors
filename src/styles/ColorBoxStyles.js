import chroma from 'chroma-js';
import down from './sizes'

const styles = {
    colorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        "&:hover button": {
            opacity: "1",
            transition: ".3s ease-in-out"
        },
        [down("lg")]:{
            width: "25%",
            height: props => props.showingFullPalette ? "20%" : "33.333%",
        },
        [down("md")]:{
            width: "50%",
            height: props => props.showingFullPalette ? "10%" : "20%",
        },
        [down("xs")]:{
            width: "100%",
            height: props => props.showingFullPalette ? "5%" : "10%",
        },

    },
    copyText:{
        color: props => chroma(props.background).luminance() >= 0.6 ? "rgba(0,0,0,.5)" : "white"
    },
    colorName:{
        color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "rgba(0,0,0,.5)"
    },
    seeMore:{
        backgroundColor: "rgba(255,255,255,.3)",
        position: "absolute",
        bottom: "0px",
        right: "0px",
        border: "none",
        color: props => chroma(props.background).luminance() >= 0.6 ? "rgba(0,0,0,.5)" : "white",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase"
    },
    copyButton:{
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255,255, 255, 0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        color: props => chroma(props.background).luminance() >= 0.6 ? "rgba(0,0,0,.5)" : "white",
        textTransform: "uppercase",
        border: "none",
        cursor: "pointer",
        textDecoration: "none",
        opacity: "0"
        
    },

    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        textTransform: "uppercase",
        letterSpacing: "1px",
        fontSize: "12px",
    },

    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform .6s ease-in-out",
        transform: "scale(0.1)",
    },
    showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute",
    },
    copyMsg: {
        position: "fixed",
        left: "0",
        top: "0",
        right: "0",
        bottom: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "4rem",
        transform: "scale(0.1)",
        opacity: "0",
        color: "white",
        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px black",
            backgroundColor: "rgba(255,255,255, 0.2)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0",
            padding: "1rem",
            textTransform: "uppercase",
            [down("xs")]:{
                fontSize: "6rem"
            }
         },
        
        "& p":{
            fontSize: "1rem",
            fontWeight: "100",
        }
    },
    showCopyMsg: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.3s",
    }

}

export default styles