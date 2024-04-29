import {
  FirstPersonControls,
  Html,
  OrbitControls,
  PointerLockControls,
} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { BlockWrapper } from "./components/BlockWrapper"
import { DragPlaceholder } from "./components/DragPlaceholder"
import { Grass } from "./components/Grass"
import { Grid } from "./components/Grid"
import { useCallback, useContext, useEffect, useRef, useState } from "react"
import { blockList } from "../../assets/3D/city/blockList"
import { Vector2 } from "three"
import { Physics } from "@react-three/cannon"
import Floor from "./components/Floor"
import BaseCharacter from "./components/BaseCharacter"
import BuildingSvg from "../Components/Icons/BuildingSvg"
import { Pie } from "react-chartjs-2"
import introJs from "intro.js"
import { HomeLoaded } from "../../App"
import { useTranslation } from "react-i18next"
import useMediaQuery from "../../utils/mediaquery/useMediaQuery"

const BLOCK_COUNT = 10
const TYPES_GRASS = ["sand", "grass", "snow"]

const cities: any = {
  sand: ["Dubai", "Egypte", "Afghanistan"],
  grass: ["Suisse", "Luxembourg", "Singapour"],
  snow: ["Japon", "Russia", "Canada"],
}

export var colors = [
  "#fb8072",
  "#80b1d3",
  "#fdb462",
  "#b3de69",
  "#8dd3c7",
  "#ffffb3",
  "#bebada",
  "#fccde5",
  "#d9d9d9",
  "#bc80bd",
  "#ccebc5",
  "#ffed6f",
]

function generatePartition(parts: number) {
  var partition = []
  var remainingSum = 100 * 100 // Multiply by 100 to work with integer values

  for (var i = 1; i < parts; i++) {
    var max = remainingSum - (parts - i - 1)
    var value = Math.floor(Math.random() * max) + 1
    partition.push(value)
    remainingSum -= value
  }

  partition.push(remainingSum)
  return partition.map(function (value) {
    return Number((value / 100).toFixed(2)) // Divide by 100 and format to 2 decimal places
  })
}

function calculateDuration(count: number) {
  if (count <= 2) {
    return 1
  } else if (count <= 5) {
    return Math.round(Math.random() * 3 + 2)
  } else if (count > 5) {
    return Math.round(Math.random() * 20 + 5)
  }
}

