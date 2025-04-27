import React, { useState } from "react";
import ContactItem from "./ContactItem"; // Import ContactItem component

const ContactList = ({ contacts, setContacts }) => {
  const handleDelete = (indexToDelete) => {
    setContacts(contacts.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <h2>Contact List</h2>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul>
          {contacts.map((contact, index) => (
            <ContactItem key={index} contact={contact} index={index} onDelete={handleDelete} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;

