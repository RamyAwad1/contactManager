import React, { useState } from "react";
import Contactform from "./components/Contactform";
import Contactlist from "./components/Contactlist";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts,contact]);
  };

  return (
    <div>
      <h1>Contact Manager</h1>
      <Contactform addContact={addContact} />
      <Contactlist contacts={contacts} setContacts={setContacts} />
    </div>
  );
};

export default App;

