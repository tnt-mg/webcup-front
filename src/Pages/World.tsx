import { Link } from "react-router-dom"
import AnimatedPage from "../AnimatedPage"
import "../assets/Css/cardWold.css"

const World = () => {
  return (
    <AnimatedPage>
      <div className="px-[5%] space-y-10 mt-10">
        <div>
          <h1 className="font-app text-4xl sm:text-6xl text-center sm:text-left">
            World of wonder for you
          </h1>
          <p className="sm:w-2/3 my-3 text-lg text-center sm:text-justify first-letter:text-2xl font-app">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            exercitationem explicabo voluptates praesentium nihil officiis
            impedit earum ipsum. Ipsum ex molestias officia id? Vero,
            consequatur amet aliquid error ad minus!
          </p>
          <p className="sm:w-1/4 text-xs text-center sm:text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            dolore eum sapiente hic mollitia.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 items-center">
          {/* TPS */}
          <Link to="tps" className="card_world cursor-pointer">
            <div className="card__hover flex flex-col">
              <label>Arcade</label>
              <span className="text-xs">Mode</span>
            </div>
            <figure className="card__figure flex justify-center items-center">
              <svg className="fill-current w-1/2" viewBox="0 0 32 32">
                <path d="M23.226 2.361c-0.8-0.375-1.556-0.729-2.245-1.075-1.765-0.884-3.364-1.313-4.89-1.313-3.072 0-5.197 1.772-6.53 3.105l-6.464 6.471c-3.459 3.463-4.011 6.988-1.79 11.431 0.345 0.69 0.699 1.448 1.074 2.251 2.022 4.325 4.112 8.796 7.533 8.796 0.096 0 0.191-0.003 0.288-0.011 3.53-0.276 4.532-4.822 5.416-8.831 0.14-0.635 0.274-1.244 0.41-1.79 0.238-0.944 0.705-1.53 1.986-2.814l0.176-0.177 0.108-0.108 0.285-0.284c1.284-1.284 1.87-1.751 2.816-1.989 0.541-0.136 1.148-0.27 1.782-0.409 4.007-0.884 8.55-1.886 8.825-5.423 0.278-3.588-4.327-5.745-8.781-7.83zM29.952 10.010c-0.195 2.493-5.775 3.229-9.097 4.062-1.469 0.371-2.363 1.149-3.712 2.498-0.094 0.094-0.189 0.188-0.284 0.283s-0.189 0.191-0.283 0.284c-1.349 1.351-2.125 2.244-2.495 3.715-0.834 3.325-1.568 8.912-4.058 9.107-0.045 0.003-0.090 0.005-0.135 0.005-2.642 0-4.865-6.008-6.826-9.927-1.992-3.985-1.139-6.569 1.417-9.128 0.49-0.491 1.101-1.101 1.848-1.849 0.763-0.764 1.671-1.673 2.747-2.75 0.747-0.748 1.357-1.357 1.848-1.849 1.588-1.589 3.186-2.52 5.122-2.52 1.181 0 2.489 0.345 3.996 1.102 3.983 1.997 10.122 4.265 9.912 6.968zM14.962 10.977h2v-2h-2v2zM14.962 7.977h2v-2h-2v2zM17.962 7.977h2v-2h-2v2zM17.962 10.977h2v-2h-2v2zM10.309 16.982l0.761-0.761c0.375-0.375 0.375-0.983 0-1.358s-0.982-0.375-1.357 0l-0.761 0.761-0.761-0.761c-0.375-0.375-0.982-0.375-1.357 0s-0.375 0.983 0 1.358l0.761 0.761-0.761 0.761c-0.375 0.375-0.375 0.983 0 1.357s0.983 0.375 1.357 0l0.761-0.761 0.783 0.783c0.375 0.375 0.982 0.375 1.357 0s0.375-0.983 0-1.358z"></path>
              </svg>
            </figure>
            <div className="card__info">
              <span className="card__name">
                Description of the things Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
              </span>
            </div>
          </Link>
          {/* Visite virtuelle */}
          <Link to="visit360" className="card_world cursor-pointer">
            <div className="card__hover flex flex-col">
              <label>Realiste</label>
              <span className="text-xs">Mode</span>
            </div>
            <figure className="card__figure flex justify-center items-center">
              <svg
                className="stroke-current w-1/2"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path d="M22.75,21.28a31.76,31.76,0,0,0-10.75-2,31.76,31.76,0,0,0-10.75,2V4.67A31.76,31.76,0,0,1,12,2.72,31.76,31.76,0,0,1,22.75,4.67Z" />
                <polyline points="1.25 17.37 6.14 12.49 10.05 16.4 15.91 10.53 22.75 17.37" />
                <circle cx="10.05" cy="8.58" r="1.95" />
              </svg>
            </figure>
            <div className="card__info">
              <span className="card__name">
                Description of the things Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
              </span>
            </div>
          </Link>
          {/* Card */}
          <Link to="litecard" className="card_world cursor-pointer">
            <div className="card__hover flex flex-col">
              <label>Lite</label>
              <span className="text-xs">Mode</span>
            </div>
            <figure className="card__figure flex justify-center items-center">
              <svg
                className="fill-current w-1/2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 19h2c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2h2c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2h-2c0-1.103-.897-2-2-2H8c-1.103 0-2 .897-2 2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2zM20 7v10h-2V7h2zM8 5h8l.001 14H8V5zM4 7h2v10H4V7z" />
              </svg>
            </figure>
            <div className="card__info">
              <span className="card__name">
                Description of the things Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
              </span>
            </div>
          </Link>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default World
