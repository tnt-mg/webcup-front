import { useEffect, useRef, useState } from "react"

function Weather() {
  const [weatherData, setWeatherData] = useState<any>(null)
  const init = useRef(false)
  const currentDate = new Date().toISOString().slice(0, 10)
  const city = "Tananarive"
  const apiKey = "e88fd6b80ca04b799d565527230504"

  useEffect(() => {
    if (init.current) {
      return
    }
    init.current = true
    fetch(
      `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${apiKey}&q=${city}&format=json&num_of_days=1&date=${currentDate}&tp=24&lang=en&tz=GMT%2B03:00`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  if (!weatherData || weatherData?.data?.error) {
    return <></>
  }
  return (
    <div className="flex items-center gap-2">
      {/*  <svg className="w-5 sm:w-10 fill-current" viewBox="0 0 512 512">*/}
      {/*    <g>*/}
      {/*      <path*/}
      {/*        d="M212.969,278.609c15.938-44.594,56.344-76.75,103.688-82.141c-15.469-44.016-57.375-75.5-106.656-75.5*/}
      {/*c-62.438,0-113.109,50.594-113.109,113.047c0,29.781,11.531,56.859,30.375,77.078c21.672-20.156,50.734-32.547,82.672-32.547*/}
      {/*C210.938,278.547,211.906,278.609,212.969,278.609z"*/}
      {/*      />*/}
      {/*      <rect x="193.516" y="24.047" width="32.938" height="63.406" />*/}
      {/*      <polygon points="117.984,118.734 73.156,73.906 49.859,97.188 94.688,142.031 	" />*/}
      {/*      <rect y="217.563" width="63.406" height="32.938" />*/}
      {/*      <path*/}
      {/*        d="M49.859,370.844l23.266,23.328l17.578-17.594c2.766-14.109,7.969-27.344,15.219-39.266l-11.266-11.266*/}
      {/*L49.859,370.844z"*/}
      {/*      />*/}
      {/*      <polygon points="370.125,97.188 346.813,73.891 302,118.734 325.281,142.031 	" />*/}
      {/*      <path*/}
      {/*        d="M422.578,304.344c-9.234-42.828-47.281-74.922-92.859-74.922c-46.063,0-84.438,32.75-93.156,76.25*/}
      {/*c-5.156-0.891-10.438-1.453-15.844-1.453c-50.75,0-91.875,41.125-91.875,91.859c0,50.75,41.125,91.875,91.875,91.875*/}
      {/*c43.359,0,156.75,0,199.406,0c50.75,0,91.875-41.125,91.875-91.875C512,346.156,472.188,305.641,422.578,304.344z"*/}
      {/*      />*/}
      {/*    </g>*/}
      {/*  </svg>*/}
      {/*  <div className="grid">*/}
      {/*    <span className="text-xs sm:text-base font-bold">*/}
      {/*      {weatherData?.data?.current_condition[0]?.temp_C}° C*/}
      {/*    </span>*/}
      {/*    <span className="text-[10px] sm:text-xs">*/}
      {/*      {weatherData?.data?.request[0]?.query}*/}
      {/*    </span>*/}
      {/*  </div>*/}
    </div>
  )
}

export default Weather
