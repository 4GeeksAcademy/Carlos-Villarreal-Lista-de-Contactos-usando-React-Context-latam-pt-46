import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./views/Contacts.jsx"; // Asegúrate de que esta ruta sea correcta
import AddContact from "./views/AddContact.jsx";
import injectContext from "./store/appContext";
import EditContact from "./views/EditContact.jsx";

//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Routes>
					<Route path="/" element={<Contacts />} />
					<Route path="/addContact" element={<AddContact />} />
					<Route path="/editContact/:id" element={<EditContact />} />
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);