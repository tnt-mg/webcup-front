import { ErrorMessage, Field, Form, Formik } from "formik"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { strapiService } from "../api/strapiService"
import Input from "./Components/Forms/inputs"

const Signup = () => {
  const { t, i18n } = useTranslation()
  return (
    <Formik
      initialValues={{
        lastname: "",
        firstname: "",
        email: "",
        username: "",
        password: "",
        confirmpassword: "",
        phone: "",
        accept: false,
      }}
      validate={(values) => {
        const errors: any = {}
        if (!values.username) {
          errors.username = t("requiredField")
        }
        if (!values.password) {
          errors.password = t("requiredField")
        }
        if (!values.lastname) {
          errors.lastname = t("requiredField")
        }
        if (!values.firstname) {
          errors.firstname = t("requiredField")
        }
        if (!values.email) {
          errors.email = t("requiredField")
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting, setFieldError }) => {
        strapiService
          .register(values)
          .then((response: any) => {
            Swal.fire({
              title: "Inscription terminé",
              text: "Veuillez verifier votre boîte email",
              icon: "success",
              confirmButtonText: "Ok",
            })
          })
          .catch((error: any) => {
            if (error.response) {
              const errorMsg = error.response.data.error.message
              if (errorMsg === "Email is already taken") {
                setFieldError("email", t("emailAlreadyTaken")!)
              }
              if (errorMsg === "An error occurred during account creation") {
                setFieldError("username", t("usernameAlreadyTaken")!)
              }
            }
          })
          .finally(() => {
            setSubmitting(false)
          })
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <div className="space-y-5">
            <div>
              <Input.ShortText label="Nom" type="text" name="lastname" />
            </div>
            <div className="col form-group">
              <Input.ShortText label="Prénoms" type="text" name="firstname" />
            </div>
            <div className="form-group">
              <Input.ShortText label="Email" type="mail" name="email" />
            </div>
            <div className="form-group">
              <Input.ShortText
                label="Nom d'utilisateur"
                type="text"
                name="username"
              />
            </div>
            <div className="row">
              <Input.ShortText
                label="Mot de passe"
                type="password"
                name="password"
              />
            </div>
            <div className="col form-group">
              <Input.ShortText
                label="Confirmation mot de passe"
                type="password"
                name="confirmpassword"
              />
            </div>
            <div className="signup-checkbox">
              <Field name="accept" type="checkbox" id="remember_me" />
              <label htmlFor="remember_me">
                J&apos;accepte les <Link to="/terms">termes</Link> et{" "}
                <Link to="/terms">conditions d&apos;utilisations</Link>{" "}
                <b>App</b>
              </label>
            </div>
            <div>
              <button
                className="btn btn-primary"
                disabled={isSubmitting || !values.accept}
              >
                S&apos;inscrire
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default Signup
