import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import PaletteFormNav from "./PaletteFormNav";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Button } from "@material-ui/core";
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";
import ColorPickerForm from "./ColorPickerForm";
import styles from "./styles/NewPaletteFormStyles"
import seedColors from "./seedColors";



class NewPaletteForm extends Component {
	static defaultProps = {
		maxColors: 20,
	};
	constructor(props) {
		super(props);
		this.state = {
			open: true,
			currentColor: "teal",
			colors: seedColors[0].colors,
			newColorName: "",
			newPaletteName: "",
		};

		this.addNewColor = this.addNewColor.bind(this);
		this.savePalette = this.savePalette.bind(this);
		this.removeColor = this.removeColor.bind(this);
		this.clearColors = this.clearColors.bind(this);
		this.addRandomColor = this.addRandomColor.bind(this);
	}

	addNewColor(newColor) {
		this.setState({ colors: [...this.state.colors, newColor], newColorName: "" });
	}

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	clearColors() {
		this.setState({ colors: [] });
	}

	addRandomColor() {
		const allColors = this.props.palettes.map((p) => p.colors).flat();
		var rand = Math.floor(Math.random() * allColors.length);
		const randomColor = allColors[rand];
		this.setState({ colors: [...this.state.colors, randomColor] });
	}

	savePalette(newPalette) {
		newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-")
		newPalette.colors = this.state.colors
		this.props.savePalette(newPalette);
		this.props.history.push("/");
	}

	removeColor(colorName) {
		this.setState({
			colors: this.state.colors.filter((color) => color.name !== colorName),
		});
	}

	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ colors }) => ({
			colors: arrayMove(colors, oldIndex, newIndex),
		}));
	};

	render() {
		const { classes, theme, maxColors, palettes } = this.props;
		const { open, colors } = this.state;

		return (
			<div className={classes.root}>
				<PaletteFormNav
					open={open}
					palettes={palettes}
					savePalette={this.savePalette}
					handleDrawerOpen={this.handleDrawerOpen}
				/>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper,
					}}>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
						</IconButton>
					</div>
					<Divider />
					<div className={classes.container}>
						<Typography variant="h4" gutterBottom>Design Your Palette</Typography>
						<div className={classes.buttons}>
							<Button variant="contained" color="secondary" onClick={this.clearColors} className={classes.button}>
								Clear Palette
							</Button>
							<Button
								variant="contained"
								color="primary"
								onClick={this.addRandomColor}
								disabled={colors.length >= maxColors}
								className={classes.button}>
								Random Color
							</Button>
						</div>
						<ColorPickerForm colors={colors} maxColor={maxColors} addNewColor={this.addNewColor} />
					</div>
				</Drawer>
				<main
					className={classNames(classes.content, {
						[classes.contentShift]: open,
					})}>
					<div className={classes.drawerHeader} />
					<DraggableColorList colors={colors} removeColor={this.removeColor} axis="xy" onSortEnd={this.onSortEnd} distance={20} />
				</main>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
