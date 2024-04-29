import { useCallback, useEffect, useState } from "react"
import AnimatedList from "../Components/AnimatedList"
import { strapiService } from "../../api/strapiService"
import AnimatedPage from "../../AnimatedPage"
function Offers() {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchList()
  }, [])
  const fetchList = useCallback(async () => {
    setLoading(true)
    return strapiService
      .find("feedbacks", {
        pagination: {
          page: 1,
          pageSize: 25,
        },
        populate: "*",
      })
      .then(({ data, meta }: any) => {
        setData(data)
        setLoading(false)
      })
  }, [])
  return (
    <AnimatedPage>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-auto sm:h-[80vh] py-20 sm:py-5 space-y-10 sm:space-y-0">
        <div className="">
          <div>
            <h1 className="text-3xl font-app">Astuces</h1>
          </div>
          <div className="flex">
            <AnimatedList />
          </div>
        </div>
        <div className="space-y-5">
          <div>
            <h1 className="text-3xl font-app">Les feedbacks</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {data.map(({ email, star, comment }, index) => (
              <div
                key={index}
                className="bg-base-100 p-4 rounded-lg shadow-md space-y-3"
              >
                <div className="flex items-center space-x-4" id="profile">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://i.pravatar.cc/300"
                    alt="User photo"
                  />
                  <div>
                    <p className="font-semibold text-lg">{email}</p>
                    <div className="text-gray-500 text-sm">
                      <div className="rating">
                        {[...Array(5).keys()].map((index: any) => (
                          <input
                            key={index}
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked={index + 1 === star}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="px-5 pb-2 relative bg-base-200 rounded-lg"
                  id="comment"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="w-3 h-3 -translate-y-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <path
                      className="fill-base-200"
                      d="M8 1.25a2.101 2.101 0 00-1.785.996l.64.392-.642-.388-5.675 9.373-.006.01a2.065 2.065 0 00.751 2.832c.314.183.67.281 1.034.285h11.366a2.101 2.101 0 001.791-1.045 2.064 2.064 0 00-.006-2.072L9.788 2.25l-.003-.004A2.084 2.084 0 008 1.25z"
                    />
                  </svg>
                  <div className="absolute top-0 right-0 mt-2 mr-3">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-base"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="mt-4 text-base">{comment} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Offers
