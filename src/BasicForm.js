import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const BasicForm = () => {

  const formValidationSchema = yup.object({
    email: yup
      .string()
      .email()
      .min(5, "Need a bigger email 😅")
      .required("Why not fill this email? 😁"),
    password: yup
      .string()
      .min(8, "Need a bigger password 😅")
      .max(12, "Too much password 😁")
      .required("Why not fill the password? 😁")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
  });
  
  // password - maximum 12 characters, required
  // email - minimum 5 characters, required

  const {handleSubmit,values,handleChange,handleBlur, touched,errors} = useFormik({
    initialValues: { email: "Prasanth", password: "abc" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit=", values);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {/* Only if user touched the forms & moves away, then show error message  */}
      {touched.email && errors.email ? errors.email : ""}
      <input
        type="password"
        placeholder="Enter password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.password && errors.password
        ? errors.password
        : ""}

      <button type="submit">Submit</button>
      {/* <p>Values: {JSON.stringify(formik.values)}</p>
      <p>Errors: {JSON.stringify(formik.email)}</p>
      <p>Touched: {JSON.stringify(formik.touched)}</p> */}
    </form>
  );
};

export default BasicForm;
