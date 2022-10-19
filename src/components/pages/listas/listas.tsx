import React from "react";
import {
	AppBar,
	Box,
	Grid,
	IconButton,
	TextField,
	Typography,
} from "@material-ui/core";
import { marca_mini_app, avatar, button_add } from "../../../images";
import useStyles from "./style";
import { ButtonAddAccount } from "../../atoms/button";

const Listas: React.FC = () => {
	const classes = useStyles();
	return (
		<>
			<Box className={classes.header}>
				<Box>
					<img
						className={classes.boxMarcaMiniApp}
						src={marca_mini_app}
						alt="marca"
					/>
				</Box>
				<Box className={classes.avatar}>
					<img className={classes.avatarImg} src={avatar} alt="marca" />
					Usuário 1
				</Box>
			</Box>
			<Typography>Criar Conta</Typography>

			<TextField
				className={classes.textfield}
				variant="outlined"
				label="Digite o nome da lista"
			>
				{" "}
			</TextField>

			<TextField
				className={classes.textfield}
				variant="outlined"
				label="Adicionar tarefa"
			></TextField>
			<IconButton type="button">
				<img className={classes.avatarImg} src={button_add} alt="marca" />
			</IconButton>

			<Box className={classes.buttoncancel}>
				<ButtonAddAccount
					text="Cancelar"
					handleClick={() => {}}
				></ButtonAddAccount>
			</Box>

			<Box className={classes.buttoncreate}>
				<ButtonAddAccount
					text="Criar Lista"
					handleClick={() => {}}
				></ButtonAddAccount>
			</Box>
		</>
	);
};

export default Listas;
