import React from "react";

const ContactItem = ({ contact, index, onDelete }) => {
  return (
    <li>
      <strong>{index + 1}. Name:</strong> {contact.name}, <strong>Email:</strong> {contact.email}
      <button onClick={() => onDelete(index)} style={{ marginLeft: "10px", color: "red" }}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