const City = () => {
  const { t } = useTranslation()
  const dragPlaceholderRef = useRef<any>()
  const [fpsMode, setFpsMode] = useState(false)
  const grassRef = useRef<any>()
  const [lock, setLock] = useState(false)
  const [grassType, setGrassType] = useState("grass")
  const [buildings, setBuildings] = useState<any>([])
  const { loaded } = useContext(HomeLoaded)

  const [analysis, setAnalysis] = useState<any>({ partitions: [], duration: 0 })

  const handleAnalyserReve = useCallback(() => {
    const partitions = generatePartition(cities[grassType].length)
    const duration = calculateDuration(buildings.length)
    console.log(buildings.length)
    setAnalysis({ partitions, duration })
  }, [grassType, buildings])

  const onLock = useCallback(() => {
    setLock(true)
  }, [])
  const onUnlock = useCallback(() => {
    setLock(false)
  }, [])
  const handleChangeFPS = useCallback((event: any) => {
    event.stopPropagation()
    setFpsMode((fps) => !fps)
  }, [])
  const onDragOver = useCallback(
    (event: any) => {
      event.preventDefault()
      dragPlaceholderRef.current.onDragOver(event)
    },
    [dragPlaceholderRef.current]
  )
  const onDrop = useCallback(
    (event: any) => {
      if (dragPlaceholderRef.current.shouldAdd()) {
        const position = dragPlaceholderRef.current.position()
        const model = event.dataTransfer.getData("Text")
        setBuildings([...buildings, { model, position }])
      }
      dragPlaceholderRef.current.hide()
    },
    [dragPlaceholderRef.current]
  )
  const onDragStart = useCallback((event: DragEvent) => {
    const target = event.currentTarget
    event.dataTransfer?.setData(
      "Text",
      (target as any)!.getAttribute("data-drag") ?? "data"
    )
  }, [])

  // * intro JS
  useEffect(() => {
    if (loaded) {
      introJs()
        .setOptions({
          nextLabel: " Suivant ",
          prevLabel: " Précédent ",
          doneLabel: " Terminer ",
          // dontShowAgain: true, // TODO MILA ACTIVENA AMINY FARANY
          showBullets: false,
          steps: [
            {
              title: "Bienvenue sur le simulateur 3D",
              intro: "Laissez-nous vous faire explorer notre simulateur",
            },
            {
              title: "Les saisons",
              intro:
                "Changer les saisons pour voir les différents types de villes selon votre rêve.",
              element: document.querySelector(".templateSeason"),
            },
            {
              title: "Les maisons",
              intro:
                "Sélectionner les types de batiments que vous avez vue dans votre rêve.",
              element: document.querySelector(".templateAsset"),
            },
            {
              title: "Mode de jeux",
              intro:
                "Activer pour pouvoir enter et se balader pour vous immerger (pas disponible sur mobile).",
              element: document.querySelector(".templateMode"),
            },
            {
              title: "Analyser",
              intro: "Donner une prédiction selon votre rêve.",
              element: document.querySelector(".templateAnalyse"),
            },
          ],
        })
        .start()
    }
  }, [loaded])

  // * is mobile
  const isMobile = useMediaQuery("(max-width: 600px)")
  return (
    <div className="px-10 py-10 space-y-5">
      {/* Title */}
      <div className="grid grid-cols-1 sm:grid-cols-3 space-y-2 sm:space-y-0 border-b-2 pb-4">
        {/* MODE */}
        <div className="flex items-center gap-2 templateMode">
          <div className="flex gap-1 items-center">
            <label className="text-sm font-app">
              {fpsMode ? "Mode navigation" : "Mode construction"}
            </label>
            <input
              className="toggle"
              name="fps"
              type="checkbox"
              disabled={isMobile ? true : false}
              onChange={handleChangeFPS}
            />
          </div>
          <span className="text-xs italic hidden sm:block">
            {t("switchMode")}
          </span>
          <span className="text-xs italic sm:hidden block">
            {t("phonenotdispo")}
          </span>
        </div>
        <div>
          <div className="flex">
            <p className="font-app opacity-80 first-letter:text-2xl text-center">
              {t("desc_city")}
            </p>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end items-center">
          <div data-xt-overlay="{ duration: 500 }">
            <button
              onClick={handleAnalyserReve}
              disabled={buildings.length === 0}
              type="button"
              className="btn btn-secondary text-white font-app templateAnalyse"
              data-xt-overlay-element
            >
              {t("analyse")}
            </button>
            <div
              aria-label="Modal"
              className="xt-overlay group"
              data-xt-overlay-target
            >
              <div className="xt-backdrop z-below bg-gray-900 opacity-0 transition-opacity duration-300 ease-in-out-quint group-in:delay-200 group-in:ease-out-quint group-in:opacity-25"></div>
              <div className="xt-overlay-container p-0 w-screen max-w-md ml-0 mr-auto">
                <div className="xt-overlay-inner">
                  <div className="xt-design shadow-xl opacity-0 scale-50 group-in:transition group-in:duration-500 group-in:opacity-100 group-in:scale-100 group-out:transition group-out:duration-300 group-out:delay-200 group-out:ease-in-out-quint"></div>
                  <div className="xt-card text-current xt-links-inverse opacity-0 translate-y-2 group-in:transition group-in:duration-500 group-in:delay-200 group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-quint group-out:-translate-y-2">
                    <div className="h-screen bg-base-100">
                      {/* result */}
                      <div>
                        {analysis.partitions.length > 0 && (
                          <div className="p-8 space-y-5">
                            <div>
                              <h1 className="font-app text-3xl text-center">
                                {t("drap")}
                              </h1>
                            </div>
                            <div className="text-sm text-center opacity-75 font-app">
                              {t("dream_real")}{" "}
                              <span className="text-lg text-info">
                                {analysis.duration} ans
                              </span>
                            </div>
                            <div className="w-full h-60 flex justify-center">
                              <Pie
                                data={{
                                  labels: cities[grassType],
                                  datasets: [
                                    {
                                      label: "Probabilité",
                                      data: analysis.partitions,
                                      backgroundColor: colors,
                                    },
                                  ],
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* city builder */}
      <div className="flex h-auto sm:h-[75vh]">
        {/* grass types */}
        <div className="py-2 space-y-5 w-1/12 p-5 ">
          <div className="sm:text-2xl text-lg font-asap-menu text-current font-bold text-center">
            Season
          </div>
          <div className="flex flex-col gap-2 card shadow templateSeason">
            {TYPES_GRASS.map((d, index) => (
              <span
                className="p-4 flex justify-center group cursor-pointer hover:scale-125 duration-200"
                onClick={() => setGrassType(d)}
                key={index}
              >
                <div className="space-y-2 text-center">
                  <div className="flex justify-center">
                    {d === "grass" ? (
                      <svg
                        className={
                          (grassType === "grass" && "!fill-green-500 ") +
                          " fill-current w-18 group-hover:fill-green-500 duration-300"
                        }
                        viewBox="0 0 512 512"
                      >
                        <g>
                          <path
                            d="M509.931,306.387c-4.223-8.957-13.958-13.901-23.679-12.012c-19.742,3.827-40.243,11.165-61.203,21.886
                          c29.326-47.098,55.604-81.421,56.079-82.037c3.334-4.412,5.212-6.784,5.229-6.806c6.16-7.751,6.278-18.668,0.285-26.55
                          c-5.994-7.884-16.546-10.692-25.659-6.82c-22.151,9.394-44.233,23.893-65.929,43.208c21.605-54.219,40.623-90.199,40.814-90.561
                          c4.654-8.74,2.787-19.497-4.538-26.16c-7.323-6.663-18.21-7.505-26.474-2.049c-25.234,16.666-48.887,41.186-70.451,72.996
                          c10.247-51.647,20.677-86.116,20.789-86.482c2.897-9.467-0.796-20.003-9.451-24.811c-10.831-6.015-22.17-0.801-26.377,3.046
                          c-35.738,32.675-62.113,102.385-62.693,103.958c-0.533-1.506-29.82-74.576-60.387-104.014c-7.136-6.873-17.65-8.385-26.043-3.191
                          c-8.247,5.102-12.083,15.242-9.329,24.66c0.114,0.388,11.008,37.994,21.163,93.876c-22.758-35.114-47.942-61.93-74.932-79.755
                          c-8.262-5.46-19.148-4.615-26.473,2.049c-7.324,6.662-9.19,17.42-4.513,26.209c0.39,0.72,20.136,37.483,41.821,91.405
                          c-22.027-19.774-44.459-34.558-66.96-44.101c-9.117-3.867-19.668-1.063-25.661,6.821c-5.993,7.881-5.874,18.798,0.286,26.549
                          c0.263,0.331,36.711,47.169,60.716,88.277c-20.753-10.556-41.057-17.809-60.611-21.6c-9.721-1.895-19.459,3.053-23.68,12.01
                          c-4.222,8.955-1.835,19.609,5.798,25.904c0.327,0.271,33.234,27.568,75.31,71.16c5.123,5.307,10.235,10.719,15.301,16.176H54.92
                          c-4.199,0-7.604,3.403-7.604,7.604s3.404,7.604,7.604,7.604h60.829h0.001c0,0,8.184,0.279,7.774-7.322
                          c-0.338-6.263-20.121-25.003-29.405-34.624c-42.731-44.277-76.233-72.047-76.572-72.326c-2.267-1.871-2.976-5.032-1.722-7.691
                          c1.253-2.657,4.143-4.129,7.029-3.565c25.196,4.885,51.918,16.031,79.433,33.114c17.256,29.558,32.729,59.138,46.167,88.276
                          c1.243,2.693,3.938,4.418,6.905,4.418h23.082c2.183,0,4.26-0.938,5.704-2.575c1.444-1.637,2.114-3.817,1.84-5.982
                          C168.269,286.38,90.317,141.232,89.558,139.832c-1.381-2.594-0.826-5.787,1.348-7.765c2.175-1.978,5.431-2.266,7.857-0.609
                          c47.742,32.61,76.806,78.571,90.097,108.554c7.565,52.066,13.677,118.721,9.849,185.061c-0.066,0.678-0.625,9.438,7.466,9.673
                          l125.31,0.084c3.691,0,6.85-2.65,7.489-6.286c10.3-58.539,27.605-114.371,43.199-157.418
                          c27.835-29.805,56.342-51.033,84.748-63.079c2.703-1.148,5.837-0.315,7.615,2.024c1.779,2.341,1.745,5.581-0.082,7.88
                          c-0.019,0.022-84.287,107.149-123.112,206.446c-0.92,2.351-0.655,4.999,0.759,7.09c1.414,2.092,3.773,3.344,6.298,3.344h80.431
                          c4.2,0,7.604-3.403,7.604-7.604s-3.404-7.604-7.604-7.604h-25.309c5.063-5.452,10.174-10.864,15.301-16.176
                          c41.953-43.463,74.985-70.891,75.304-71.155C511.765,325.996,514.153,315.341,509.931,306.387z M130.549,272.172
                          c0.171,0.185,0.35,0.359,0.534,0.522c16.065,44.315,31.286,95.915,38.658,147.213h-9.529
                          c-17.756-37.985-38.875-76.649-62.816-114.995c-32.828-52.581-59.582-86.342-59.846-86.675c-1.829-2.301-1.863-5.542-0.085-7.881
                          c1.779-2.341,4.91-3.172,7.617-2.025C73.731,220.483,102.487,241.961,130.549,272.172z M214.23,419.578
                          c3.943-81.387-6.385-162.35-15.898-216.543c-10.7-60.956-22.702-102.245-22.821-102.653c-0.841-2.876,0.283-5.944,2.733-7.46
                          c2.307-1.423,5.262-1.052,7.189,0.911c22.084,22.495,40.707,54.158,55.353,94.106c2.716,7.408,5.328,15.218,7.78,23.219
                          c-26.53,84.204-30.659,190.003-30.955,208.434L214.23,419.578z M232.819,419.624c0.293-18.076,1.973-66.181,11.26-121.978
                          c6.857-41.197,16.463-78.11,28.552-109.712c15.253-39.875,34.561-71.448,57.388-93.844c1.208-1.185,4.219-2.85,7.829-0.904
                          c2.587,1.394,3.665,4.554,2.804,7.372c-0.127,0.415-12.751,42.1-23.963,102.56c-10.043,54.155-21.052,135.086-17.379,216.507
                          H232.819z M325.129,419.625h-10.591c-3.129-67.788,4.153-135.419,12.477-187.051c0.214-0.284,41.773-78.388,86.219-101.396
                          c2.613-1.352,5.685-1.371,7.859,0.608c2.175,1.979,2.727,5.171,1.345,7.767C422.239,139.934,357.385,245.177,325.129,419.625z
                           M494.442,320.568c-1.37,1.133-34.023,28.247-76.564,72.319c-8.426,8.729-16.827,17.713-25.005,26.738h-23.087
                          c11.203-26.132,25.104-52.479,39.25-76.79v-0.001c27.754-17.323,54.706-28.604,80.111-33.529c2.878-0.557,5.774,0.906,7.028,3.567
                          C497.428,315.529,496.719,318.691,494.442,320.568z"
                          />
                        </g>
                      </svg>
                    ) : d === "sand" ? (
                      <svg
                        className={
                          (grassType === "sand" && "!fill-amber-600 ") +
                          " fill-current w-18 group-hover:fill-amber-600 duration-300"
                        }
                        viewBox="0 0 431 431"
                      >
                        <g>
                          <path
                            d="M301.5,123c22.883,0,41.5-18.617,41.5-41.5S324.383,40,301.5,40S260,58.617,260,81.5S278.617,123,301.5,123z M301.5,55
      c14.612,0,26.5,11.888,26.5,26.5S316.112,108,301.5,108S275,96.112,275,81.5S286.888,55,301.5,55z"
                          />
                          <path
                            d="M423.5,258h-64.674v-35h13.81c4.143,0,7.5-3.358,7.5-7.5v-28.087c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5V208h-6.31
      v-25.109c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5V208H339v-15.63c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v23.13
      c0,4.142,3.357,7.5,7.5,7.5h12.326v35h-104.46c-11.434,0-21.977-4.736-28.926-12.994C203.483,236.741,193.3,232,182.5,232
      c-10.799,0-20.983,4.741-27.941,13.007C147.609,253.264,137.067,258,125.634,258H63v-35h14.5c4.143,0,7.5-3.358,7.5-7.5v-34
      c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5V208h-7v-42.5c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v8.5h-9v-20.5
      c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v28c0,4.142,3.357,7.5,7.5,7.5H48v69H7.5c-4.143,0-7.5,3.358-7.5,7.5
      s3.357,7.5,7.5,7.5h118.134c15.87,0,30.596-6.683,40.4-18.334c4.102-4.872,10.103-7.666,16.466-7.666s12.364,2.794,16.464,7.666
      C208.771,266.317,223.496,273,239.366,273H423.5c4.143,0,7.5-3.358,7.5-7.5S427.643,258,423.5,258z"
                          />
                          <path
                            d="M109,327.224c0-4.142-3.357-7.5-7.5-7.5h-9.501c2.787-9.919,0.285-21.025-7.504-28.815
      c-11.475-11.474-30.144-11.474-41.62,0c-7.789,7.79-10.291,18.896-7.504,28.815H21.5c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5
      h80C105.643,334.724,109,331.366,109,327.224z M53.481,301.515c5.626-5.626,14.78-5.626,20.406,0
      c4.942,4.942,5.539,12.605,1.799,18.209H51.684C47.943,314.12,48.54,306.457,53.481,301.515z"
                          />
                          <path
                            d="M390.055,350h-16.076c1.587-4.143,2.417-8.585,2.417-13.154c0-9.806-3.818-19.024-10.752-25.958
      c-6.934-6.934-16.152-10.752-25.958-10.752s-19.024,3.818-25.957,10.752c-6.935,6.933-10.753,16.152-10.753,25.958
      c0,4.569,0.83,9.012,2.417,13.154h-21.899c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h106.562c4.143,0,7.5-3.358,7.5-7.5
      S394.197,350,390.055,350z M324.335,321.495c4.1-4.101,9.552-6.358,15.351-6.358s11.251,2.258,15.352,6.358
      c4.1,4.101,6.358,9.552,6.358,15.351c0,4.821-1.582,9.39-4.465,13.154h-34.49c-2.883-3.764-4.465-8.333-4.465-13.154
      C317.976,331.047,320.234,325.595,324.335,321.495z"
                          />
                          <path
                            d="M211,321.5c0-4.142-3.357-7.5-7.5-7.5h-28c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h28
      C207.643,329,211,325.642,211,321.5z"
                          />
                          <path
                            d="M132.625,354h-40.25c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h40.25c4.143,0,7.5-3.358,7.5-7.5
      S136.768,354,132.625,354z"
                          />
                          <path
                            d="M287,303.5c0-4.142-3.357-7.5-7.5-7.5h-16c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h16
      C283.643,311,287,307.642,287,303.5z"
                          />
                          <path
                            d="M237.5,376h-47.875c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5H237.5c4.143,0,7.5-3.358,7.5-7.5S241.643,376,237.5,376z
      "
                          />
                        </g>
                      </svg>
                    ) : d === "snow" ? (
                      <svg
                        className={
                          (grassType === "snow" && "!fill-sky-600 ") +
                          " fill-current w-18 group-hover:fill-sky-600 duration-300"
                        }
                        viewBox="0 0 64 64"
                      >
                        <path d="M43.702 26.116h.032a5.481 5.481 0 0 0 3.592 1.357c.169 0 .338-.009.508-.025a4.509 4.509 0 0 0 6.264.018a3.383 3.383 0 0 0 2.423-1.249a4.883 4.883 0 0 0 1.888-.896l.08.001c1.936 0 3.512-1.589 3.512-3.542a3.541 3.541 0 0 0-2.688-3.443a4.916 4.916 0 0 0-3.884-1.909c-1.27 0-2.473.501-3.374 1.361a3.628 3.628 0 0 0-1.01.104a5.42 5.42 0 0 0-4.168-1.447a3.36 3.36 0 0 0-2.438-1.036c-1.853 0-3.363 1.502-3.397 3.362a4.194 4.194 0 0 0-1.475 3.178c-.002 2.298 1.855 4.166 4.135 4.166m-.49-6.373a1.51 1.51 0 0 1-.304-.904a1.528 1.528 0 0 1 3.036-.233a3.591 3.591 0 0 1 1.382-.276c1.42 0 2.638.825 3.232 2.012a1.744 1.744 0 0 1 1.357-.653c.309 0 .594.087.847.227a3.048 3.048 0 0 1 2.665-1.585c1.256 0 2.331.757 2.803 1.837c.084-.014.17-.026.258-.026a1.642 1.642 0 1 1 0 3.281c-.241 0-.468-.054-.673-.146a3.04 3.04 0 0 1-2.388 1.166c-.018 0-.036-.006-.057-.006a1.525 1.525 0 0 1-2.061 1.019a2.682 2.682 0 0 1-2.332 1.367a2.683 2.683 0 0 1-2.395-1.484a3.595 3.595 0 0 1-1.258.236a3.607 3.607 0 0 1-2.911-1.482a2.287 2.287 0 0 1-.713.125a2.265 2.265 0 0 1-2.267-2.264a2.269 2.269 0 0 1 1.779-2.211"></path>
                        <path d="M44.609 23.675c.216 0 .421-.043.616-.105a3.146 3.146 0 0 0 2.517 1.249a3.18 3.18 0 0 0 1.086-.199a2.328 2.328 0 0 0 2.071 1.25a2.33 2.33 0 0 0 2.015-1.152c.156.064.329.1.509.1c.611 0 1.122-.406 1.272-.956c.018 0 .033.005.049.005c.841 0 1.578-.389 2.063-.982c.177.077.373.123.58.123c.625 0 1.149-.395 1.341-.94a1.707 1.707 0 0 1-1.314.018c-.533.594-1.345.98-2.269.98c-.019 0-.036-.004-.056-.004c-.164.55-.725.957-1.398.957c-.199 0-.389-.037-.56-.1c-.441.685-1.263 1.151-2.218 1.151c-.999 0-1.854-.512-2.276-1.251a3.81 3.81 0 0 1-1.195.2c-1.139 0-2.144-.495-2.769-1.249c-.216.063-.44.105-.679.105c-.427 0-.824-.113-1.159-.305a1.964 1.964 0 0 0 1.774 1.105"></path>
                        <path d="M7.279 16.356c.119 0 .238-.006.356-.017a6.08 6.08 0 0 0 2.818 1.342a4.003 4.003 0 0 0 3.251 1.685h.035a5.574 5.574 0 0 0 8.181-.075a6.835 6.835 0 0 0 5.746-1.836c.104.008.21.011.313.011c2.781 0 5.043-2.274 5.043-5.07c0-1.643-.807-3.15-2.071-4.085c.006-.09.009-.18.009-.271c0-2.228-1.799-4.04-4.011-4.04a3.975 3.975 0 0 0-3.111 1.488a6.863 6.863 0 0 0-5.929 2.084a4.247 4.247 0 0 0-1.907-.22a6.105 6.105 0 0 0-4.44-1.928c-2.013 0-3.87.988-5.01 2.598a4.2 4.2 0 0 0-3.442 4.136c0 2.315 1.87 4.198 4.169 4.198m0-6.495c.122 0 .242.017.359.036a4.283 4.283 0 0 1 3.924-2.57c1.612 0 3.002.901 3.731 2.218a2.446 2.446 0 0 1 1.187-.317a2.44 2.44 0 0 1 1.899.915c.833-1.662 2.537-2.815 4.525-2.815c.686 0 1.338.14 1.935.386a2.137 2.137 0 0 1 4.251.327c0 .477-.162.911-.426 1.267a3.166 3.166 0 0 1-.686 6.259a3.14 3.14 0 0 1-.997-.176a5.054 5.054 0 0 1-4.077 2.076c-.622 0-1.21-.127-1.761-.332a3.757 3.757 0 0 1-3.354 2.079a3.752 3.752 0 0 1-3.263-1.914a2.138 2.138 0 0 1-.824.166a2.14 2.14 0 0 1-2.063-1.592c-.027.001-.053.008-.079.008c-1.36 0-2.557-.645-3.342-1.632a2.298 2.298 0 1 1-.939-4.389"></path>
                        <path d="M8.815 13.381c.289 0 .561-.061.809-.168a3.724 3.724 0 0 0 2.874 1.348c.022 0 .045-.007.068-.008c.209.756.92 1.314 1.773 1.314c.249 0 .49-.049.71-.135a3.252 3.252 0 0 0 2.807 1.579a3.246 3.246 0 0 0 2.883-1.717a4.408 4.408 0 0 0 5.021-1.441c.272.085.558.145.859.145c1.307 0 2.396-.884 2.664-2.062a3.32 3.32 0 0 1-1.751.492c-.335 0-.65-.06-.951-.146c-.879 1.034-2.284 1.714-3.882 1.714a5.445 5.445 0 0 1-1.676-.273c-.593 1.014-1.791 1.717-3.193 1.717c-1.339 0-2.489-.642-3.105-1.58a2.331 2.331 0 0 1-.787.136c-.945 0-1.731-.56-1.962-1.314c-.027.002-.05.008-.076.008c-1.296 0-2.433-.534-3.183-1.348a2.5 2.5 0 0 1-.896.168c-.35 0-.676-.078-.971-.204c.067.989.917 1.775 1.965 1.775"></path>
                        <path d="M45.664 39.056L35.558 22.033l-1.5-2.526l-1.642 2.434l-5.646 8.362l-7.895 5.524l-.409.286l-.215.456l-3.929 8.3l-4.059 2.051L2 58.938V62h60v-4.114l-6.271-10.744l-10.065-8.086m-34.141 9.352l4.206-2.125l3.272 8.229l-7.478-6.104m16.514 8.251l1.402-8.588l-10.438-2.146l11.685-3.819l-2.571-10.436l5.842-8.653l-1.558 7.166l4.207 5.724l-5.142-.238l7.479 5.414l-5.608 3.652l-5.298 11.924m19.942-4.465l-10.75 4.465l7.479-5.964l5.176-5.826l4.405 3.539l-6.31 3.786"></path>
                      </svg>
                    ) : null}
                  </div>
                  <div
                    className={
                      grassType === "grass" && d === "grass"
                        ? "text-green-500 capitalize font-bold text-sm tracking-wide"
                        : grassType === "sand" && d === "sand"
                        ? "text-amber-600 capitalize font-bold text-sm tracking-wide"
                        : grassType === "snow" && d === "snow"
                        ? "text-sky-600 capitalize font-bold text-sm tracking-wide"
                        : " capitalize font-bold text-sm tracking-wide"
                    }
                  >
                    <label
                      className={
                        d === "grass"
                          ? "group-hover:text-green-500 duration-150"
                          : d === "sand"
                          ? "group-hover:text-amber-600 duration-150"
                          : d === "snow"
                          ? "group-hover:text-sky-600 duration-150"
                          : ""
                      }
                    >
                      {d}
                    </label>
                  </div>
                </div>
              </span>
            ))}
          </div>
          <div>
            <h1 className="text-xs text-center">
              Commande pour ce déplacer dans le city
            </h1>
          </div>
          <div>
            <div className="flex justify-center w-full">
              <kbd className="kbd">z</kbd>
            </div>
            <div className="flex justify-center gap-12 w-full">
              <kbd className="kbd">q</kbd>
              <kbd className="kbd">d</kbd>
            </div>
            <div className="flex justify-center w-full">
              <kbd className="kbd">s</kbd>
            </div>
          </div>
        </div>
        {/* lands */}
        <div className="relative h-full w-10/12">
          <div className="sm:text-2xl text-lg font-asap-menu text-current font-bold text-center">
            Zone
          </div>

          <p className="text-gray-500 text-[8px] sm:text-xs text-center">
            {t("dragAndDrop")}
          </p>
          <div className="h-full w-full relative">
            <Canvas
              shadows
              camera={{ position: [3, 4, 9] }}
              onDragOver={onDragOver}
              onDrop={onDrop}
            >
              <ambientLight intensity={0.5} />
              <pointLight
                position={[10, 10, -10]}
                castShadow
                shadow-mapSize={[1024, 1024]}
              />
              <Physics gravity={[0, -9.8, 0]}>
                {/* {children} */}
                <BaseCharacter position={[15, 10, 15]} active={fpsMode} />
                <Floor rotation={[Math.PI / -2, 0, 0]} color="white" />
              </Physics>
              <Grid scale={BLOCK_COUNT}>
                {buildings.map(
                  (data: { model: any; position: Vector2 }, index: number) => {
                    const Model = blockList[data.model].component
                    return (
                      <BlockWrapper key={index} position={data.position}>
                        <Model />
                      </BlockWrapper>
                    )
                  }
                )}
              </Grid>
              <Grass type={grassType} ref={grassRef} count={BLOCK_COUNT} />
              <DragPlaceholder ref={dragPlaceholderRef} gridRef={grassRef} />
              {!fpsMode && <OrbitControls makeDefault />}
              {fpsMode && (
                <PointerLockControls
                  makeDefault
                  onLock={onLock}
                  onUnlock={onUnlock}
                />
              )}
            </Canvas>
            {fpsMode && !lock && (
              <div className="absolute w-full h-full flex justify-center items-center backdrop-blur-sm top-0 left-0">
                <button className="btn">{t("startNavigation")}</button>
              </div>
            )}
          </div>
        </div>
        {/* models */}
        <div className="w-1/12 py-2 space-y-10 ">
          <div className="sm:text-2xl text-lg font-asap-menu text-current font-bold text-center">
            Assets
          </div>
          <div className="flex justify-center py-5 sm:card sm:shadow cursor-pointer templateAsset">
            <div className="space-y-5">
              {Object.entries(blockList).map((value, index) => {
                const [key, { Icon }] = value as any
                return (
                  <div
                    key={index}
                    data-drag={key}
                    className="w-full cursor-grab text-center space-y-2 group"
                    draggable
                    onDragStart={onDragStart as any}
                  >
                    <div className="w-full flex justify-center">
                      {key === "immeuble" ? <BuildingSvg /> : <Icon />}
                    </div>
                    <div>
                      <label className="capitalize font-bold tracking-wide text-xs sm:text-base">
                        {key}
                      </label>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default City
