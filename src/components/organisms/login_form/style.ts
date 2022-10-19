import { makeStyles } from "@material-ui/core";
import { theme } from "../../../styles";

const useStyles = makeStyles(() => ({
	textfieldBox: {
		marginTop: 40,
		display: "flex",
		flexDirection: "column",
		// justifyContent: "center",
		alignItems:'center',


		// marginLeft: 80,
		// marginRight: 80
	},
	textfieldForm: {
		backgroundColor: theme.palette.common.white,
		width: 400,
		marginTop: 5,
		// minWidth: 400,
		// textAlign:'center'

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
}));
export default useStyles;
