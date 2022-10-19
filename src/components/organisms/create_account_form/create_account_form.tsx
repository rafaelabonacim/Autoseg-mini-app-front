import { Box, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonAddAccount } from "../../atoms/button";
import useStyles from "./style";


const CreateAccountForm: React.FC = () => {
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
		<Box>
			<Grid container className={classes.textfieldBox} component="form" onSubmit={handleSubmitLogin}>
				<Grid item sm={12}>
					<TextField
						id="outlined-basic"
						label="Nome"
						variant="outlined"
						value={nome}
						onChange={(e) => setNome(e.target.value)}
						className={classes.textfieldForm}
						error={nomeError}
						helperText={nomeError ? "Nome incorreto" : ""}
					>
						Nome
					</TextField>
				</Grid>

				<Grid item sm={12}>
					<TextField
						id="outlined-basic"
						label="email"
						variant="outlined"

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
			<Box className={classes.buttonBoxSignin}>
				<ButtonAddAccount text="Criar Conta" handleClick={handleSubmitLogin} />
			</Box>
		</Box>
	);
};

export default CreateAccountForm;
