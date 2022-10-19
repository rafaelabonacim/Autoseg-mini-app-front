import { makeStyles } from "@material-ui/core";
import { theme } from "../../../styles";

const useStyles = makeStyles(() => ({
	avatar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	header: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		backgroundColor: theme.palette.common.orange,
	},
	boxMarcaMiniApp: {
		width: "100px",
	},
	avatarImg: {
		height: 30,
		width: 30,
		margin: 10,
	},
	buttoncreate: {
		backgroundColor: theme.palette.common.orange,
		color: theme.palette.common.white,
	},
	buttoncancel: {
		backgroundColor: theme.palette.common.green,
	},
	textfield: {
		border: `1px solid ${theme.palette.common.orange}`,
    borderRadius:'10px'
	},
}));

export default useStyles;
