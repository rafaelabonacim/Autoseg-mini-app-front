import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import useStyles from "./style";

const LoginForm: React.FC = () => {
	const classes = useStyles();
	const navigate = useNavigate();

	const [nomeError, setNomeError] = useState(false);

	const handleOnChange = (nome: string) => {
		if (nome.length > 3 && nome !== "") {
			return navigate("/login");
		} else {
			setNomeError(true)
			return "Nome incorreto";
		}
	};

	//vi isso na net

	// const [state, setState] = useState({ nome: "", password: "" });
	// const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
	// 	setState({
	// 		...state,
	// 		[event.target.name]: event.target.value,
	// 	});

	return (
		<Grid container className={classes.textfieldBox} component="form">
			<Grid item sm={12}>
				<TextField
					id="outlined-basic"
					label="Nome"
					variant="outlined"
					value="nome"
					className={classes.textfieldForm}
					//reclama pq o onchange esta true e false
					// onChange={handleOnChange}
					error={nomeError}
					helperText={nomeError ? "Nome incorreto" : ""}
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
