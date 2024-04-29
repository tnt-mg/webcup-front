import { ErrorMessage, Field } from "formik"
import { useCallback, useEffect, useState } from "react"
import { strapiService } from "../../../api/strapiService"
import { DropBoxUploader } from "../upload/DropBoxUploader"

const ErrorWrapper = ({ children }: any) => {
  return <span className="text-xs tracking-wider text-red-500">{children}</span>
}

const Input = {
  ShortText: ({ label, name, type }: any) => {
    return (
      <>
        <div className="relative z-0 group my-2">
          <Field
            type={type}
            id={name}
            className="input-floating border-current/50 focus:border-current !text-current peer"
            placeholder=" "
            name={name}
          />
          <label
            htmlFor={name}
            className="label-floating text-current peer-focus:text-current capitalize"
          >
            {label ?? name}
          </label>
          <ErrorMessage component={ErrorWrapper} name={name} />
        </div>
      </>
    )
  },
  LongText: ({ label, name }: any) => {
    return (
      <>
        <div className="relative z-0 group my-2">
          <Field
            id={name}
            className="w-full input-floating border-current/50 focus:border-current !text-current peer"
            placeholder=" "
            rows={3}
            as="textarea"
            name={name}
          />
          <label
            className="label-floating text-current peer-focus:text-current capitalize mt-2 pb-3 text-xs"
            htmlFor={name}
          >
            {label ?? name}
          </label>
          <ErrorMessage component={ErrorWrapper} name={name} />
        </div>
      </>
    )
  },
  Number: ({ label, name }: any) => {
    return (
      <>
        <div className="relative z-0 group my-2 mt-3">
          <Field
            type="number"
            id={name}
            className="w-full input-floating border-current/50 focus:border-current !text-current peer"
            placeholder=" "
            min={0}
            name={name}
          />
          <label
            htmlFor={name}
            className="label-floating text-current peer-focus:text-current capitalize mt-2"
          >
            {label ?? name}
          </label>
          <ErrorMessage component={ErrorWrapper} name={name} />
        </div>
      </>
    )
  },
  Date: ({ label, name }: any) => {
    return (
      <>
        <label className="block text-sm font-bold my-2" htmlFor={name}>
          {label ?? name}
        </label>
        <Field
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          type="date"
          name={name}
        />
        <ErrorMessage component={ErrorWrapper} name={name} />
      </>
    )
  },
  Datetime: ({ label, name }: any) => {
    return (
      <>
        <label className="block text-sm my-2 mt-3" htmlFor={name}>
          {label ?? name}
        </label>
        <Field
          id={name}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          type="datetime-local"
          name={name}
        />
        <ErrorMessage component={ErrorWrapper} name={name} />
      </>
    )
  },
  Bool: ({ label, name }: any) => {
    return (
      <>
        {/* <label className="relative inline-flex items-center cursor-pointer mt-5 mb-3">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
        </label> */}

        <div>
          <label className="block text-sm my-2" htmlFor={name}>
            {label ?? name}
          </label>
          <Field
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400 toggle"
            type="checkbox"
            name={name}
          />
          <ErrorMessage component={ErrorWrapper} name={name} />
        </div>
      </>
    )
  },
  Select: ({
    label,
    name,
    options,
    empty = "...",
  }: {
    options: { label: any; value?: any }[]
    label?: any
    name: any
    empty?: any
  }) => {
    return (
      <>
        {/* <label htmlFor="underline_select" className="sr-only">Underline select</label>
        <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
        </select> */}
        <label htmlFor={name} className="block text-sm mt-2">
          {label ?? name}
        </label>

        <Field
          id={name}
          className="w-full block py-2.5 px-0 text-sm text-current bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          as="select"
          name={name}
        >
          <option value=""> {empty} </option>
          {options.map((option: any, index: number) => (
            <option
              key={`${option.value}-${index}`}
              value={option.value ?? option.label}
            >
              {option.label}
            </option>
          ))}
        </Field>
        <ErrorMessage component={ErrorWrapper} name={name} />
      </>
    )
  },
  RelationSelect: ({
    label,
    optionLabelFunc = JSON.stringify,
    contentType,
    name,
    empty = "...",
  }: any) => {
    const [data, setData] = useState<any[]>([])
    useEffect(() => {
      strapiService.find(contentType).then(({ data }: any) => {
        setData(data)
      })
    }, [])
    return (
      <>
        <label className="block text-sm font-bold my-2" htmlFor={name}>
          {label ?? name}
        </label>
        <Field
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400   "
          as="select"
          name={name}
        >
          <option value=""> {empty} </option>
          {data.map((option: any, index: number) => (
            <option key={`${contentType}-${index}`} value={option.id}>
              {optionLabelFunc(option)}
            </option>
          ))}
        </Field>
        <ErrorMessage component={ErrorWrapper} name={name} />
      </>
    )
  },
  Upload: ({ label, name, override }: any) => {
    const handleDrop = useCallback((file: any) => {
      override.current[name] = file
    }, [])
    return (
      <>
        <label className="block text-sm font-bold my-2" htmlFor={name}>
          {label ?? name}
        </label>
        <div className="w-full">
          <DropBoxUploader onDrop={handleDrop} />
        </div>
      </>
    )
  },
}

export default Input
