import React, { Component } from 'react'
import { Button} from "@material-ui/core";
import { ChromePicker } from "react-color";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/core/styles";


const styles = {
	root: {},
	picker: {
		width: "100% !important",
		marginTop: "2rem"
	},
	addColor: {
		width: "100%",
		padding: "1rem",
		marginTop: "1rem",
		fontSize: "2rem"
	},
	colorName: {
		width: "100%",
		height: "70px",
	}
}

class ColorPickerForm extends Component{
    constructor(props){
        super(props)
        this.state = {currentColor: "teal", newColorName: ""}
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
		ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
			this.props.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
		);
		ValidatorForm.addValidationRule("isColorUnique", (value) =>
			this.props.colors.every(({ color }) => color !== this.state.currentColor)
		);
	}


    updateCurrentColor(newColor) {
		this.setState({ currentColor: newColor.hex });
	}

    handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}

    handleSubmit(){
        const newColor = { color: this.state.currentColor, name: this.state.newColorName };
        this.props.addNewColor(newColor)
        this.setState({newColorName:""})
    }

    render(){
        const {currentColor, newColorName} = this.state
        const {colors, maxColors, classes} = this.props
        return(
            <div className={classes.root}>
                <ChromePicker className={classes.picker} color={currentColor} onChangeComplete={this.updateCurrentColor} />
					<ValidatorForm onSubmit={this.handleSubmit}>
						<TextValidator
							value={newColorName}
							className={classes.colorName}
							placeholder='Color Name'
							name="newColorName"
							variant="filled"
							margin="normal"
							onChange={this.handleChange}
							validators={["required", "isColorNameUnique", "isColorUnique"]}
							errorMessages={["Enter a Color Name", "Name Already Taken", "Color Already Added"]}
						/>
						<Button
							variant="contained"
							color="primary"
							style={{ backgroundColor: currentColor }}
							type="submit"
							disabled={colors.length >= maxColors}
							className={classes.addColor}>
							Add Color
						</Button>
					</ValidatorForm>

            </div>
        )
    }
}

export default withStyles(styles)(ColorPickerForm)