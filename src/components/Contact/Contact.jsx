import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";

const Contact = ({ name, number, delCont }) => {
  return (
    <div className={css.item}>
      <div>
        <p>
          <FaUser />
          {name}
        </p>
        <p>
          <MdLocalPhone />
          {number}
        </p>
      </div>
      <button onClick={delCont}>Delete</button>
    </div>
  );
};

export default Contact;
