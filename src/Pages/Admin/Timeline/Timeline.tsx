import DraggableRadarChart from "../../Components/charts/DraggableRadarChart"
import "animate.css/animate.css"
import React, { lazy, useCallback, useEffect, useState } from "react"

// const VideoRecorder = lazy(() => import("../Components/recorder/VideoRecorder"))
import { Store } from "react-notifications-component"
import { ReactNotifications } from "react-notifications-component"
import { useCongrats } from "../../../utils/useCongrats"
import { confetti } from "tsparticles-confetti"

const notify = () => {
  Store.addNotification({
    title: "Ma tendance",
    message: "je suis du genre à voyager",
    type: "success",
    insert: "top",
    container: "bottom-center",
    animationIn: ["animate__animated", "animate__bounceIn"],
    animationOut: ["animate__animated", "animate__bounceOut"],
    dismiss: {
      duration: 2000,
      onScreen: true,
    },
  })

  // * confetti
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
  }

  const tendConfetti = () => {
    confetti({
      ...defaults,
      particleCount: 30,
      scalar: 3,
      shapes: ["text"],
      shapeOptions: {
        text: {
          value: ["☀️", "🔥", "🌈", "🌞", "🌟", "⭐️"],
        },
      },
    })
  }

  const tendShoot = () => {
    setTimeout(tendConfetti, 0)
    setTimeout(tendConfetti, 100)
    setTimeout(tendConfetti, 200)
  }

  tendShoot()
}
const timelines = [
  {
    year: 2023,
    topic: "Voyage",
    description:
      "Dubai est la tendance trouvée par Onirix pour les rêve de voyage",
  },
  {
    year: 2023,
    topic: "Metier",
    description:
      "Le Freelancing est de plus en plus revé, sourtout pour les nomades Gigital",
  },
  {
    year: 2024,
    topic: "Finance",
    description:
      "Selon encore Orinix, beaucoup de personnes seront encore aux chomages ",
  },
  {
    year: 2025,
    topic: "Amour",
    description: "Il y aura plus de femmes Celibataire que d'hommes sur terre",
  },
  {
    year: 2026,
    topic: "Voyage",
    description:
      "Ce sera l'année avec la plus forte affluence de voyage au monde",
  },
  {
    year: 2027,
    topic: "Finance",
    description: "Plusieurs entreprise de loterie tombera en faillite",
  },
]

const Timeline = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <ReactNotifications />
      <div>
        <ol className="border-l border-gray-200">
          {timelines.map((t) => (
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                {t.year}
              </time>
              <h3 className="text-lg font-semibold text-gray-900">{t.topic}</h3>
              <p className="mb-4 text-base font-normal text-gray-500">
                {t.description}.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"
              >
                En savoir plus{" "}
                <svg
                  className="w-3 h-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
          ))}
        </ol>
      </div>
      <div className="p-5 flex-col">
        <div className="space-y-5">
          <div className="text-center">
            <h1 className="text-xl font-app">
              Déplacer les extrémitées selon vos désires
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-2/3">
              <DraggableRadarChart />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="btn btn-primary" onClick={notify}>
            Tester ma tendance
          </button>
        </div>
      </div>
    </div>
  )
}

export default Timeline
