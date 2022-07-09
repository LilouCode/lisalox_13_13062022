import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../_slices/auth";
import { clearMessage } from "../_slices/message";
import { toggleRemember, chargeToken } from "../_slices/user";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = (props) => {
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const { wantToBeRemembered } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue) => {
    const { email, password } = formValue;
    setLoading(true);
    dispatch(login({ email, password }))
      .unwrap()
      .then((response) => {
        dispatch(chargeToken(response.user.body.token));
        props.history.push("/user");
        window.location.reload();
        if (wantToBeRemembered) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate replace to="/user" />;
  }

  return (
    <div>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <Field name="email" type="text" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <div className="input-remember">
              <label>
                <input
                  type="checkbox"
                  id="remember-me"
                  onClick={() => dispatch(toggleRemember())}
                />
                Remember me
              </label>
            </div>

            <button type="submit" className="sign-in-button" disabled={loading}>
              Sign In
            </button>
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
export default Login;
