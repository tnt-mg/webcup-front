import { lazy, useCallback, useEffect, useState } from "react"
import { strapiService } from "../../../api/strapiService"
import { Link } from "react-router-dom"
import Label from "../../Components/Forms/labels"
import Input from "../../Components/Forms/inputs"
import Button from "../../Components/Forms/buttons"
import { Pagination } from "../../Components/Forms/paginations"

const TestList = () => {
  const [data, setData] = useState<any[]>([])
  const [meta, setMeta] = useState<any>(null)
  const [page, setPage] = useState<number>(1)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetchList()
  }, [page])
  const fetchList = useCallback(async () => {
    setLoading(true)
    return strapiService
      .find("tests", {
        pagination: {
          page: page,
          pageSize: 10,
        },
        populate: "*",
      })
      .then(({ data, meta }: any) => {
        setData(data)
        setMeta(meta)
        setLoading(false)
      })
  }, [page])
  return (
    <div>
      <div className="flex justify-end">
        <Link className="btn" to="/admin/tests/create">
          Create
        </Link>
      </div>
      <div>
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-base-200">
            <tr>
              <th scope="col" className="px-6 py-3 capitalize">
                label
              </th>
              <th scope="col" className="px-6 py-3 capitalize">
                longText
              </th>
              <th scope="col" className="px-6 py-3 capitalize">
                number
              </th>
              <th scope="col" className="px-6 py-3 capitalize">
                date
              </th>
              <th scope="col" className="px-6 py-3 capitalize">
                bool
              </th>
              <th scope="col" className="px-6 py-3 capitalize">
                enum
              </th>
              <th scope="col" className="px-6 py-3 capitalize">
                image
              </th>
              <th scope="col" className="px-6 py-3 capitalize">
                typeTest
              </th>
              <th scope="col" className="px-6 py-3">
                actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={`${item.id}-${index}`}>
                    <td>
                      <Label.Text value={item.label} />
                    </td>
                    <td>
                      <Label.Text value={item.longText} />
                    </td>
                    <td>
                      <Label.Number value={item.number} />
                    </td>
                    <td>
                      <Label.Date value={item.date} />
                    </td>
                    <td>
                      <Label.Bool value={item.bool} />
                    </td>
                    <td>
                      <Label.Text value={item.enum} />
                    </td>
                    <td>
                      <Label.File value={item.image} />
                    </td>
                    <td>
                      <Label.Relation value={item.typeTest} />
                    </td>
                    <td>
                      {/* <Button.Show id={item.id} contentType="tests" /> */}
                      <Button.Edit id={item.id} contentType="tests" />
                      <Button.Delete
                        id={item.id}
                        contentType="tests"
                        onChange={fetchList}
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          )}
        </table>
        {loading && (
          <div className="w-full text-center flex items-center justify-center min-h-[100px]">
            <div>
              <div aria-label="Loading..." role="status">
                <svg className="h-8 w-8 animate-spin" viewBox="3 3 18 18">
                  <path
                    className="fill-gray-200"
                    d="M12 5C8.13401 5 5 8.13401 5 12c0 3.866 3.13401 7 7 7 3.866.0 7-3.134 7-7 0-3.86599-3.134-7-7-7zM3 12c0-4.97056 4.02944-9 9-9 4.9706.0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9-4.97056.0-9-4.0294-9-9z"
                  />
                  <path
                    className="fill-gray-800"
                    d="M16.9497 7.05015c-2.7336-2.73367-7.16578-2.73367-9.89945.0-.39052.39052-1.02369.39052-1.41421.0-.39053-.39053-.39053-1.02369.0-1.41422 3.51472-3.51472 9.21316-3.51472 12.72796.0C18.7545 6.02646 18.7545 6.65962 18.364 7.05015c-.390599999999999.39052-1.0237.39052-1.4143.0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <Pagination meta={meta} onPageChanged={setPage} />
      </div>
    </div>
  )
}

export default TestList
