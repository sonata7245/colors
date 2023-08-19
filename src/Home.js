import React, { PureComponent } from "react";
import MiniPalette from "./MiniPalette";
import withStyles from "@material-ui/styles/withStyles";
import styles from "./styles/PaletteListStyles";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Dialog, DialogTitle } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

class Home extends PureComponent {
	constructor(props) {
		super(props);
		this.goToPalette = this.goToPalette.bind(this);
        this.state = {openDeleteDialog: false, deletingId:""}
        this.openDialog = this.openDialog.bind(this)
        this.closeDialog = this.closeDialog.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
	}

	goToPalette(id) {
		this.props.history.push(`/palette/${id}`);
	}

    openDialog(id){
        this.setState({openDeleteDialog: true, deletingId: id})
    }

    closeDialog(){
        this.setState({openDeleteDialog: false})
    }

    handleDelete(){
        this.props.deletePalette(this.state.deletingId);
        this.closeDialog();
    }

	render() {
		const { palettes, classes, deletePalette } = this.props;
        const {openDeleteDialog, deletingId} = this.state
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1 className={classes.heading}>React Colors</h1>
						<Link to="/palette/new">Create Palette</Link>
					</nav>
					<TransitionGroup className={classes.palettes}>
						{palettes.map((palette) => (
							<CSSTransition classNames="fade" key={palette.id} timeout={300}>
								<MiniPalette
									{...palette}
									
                                    openDialog={this.openDialog}
									handleClick={this.goToPalette}
									key={palette.id}
									id={palette.id}
								/>
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
				<Dialog open={openDeleteDialog} aria-labelledby="delete-dialog-title" onClose={this.closeDialog}>
					<DialogTitle id="delete-dialog-title">Delete this Palette?</DialogTitle>
					<div>
						<List>
							<ListItem button onClick={this.handleDelete}>
								<ListItemAvatar>
									<Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
										<CheckIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText>Delete</ListItemText>
							</ListItem>
							<ListItem button onClick={this.closeDialog}>
								<ListItemAvatar>
									<Avatar style={{ backgroundColor: red[100], color: red[600] }}>
										<CloseIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText>Cancel</ListItemText>
							</ListItem>
						</List>
					</div>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(Home);
