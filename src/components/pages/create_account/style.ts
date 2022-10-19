import { makeStyles } from "@material-ui/core";
import { pattern } from "../../../images/index";
import { theme } from "../../../styles";

const useStyles = makeStyles(() => ({
	background: {
		backgroundImage: `url('${pattern}')`,
		backgroundRepeat: "repeat",
		background: "rgba(255,255,0,0.1)",
	},
	form: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		width: "100vw",
		height: "100vh",
	},
	boxMarcaMiniApp: {
		marginBottom: "40px",
		margin: "16px",
	},
	
	boxBackground: {
		backgroundColor: theme.palette.common.blond,
		// height: 500,
		width:  '600px',

		minHeight: 'calc(100vh - 500px)',
	},
	text: {
		color: theme.palette.common.brown,
		fontSize: 28,
		display: "flex",
		justifyContent: "center",
		fontWeight: 500,
	},
	seta:{
		cursor: "pointer",
	},
	box:{
		display: "flex",
		flexDirection: "column",
		alignItems:'center',
		justifyContent:'center',
	}
}));

export default useStyles;
