import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import "../assets/styles/login.css";
import { useActions } from "../hooks/useActions";

const loginCheck = "Admin";
const passwordCheck = "1234";

const validationSchema = yup.object({
  login: yup.string().required("Login is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const { setIsAuthorizedAction } = useActions();
  const navigate = useNavigate();

  return (
    <div className="login">
      <Formik
        initialValues={{
          login: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if (
            values.login === loginCheck &&
            values.password === passwordCheck
          ) {
            setIsAuthorizedAction(true);
            navigate("/");
          }
        }}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form className="form">
            <FormControl
              className="form__field"
              error={touched.login && errors.login}
            >
              <InputLabel htmlFor="login">Login</InputLabel>
              <OutlinedInput
                id="login"
                label="Login"
                value={values.login}
                onChange={(e) => setFieldValue("login", e.target.value)}
                aria-describedby="login-error-text"
              />
              {touched.login && errors.login ? (
                <FormHelperText id="login-error-text">
                  {errors.login}
                </FormHelperText>
              ) : null}
            </FormControl>
            <FormControl
              className="form__field"
              error={touched.password && errors.password}
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                label="Password"
                value={values.password}
                onChange={(e) => setFieldValue("password", e.target.value)}
                aria-describedby="password-error-text"
              />
              {touched.password && errors.password ? (
                <FormHelperText id="password-error-text">
                  {errors.password}
                </FormHelperText>
              ) : null}
            </FormControl>
            <Button className="form__submit-button" type="submit">
              LOGIN
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
