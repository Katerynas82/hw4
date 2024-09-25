import { useState } from "react";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";
import toast from "react-hot-toast";
import {Formik, Form, Field} from 'formik';

const SearchBar = ({ setQuery, onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const initialValues = {query: "",};

  const handleSubmit = ( values) => {
    setQuery(values.query)
    // evt.preventDefault();
    if (inputValue.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }
    onSubmit(inputValue);
    setInputValue("");
  };

//   const handleInputChange = (evt) => {
//     setInputValue(evt.target.value);
//   };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            name="query"
            // type="text"
            // autoComplete="off"
            // autoFocus
            placeholder="Search images and photos"
            // value={inputValue}
            // onChange={setQuery}
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      {/* <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchInput"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <ErrorMessage /> */}
    </>
  );
};

export default SearchBar;
