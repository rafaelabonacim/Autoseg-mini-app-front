import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CreateAccount, Login } from "../components/pages";
import { Abertura } from "../components/pages/abertura";
import { Listas } from "../components/pages/listas";

const Rotas: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Abertura />} />
				<Route path="/login" element={<Login />} />
				<Route path="/criar" element={<CreateAccount />} />
				<Route path="/lista" element={<Listas />} />

			</Routes>
		</Router>
	);
};

export default Rotas;
