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
	buttonBoxSignin: {
		backgroundColor: theme.palette.common.green,
		cursor: "pointer",
		color: theme.palette.common.brown,
		marginTop: 20,
		//  width: "200px",
		// height: "40px",
		// borderRadius: "4px",
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		alignItems:'center',
		margin:180
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
	}
}));

export default useStyles;
