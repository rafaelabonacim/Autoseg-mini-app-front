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
}));
export default useStyles;
