import { Box, Typography } from "@material-ui/core";
import { LoginForm } from "../../organisms";
import { seta, marca_mini_app } from "../../../images/index";

import useStyles from "./style";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
	const classes = useStyles();

	const navigate = useNavigate();

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
						<Typography className={classes.text}>Entrar</Typography>
						<LoginForm />

					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Login;
