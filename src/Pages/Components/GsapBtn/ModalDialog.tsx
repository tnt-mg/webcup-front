import React, { useState } from "react"
import "/src/assets/Css/modaldialog.scss"
import { SendBtn } from "./SendBtn"
import { Field, Form, Formik } from "formik"
import { strapiService } from "../../../api/strapiService"
import Input from "../Forms/inputs"

type Props = {
  buttonClick: () => void
  open: boolean
  bodyText: string
  buttonName: string
}

const Button: React.FC<Props> = ({
  buttonClick,
  open,
  bodyText,
  buttonName,
}: any) => (
  <div>
    <Modal open={open} buttonClick={buttonClick} bodyText={bodyText} />
    <button
      className="cursor-pointer text-left bg-info font-app rounded-box border-none px-5 text-xl text-base-100 h-14 w-[100px] sm:w-[180px]"
      onClick={buttonClick}
    >
      {buttonName}
    </button>
  </div>
)

type ModalProps = {
  open: boolean
  buttonClick: () => void
  bodyText: string
}

const Modal: React.FC<ModalProps> = ({ open, buttonClick, bodyText }) => (
  <div
    className={
      open
        ? "inner-modal z-20 bg-base-100 inner-modal-open -translate-x-[22%] sm:translate-x-0 -translate-y-[100%] shadow-sm bg-base-200 !rounded-2xl p-5"
        : "inner-modal z-20 bg-base-100"
    }
  >
    <Content open={open} buttonClick={buttonClick} bodyText={bodyText} />
  </div>
)

type ContentProps = {
  open: boolean
  buttonClick: () => void
  bodyText: string
}

const Content: React.FC<ContentProps> = ({ open, buttonClick, bodyText }) => (
  <div
    className={
      open
        ? "content-wrapper content-open relative z-20"
        : "content-wrapper z-20"
    }
  >
    {/* exit button */}
    <div className="absolute top-0 right-0">
      <svg
        onClick={buttonClick}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>

    {/* content */}
    <div className="px-5 space-y-5">
      <p className="font-app text-lg">{bodyText}</p>
      <Formik
        initialValues={{
          email: "",
          comment: "",
          star: "3",
        }}
        onSubmit={async (values, { resetForm }) => {
          await strapiService
            .create("feedbacks", { ...values, star: Number(values.star) })
            .then(() => {
              setTimeout(() => {
                buttonClick()
                resetForm()
              }, 1500)
            })
        }}
      >
        {({ isSubmitting, submitForm }) => (
          <Form>
            <div className="space-y-5">
              <div className="space-y-8">
                <div className="relative z-0 group my-2">
                  <Input.ShortText label="Email" name="email" type="mail" />
                </div>
                <div className="relative z-0 group my-2">
                  <Field
                    type="text"
                    as="textarea"
                    name="comment"
                    className="input-floating border-current/50 focus:border-current !text-current peer"
                    placeholder=""
                  />
                  <label className="label-floating text-current peer-focus:text-current capitalize">
                    Comment
                  </label>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <SendBtn toLaunch={submitForm} />
                </div>
                <div>
                  <h1 className="text-lg font-app">Note</h1>
                  <div className="rating">
                    <Field
                      type="radio"
                      name="star"
                      value="1"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <Field
                      type="radio"
                      name="star"
                      value="2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <Field
                      type="radio"
                      name="star"
                      value="3"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <Field
                      type="radio"
                      name="star"
                      value="4"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <Field
                      type="radio"
                      name="star"
                      value="5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </div>
)

const ModalDialog = () => {
  const [open, setOpen] = useState(false)
  const bodyText = "Envoie de retour pour amélioration du service "
  const buttonName = "Feedback"

  const handleButtonClick = () => {
    setOpen(!open)
  }
  return (
    <div>
      <Button
        buttonClick={handleButtonClick}
        open={open}
        bodyText={bodyText}
        buttonName={buttonName}
      />
    </div>
  )
}

export default ModalDialog
