import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "../slices/message";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { toggleEdition, editName } from "../slices/user";
import axios from "axios";
import authHeader from "../services/auth-header";
import * as Yup from "yup";

const Edition = () => {
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    firstName: "",
    lastName: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required!"),
    lastName: Yup.string().required("This field is required!"),
  });

  const handleEdition = (formValue) => {
    const { firstName, lastName } = formValue;
    axios({
      method: "PUT",
      url: "http://localhost:3001/api/v1/user/profile",
      headers: authHeader(),
      data: { "firstName":firstName, "lastName":lastName },
    }).then((response) => {
      console.log(response)
      dispatch(editName([response.data.body.firstName, response.data.body.lastName]))
    });
    dispatch(toggleEdition())
  };

  return (
    <div>
      <div className="edition">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleEdition}
        >
          <Form>
            <div className="input-wrapper">
              <label className="sr-only" htmlFor="firstName">
                First Name
              </label>
              <Field name="firstName" placeholder="First Name" type="text" />
              <ErrorMessage name="firstName" component="div" />
            </div>

            <div className="input-wrapper">
              <label className="sr-only" htmlFor="lastName">
                Last Name
              </label>
              <Field name="lastName" type="text" placeholder="Last Name" />
              <ErrorMessage name="lastName" component="div" />
            </div>

            <div className="edition-buttons">
            <button type="submit" className="edit-button">
              Save
            </button>
            <button
              className="edit-button"
              onClick={() => dispatch(toggleEdition())}
            >
              Cancel
            </button>
            </div>
          </Form>
        </Formik>
      </div>
      {message && (
        <div>
          <div role="alert">{message}</div>
        </div>
      )}
    </div>
  );
};
export default Edition;
