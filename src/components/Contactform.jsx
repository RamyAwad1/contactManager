import React, { useState } from "react";

const ContactForm = ({addContact}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 

  const handleSubmit = (event) => {
    event.preventDefault();

    
    addContact({ name, email });

    setName("");
    setEmail("");
    
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <button type="submit">Add Contact</button>
      </form>

    </div>
  );
};

export default ContactForm;
