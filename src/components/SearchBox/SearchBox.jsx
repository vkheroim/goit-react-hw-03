import css from "./SearchBox.module.css";

const SearchBox = ({ input, handleInputChange }) => {
  return (
    <>
      <p className={css.nameOfInput}>Search contacts (name)</p>
      <input type="text" value={input} onChange={handleInputChange} />
    </>
  );
};

export default SearchBox;
