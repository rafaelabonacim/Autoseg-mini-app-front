import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "./style";

interface Props {
	text?: string;
	handleClick: () => void;
}

const ButtonAddAccount: React.FC<Props> = ({ text, handleClick }) => {
	const classes = useStyles();
	return (
		<Box className={classes.button}>
			<Box onClick={handleClick}>{text}</Box>
		</Box>
	);
};
export default ButtonAddAccount;
