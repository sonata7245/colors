import down from './sizes'
import bg from  './bg.svg'

const styles = {
    root: {
        backgroundColor: "#020D36",
        backgroundImage: `url(${bg})`,
        /* background by SVGBackgrounds.com */
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    container:{
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [down('xl')]: {
            width: "80%"
        },

        [down('xs')]: {
            width: "75%"
        },


    },
    heading: {
        fontSize: "2rem"
    },
    nav:{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white",
        alignItems: "center",
        "& a":{
            color: "white"
        }
    },
    palettes:{
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "2.5rem",
        [down('md')]: {
            gridTemplateColumns: "repeat(2, 50%)",
        },
        [down('xs')]: {
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: "1rem",
        },
    }
}

export default styles