import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { strapiService } from "../../../api/strapiService"
import { useMemo, useRef } from "react"
import Input from "../../Components/Forms/inputs"
import { useNavigate } from "react-router-dom"

const TestCreate = () => {
  const navigate = useNavigate()
  const override = useRef({})
  const validationSchema = useMemo(() => {
    return Yup.object().shape({
      label: Yup.string(),
      longText: Yup.string(),
      number: Yup.number(),
      date: Yup.date(),
      bool: Yup.boolean(),
      enum: Yup.string(),
      typeTest: Yup.string(),
    })
  }, [])
  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      setSubmitting(true)
      let data = values
      if (Object.keys(override.current).length > 0) {
        data = new FormData()
        for (var key in override.current) {
          delete values[key]
          data.append(`files.${key}`, (override.current as any)[key])
        }
        data.append("data", JSON.stringify(values))
        await strapiService.request("POST", "/tests", {
          data: data,
        })
      } else {
        await strapiService.create("tests", data)
      }
      navigate("/admin/tests")
    } catch (error) {
      console.error("Error saving form data:", error)
    }
    setSubmitting(false)
  }
  return (
    <Formik
      initialValues={{
        label: "",
        longText: "",
        number: 0,
        date: "",
        bool: false,
        enum: "",
        image: "",
        typeTest: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Input.ShortText name="label" label="label" />
          </div>
          <div>
            <Input.LongText name="longText" label="longText" />
          </div>
          <div>
            <Input.Number name="number" label="number" />
          </div>
          <div>
            <Input.Datetime name="date" label="date" />
          </div>
          <div>
            <Input.Bool name="bool" label="bool" />
          </div>
          <div>
            <Input.Select options={[]} name="enum" label="enum" />
          </div>
          <div>
            <Input.Upload override={override} name="image" label="image" />
          </div>
          <div>
            <Input.RelationSelect
              contentType="type-test"
              optionLabelFunc={(d: any) => d.label || d.name}
              name="typeTest"
              label="typeTest"
            />
          </div>
          <div className="flex justify-end mt-5">
            <button className="btn" type="submit" disabled={isSubmitting}>
              Créer
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
export default TestCreate
