import React from "react";
import { Route, Routes } from "react-router-dom";
import { Abertura } from "../components/pages/abertura";


const Rotas: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Abertura />} />
		</Routes>
	);
};

export default Rotas;
