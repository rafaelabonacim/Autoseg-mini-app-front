import { Grid, TextField } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

// import { Container } from './styles';

const CreateAccountForm: React.FC = () => {
	const classes = useStyles();

	return (
		<Grid container className={classes.textfieldBox} component="form">
			<Grid item sm={12}>
				<TextField
					id="outlined-basic"
					label="Nome"
					variant="outlined"
					value="nome"
					className={classes.textfieldForm}
				>
					Nome
				</TextField>
			</Grid>

			<Grid item sm={12}>
				<TextField
					id="outlined-basic"
					label="email"
					variant="outlined"
					value="email"
					className={classes.textfieldForm}
				>
					Endereço de email
				</TextField>
			</Grid>

			<Grid item sm={12}>
				<TextField
					id="outlined-basic"
					label="Senha"
					variant="outlined"
					className={classes.textfieldForm}
					type="password"
				>
					Senha
				</TextField>
			</Grid>
		</Grid>
	);
};

export default CreateAccountForm;
