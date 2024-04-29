import { useCallback, useEffect, useState } from "react"
import { strapiService } from "../api/strapiService"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useTranslation } from "react-i18next"
import { EpicGameCarousel } from "./HomeSections/EpicGameCarousel"
import Input from "./Components/Forms/inputs"
import ModalDialog from "./Components/GsapBtn/ModalDialog"
const cleanImage = async (user: any, router = false) => {
  if (!user?.avatar) return
  await strapiService.request("DELETE", "/upload/files/" + user?.avatar.id, {
    baseURL: window.location.origin + "/v1",
  })
  const userUpdated = await strapiService.fetchUser()
  if (userUpdated?.avatar) {
    cleanImage(userUpdated)
  }
}
const UserProfile = () => {
  const [user, setUser] = useState<any>(null)
  useEffect(() => {
    strapiService.fetchUser().then((user) => setUser(user))
  }, [])
  const onChangeAvatar = useCallback(() => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = "image/*"
    async function upload(event: any) {
      const file =
        event.target.files && event.target.files.length > 0
          ? event.target.files[0]
          : null
      if (file) {
        const formData = new FormData()
        formData.append("files", file)
        formData.append("refId", user?.id)
        formData.append("field", "avatar")
        formData.append("ref", "plugin::users-permissions.user")
        await cleanImage(user).then(async () => {
          await strapiService
            .request("POST", "/upload", {
              data: formData,
              baseURL: window.location.origin + "/v1",
            })
            .then((data) => {
              strapiService.fetchUser().then((d) => setUser(d))
            })
        })
        input.removeEventListener("change", upload)
      }
    }
    input.addEventListener("change", upload)
    input.click()
  }, [user])

  return (
    <div className="space-y-10">
      {/* avatar and name */}
      <div className="flex justify-between items-center">
        <div className="flex gap-10">
          {/* avatar */}
          <div className="flex">
            <div className="relative">
              {user?.avatar && (
                <img
                  className=""
                  src={`/v1/${user?.avatar?.formats?.thumbnail?.url}`}
                />
              )}
              {!user?.avatar && (
                <img
                  className="w-44 h-44 rounded-full"
                  src="https://i.pravatar.cc/300"
                  alt=""
                />
              )}
              <button
                type="button"
                className="absolute bottom-0 right-0"
                onClick={onChangeAvatar}
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 hover:scale-110 duration-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* info */}
          <div className="flex justify-between items-center">
            <div className="space-y-3 font-app">
              <div>
                <h1 className="text-5xl capitalize">{user?.username}</h1>
              </div>
              <div className="gap-2 flex items-center">
                <span className="text-xl">
                  {user?.lastname} {user?.firstname}
                </span>{" "}
                <span className="text-xl opacity-50">{user?.email}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ModalDialog />
        </div>
      </div>
      {/* Modify */}
      <div className="grid grid-cols-4 gap-10">
        <div className="col-span-3">
          <EpicGameCarousel />
        </div>
        <div>
          <AboutTab user={user} setUser={setUser} />
        </div>
      </div>
    </div>
  )
}

const AboutTab = ({ user, setUser }: any) => {
  if (!user) {
    return <></>
  }
  const { t } = useTranslation()
  const initialValues = {
    ...{
      lastname: "",
      firstname: "",
      email: "",
      username: "",
      oldPassword: "",
      newPassword: "",
      accept: false,
    },
    ...user,
  }
  for (const key of Object.keys(initialValues)) {
    if (initialValues[key] == null) {
      initialValues[key] = ""
    }
  }
  return (
    <div className="">
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validate={(values) => {
          const errors: any = {}
          if (!values.username) {
            errors.username = t("requiredField")
          }
          if (!values.lastname) {
            errors.lastname = t("requiredField")
          }
          if (!values.firstname) {
            errors.lastname = t("requiredField")
          }
          if (!values.email) {
            errors.email = t("requiredField")
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          strapiService
            .update("users", strapiService!.user!.id as any, values)
            .then(({ data }) => {
              setUser(data)
            })
            .finally(() => {
              setSubmitting(false)
            })
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <div className="space-y-6">
              <div className="">
                <h6 className="text-3xl text-primary font-app">
                  Vous informations
                </h6>
                <small className="italic opacity-40">
                  Tous les informations vous concernant. Vous pouvez les changer
                  à tout moment.
                </small>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="mt-2">
                  <Input.ShortText
                    label="Prénoms"
                    type="text"
                    name="lastname"
                  />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-group mt-2">
                  <Input.ShortText
                    label="Prénoms"
                    type="text"
                    name="firstname"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <div className="form-group mt-2">
                  <Input.ShortText label="Email" type="mail" name="email" />
                </div>
                <div className="form-group mt-2">
                  <Input.ShortText label="Nom d'utilisateur" name="username" />
                </div>
              </div>

              <div className="space-y-5">
                <div className="form-group mt-2">
                  <Input.ShortText
                    label="Votre ancien mot de passe"
                    type="password"
                    name="oldPassword"
                  />
                </div>
                <div className="form-group mt-2">
                  <Input.ShortText
                    label="Nouveau mot de passe"
                    type="password"
                    name="newPassword"
                  />
                </div>
              </div>

              <button
                className="btn btn-success"
                type="submit"
                disabled={isSubmitting}
              >
                {" "}
                Enregistrer les modifications{" "}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default UserProfile
