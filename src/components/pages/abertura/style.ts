import { makeStyles } from "@material-ui/core";
import { pattern } from "../../../images/index";

import { theme } from "../../../styles";

const useStyles = makeStyles(() => ({
	boxImageWithButton: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		width: "100vw",
		height: "100vh",
	},
	buttonBoxCreate: {
		backgroundColor: theme.palette.common.orange,
		cursor: "pointer",
		color: theme.palette.common.white,
		width: "200px",
		borderRadius: "4px",
		marginBottom: "8px",
	},
	buttonBoxSignin: {
		backgroundColor: theme.palette.common.green,
		cursor: "pointer",
		color: theme.palette.common.black,
		width: "200px",
		borderRadius: "4px",
	},
	background: {
		backgroundImage:`url('${pattern}')`,
		backgroundRepeat: "repeat",
    background: 'rgba(255,255,0,0.1)',
    // position: "absolute",
		// backgroundSize: "cover",
		// overflow: "hidden",
		// width: "100vw",
		// height: "100vh",
	},
	boxImgResponsive: {
		marginBottom: "32px",
	},
	boxMarcaMiniApp: {
		marginBottom: "40px",
	},
}));

export default useStyles;
