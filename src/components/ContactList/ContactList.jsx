import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            delCont={() => deleteContact(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
