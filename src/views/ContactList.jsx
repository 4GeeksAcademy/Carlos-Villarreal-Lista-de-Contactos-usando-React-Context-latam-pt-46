import React, { useContext, useState } from 'react';
import { ContactContext } from '../context/ContactContext';
import ContactCard from '../components/CardContact';
import AddContactForm from '../components/AddContactsForm';
import Modal from '../components/Modal';

const ContactList = () => {
  const { contacts, loading } = useContext(ContactContext);
  const [showAddForm, setShowAddForm] = useState(false);
  const [contactToEdit, setContactToEdit] = useState(null);

  if (loading) {
    return <div className="text-center py-8">Cargando contactos...</div>;
  }

  const handleEdit = (contact) => {
    setContactToEdit(contact);
    setShowAddForm(false);
  };

  const handleAddNew = () => {
    setContactToEdit(null);
    setShowAddForm(true);
  };

  const handleCancel = () => {
    setContactToEdit(null);
    setShowAddForm(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Modal />
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Lista de Contactos</h1>
        <button
          onClick={handleAddNew}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          + Agregar Contacto
        </button>
      </div>

      {(showAddForm || contactToEdit) && (
        <div className="mb-8">
          <AddContactForm 
            contactToEdit={contactToEdit} 
            onCancel={handleCancel} 
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contacts.map(contact => (
          <ContactCard 
            key={contact.id} 
            contact={contact} 
            onEdit={handleEdit}
          />
        ))}
      </div>

      {contacts.length === 0 && !loading && (
        <div className="text-center py-8 text-gray-500">
          No hay contactos aún. Agrega uno para comenzar!
        </div>
      )}
    </div>
  );
};

export default ContactList;