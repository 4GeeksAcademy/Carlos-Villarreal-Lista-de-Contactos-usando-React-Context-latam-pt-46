import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext.js";
import CardContact from "../component/CardContact.jsx";

const Contacts = () => {
    const { store } = useContext(Context);
    const { listContacts } = store; // Desestructuración para mayor claridad

    return (
        <div className="w-75 mx-auto">
            <div className="d-flex justify-content-end">
                <Link to="/AddContact">
                    <button className="btn btn-success">Add New Contact</button>
                </Link>
            </div>
            <ul className="list-group mt-3">
                {listContacts && listContacts.length > 0 ? (
                    listContacts.map((contact) => (
                        <CardContact contact={contact} key={contact.id} /> // Usa un identificador único
                    ))
                ) : (
                    <li className="list-group-item">No contacts available</li> // Mensaje si no hay contactos
                )}
            </ul>
        </div>
    );
};

export default Contacts;