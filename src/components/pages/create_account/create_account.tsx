import React from "react";
import { Box, Typography } from "@material-ui/core";
import { CreateAccountForm, LoginForm } from "../../organisms";
import { seta, marca_mini_app, camera } from "../../../images/index";
import { ButtonAddAccount } from "../../atoms/button";
import { useNavigate } from "react-router-dom";
import useStyles from "./style";

const CreateAccount: React.FC = () => {
	const classes = useStyles();
	const navigate = useNavigate();

	const handleClickSignin = () => {
		navigate("/criar");
	};
	const handleClickSeta = () => {
		navigate("/");
	};
	return (
		<>
			<Box className={classes.background}>
				<Box className={classes.form}>
					<Box>
						<img
							className={classes.boxMarcaMiniApp}
							src={marca_mini_app}
							alt="marca"
						/>
					</Box>
					<Box className={classes.boxBackground}>
						<Box onClick={handleClickSeta} className={classes.seta}>
							<img className={classes.boxMarcaMiniApp} src={seta} alt="marca" />
						</Box>
						<Box className={classes.box}>
							<img src={camera} alt="marca" />
						</Box>

						<Typography className={classes.text}>Criar Conta</Typography>

						<CreateAccountForm />
						
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default CreateAccount;
