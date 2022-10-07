import React from "react";
import { Grid, TextField } from "@material-ui/core";
import useStyles from "./style";

const LoginForm: React.FC = () => {
	const classes = useStyles();
	return (
		<Grid container className={classes.textfieldBox} component="form">
			<Grid item sm={12}>
				<TextField
					id="outlined-basic"
					label="Nome"
					variant="outlined"
					className={classes.textfieldForm}
					helperText="Incorrect entry."
				>
					Nome
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
export default LoginForm;
