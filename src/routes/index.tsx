import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CreateAccount, Login } from "../components/pages";
import { Abertura } from "../components/pages/abertura";

const Rotas: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Abertura />} />
				<Route path="/login" element={<Login />} />
				<Route path="/criar" element={<CreateAccount />} />

			</Routes>
		</Router>
	);
};

export default Rotas;
