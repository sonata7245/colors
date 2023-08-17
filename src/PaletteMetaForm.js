import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import 'emoji-mart/css/emoji-mart.css'

class PaletteMetaForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true,
			newPaletteName: ""
		};
		this.handleChange = this.handleChange.bind(this)
	}


	componentDidMount() {
		ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
			this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
		);
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}


	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	

	render() {
		const {newPaletteName, open} = this.state
		const {hideForm, savePalette} = this.props
		return (
			

				<Dialog open={open} onClose={hideForm} aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">Choose Palette Name</DialogTitle>
					<ValidatorForm onSubmit={()=> savePalette(newPaletteName)}>
					<DialogContent>
						<DialogContentText>
							Please enter a name for your new palette. Make sure it is unique.
						</DialogContentText>
						 <Picker />
							<TextValidator
								label="Palette Name"
								value={newPaletteName}
								onChange={this.handleChange}
								name="newPaletteName"
								fullWidth
								margin = "normal"
								validators={["required", "isPaletteNameUnique"]}
								errorMessages={["Name Required", "Name Already Taken"]}
							/>

						 
					</DialogContent>
					<DialogActions>
						<Button onClick={hideForm} color="primary">
							Cancel
						</Button>
						<Button variant="contained" color="primary" type="submit">
								Save Palette
							</Button>
					</DialogActions>
					</ValidatorForm>
				</Dialog>
			
		);
	}
}

export default PaletteMetaForm;
