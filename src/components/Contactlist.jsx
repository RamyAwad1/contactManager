import React, { useState } from "react";


const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contact List</h2>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              <strong>Name:</strong> {contact.name}, <strong>Email:</strong> {contact.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
