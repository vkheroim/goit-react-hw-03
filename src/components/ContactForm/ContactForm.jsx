import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const validationShema = Yup.object().shape({
  id: "",
  name: Yup.string()
    .min(3, "Name must be at least 3 symbols")
    .max(50, "Name should be no more than 50 symbols")
    .required("Field must be filled in"),
  number: Yup.string()
    .matches(
      /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      "Please enter a number like so: xxx-xx-xx"
    )
    .required("Please, fill in the required fields"),
});

const ContactForm = ({ submit }) => {
  return (
    <Formik
      initialValues={{ id: "", name: "", number: "" }}
      onSubmit={(values, actions) => {
        submit(values);
        actions.resetForm();
      }}
      validationSchema={validationShema}
    >
      <Form>
        <p className={css.formNameOfInput}>Name</p>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="span" />
        <p className={css.formNameOfInput}>Number</p>
        <Field type="text" name="number" />
        <ErrorMessage name="number" component="span" />
        <br />
        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
