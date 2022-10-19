import React, { useState } from "react";
import { Box, Grid, TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import useStyles from "./style";
import { ButtonAddAccount } from "../../atoms/button";

const LoginForm: React.FC = () => {
	const classes = useStyles();
	const navigate = useNavigate();

	const [nome, setNome] = useState("");
	const [nomeError, setNomeError] = useState(false);

	const handleSubmitLogin = () => {
		console.log(nome);
		if (nome.length > 3 && nome !== "") {
			navigate("/lista");
		} else {
			setNomeError(true);
		}
	};

	return (
		<Box component="form" onSubmit={handleSubmitLogin}>
			<Grid container className={classes.textfieldBox} component="form">
				<Grid item sm={12}>
					<TextField
						id="outlined-basic"
						label="Nome"
						variant="outlined"
						value={nome}
						className={classes.textfieldForm}
						onChange={(e) => setNome(e.target.value)}
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
			<Box className={classes.buttonBoxSignin}>
				<ButtonAddAccount text="Entrar" handleClick={handleSubmitLogin} />
			</Box>
		</Box>
	);
};
export default LoginForm;
