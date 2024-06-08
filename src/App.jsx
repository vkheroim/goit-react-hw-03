import { useEffect, useState } from "react";
//import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      return JSON.parse(savedContacts);
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const submit = (data) => {
    const newContact = { ...data, id: nanoid() };
    setContacts([...contacts, newContact]);
  };

  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(input.toLowerCase())
  );

  const deleteContact = (id) => {
    setContacts((contacts) => contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm submit={submit} />
      <SearchBox input={input} handleInputChange={handleInputChange} />
      <ContactList
        filteredContacts={filteredContacts}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
