import { ErrorMessage, Field, Form, Formik } from "formik"
import { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import { Link, useNavigate } from "react-router-dom"
import AnimatedPage from "../AnimatedPage"
import { strapiService } from "../api/strapiService"
function Login() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const ref_model = useRef() as any

  const handlePreLogin = (zoom: any, x: any) => {
    ref_model.current.preLogin(zoom, x)
  }

  const isLoggedIn = !!strapiService.getToken()
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/admin", { replace: true })
    }
  }, [isLoggedIn])

  return (
    <AnimatedPage>
      <div className="grid sm:grid-cols-2">
        <div className="sm:flex justify-center items-center hidden">
          <h1 className="text-3xl font-app">Sary tay be</h1>
        </div>
        <div className="h-screen flex justify-center items-center">
          <Formik
            initialValues={{ identifier: "", password: "" }}
            validate={(values) => {
              const errors: any = {}
              if (!values.identifier) {
                errors.identifier = t("requiredField")
              }
              if (!values.password) {
                errors.password = t("requiredField")
              }
              return errors
            }}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              console.log("VALUE", values)
              strapiService
                .login(values)
                .then(() => {
                  navigate("/admin", { replace: true })
                  // setStateLog("success")
                })
                .catch(({ error }: any) => {
                  // setStateLog("error")
                  console.log("ERROR", error)
                  if (error.message) {
                    const errorMsg = error.message
                    if (errorMsg === "Invalid identifier or password") {
                      setFieldError("password", t("credentialsError") as any)
                    } else if (
                      errorMsg === "Your account email is not confirmed"
                    ) {
                      setFieldError("password", t("accountNotConfirmed") as any)
                    }
                  }
                })
                .finally(() => {
                  setSubmitting(false)
                })
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex items-center h-2/3 sm:w-1/2">
                <div>
                  <div className="text-center my-8">
                    <h1 className="font-app text-6xl">Log into your dream</h1>
                  </div>
                  <div className="space-y-8 flex flex-col items-center mb-14">
                    <div className="relative z-0 group w-2/3">
                      <Field
                        onFocus={() => handlePreLogin(5, -10)}
                        onBlur={() => handlePreLogin(1, -3)}
                        type="text"
                        name="identifier"
                        id="floating_email"
                        className="input-floating border-current/50 focus:border-current !text-current peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_email"
                        className="label-floating font-semibold text-current peer-focus:text-current"
                      >
                        Username
                      </label>
                      <ErrorMessage name="identifier">
                        {(msg) => <small className="text-red-500">{msg}</small>}
                      </ErrorMessage>
                    </div>
                    <div className="relative z-0 group w-2/3">
                      <Field
                        onFocus={() => handlePreLogin(5, -10)}
                        onBlur={() => handlePreLogin(1, -3)}
                        type="password"
                        name="password"
                        id="floating_pwd"
                        className="input-floating border-current/50 focus:border-current !text-current peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_pwd"
                        className="label-floating font-semibold text-current peer-focus:text-current"
                      >
                        Password
                      </label>
                      <ErrorMessage name="password">
                        {(msg) => <small className="text-red-500">{msg}</small>}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="flex justify-center my-8">
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <button
                          type="submit"
                          className="btn btn-primary btn-sm sm:btn-md"
                          disabled={isSubmitting}
                        >
                          Login
                        </button>
                        <Link to="/" className="btn btn-sm sm:btn-md">
                          Go back
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-app">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Login
