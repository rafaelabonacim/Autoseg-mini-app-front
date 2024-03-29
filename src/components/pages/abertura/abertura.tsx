import React from "react";
import { Box } from "@material-ui/core";
import { pattern, img_responsive, marca_mini_app } from "../../../images/index";
import { ButtonAddAccount } from "../../atoms/button";
import useStyles from "./style";
import { useNavigate } from "react-router-dom";

const Abertura: React.FC = () => {
	const classes = useStyles();

	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/criar");
	};

	const handleClickSignin = () => {
		navigate("/login");
	};

	return (
		<>
			<Box className={classes.background}>
				{/* <img src={pattern} alt="pc" /> */}

				<Box className={classes.boxImageWithButton}>
					<img
						className={classes.boxImgResponsive}
						src={img_responsive}
						alt="pc"
					/>
					<img
						className={classes.boxMarcaMiniApp}
						src={marca_mini_app}
						alt="marca"
					/>
					<Box className={classes.buttonBoxCreate}>
						<ButtonAddAccount text="Criar Conta" handleClick={handleClick} />
					</Box>
					<Box className={classes.buttonBoxSignin}>
						<ButtonAddAccount text="Entrar" handleClick={handleClickSignin} />
					</Box>
				</Box>
			</Box>
		</>
	);
};
export default Abertura;
