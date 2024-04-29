import { Component, useCallback, useState } from "react"
import { Flipped, Flipper } from "react-flip-toolkit"
const listData = [...Array(3).keys()]

const ListItem = ({ index, onClick, title, pricing, description }: any) => (
  <Flipped flipId={`card-${index}`} stagger="card">
    <div
      className="bg-base-200/20 shadow-md cursor-pointer rounded-box p-12"
      onClick={() => onClick(index)}
    >
      <Flipped flipId={`global-${index}`} stagger="global">
        <div className="flex justify-between global-container">
          {/* <Flipped flipId={`left-${index}`} stagger="left"> */}
          <div className="flex gap-5 left-container">
            {/* images */}
            <Flipped flipId={`left-image-${index}`} stagger="card-content">
              <div className="flex justify-center image-container">
                <img
                  className="w-32 rounded-full"
                  src="https://picsum.photos/200/"
                  alt=""
                />
              </div>
            </Flipped>
            {/* Pricing and little desc */}
            <div className="flex items-center data-left-container">
              <div className="space-y-5">
                <Flipped
                  flipId={`left-data-title-${index}`}
                  stagger="card-content-data"
                >
                  <div>
                    <h1 className="font-asap-bold text-2xl">{title}</h1>
                  </div>
                </Flipped>
                <Flipped
                  flipId={`left-data-pricing-${index}`}
                  stagger="card-content-data"
                >
                  <div>
                    <h1 className="text-xl font-bold">
                      Pricing : {pricing} Ar
                    </h1>
                  </div>
                </Flipped>
                <Flipped
                  flipId={`left-data-rating-${index}`}
                  stagger="card-content-data"
                >
                  <div className="rating gap-1">
                    <input
                      type="radio"
                      name={`rating-${index}-${3}`}
                      className="mask mask-star-2"
                    />
                    <input
                      type="radio"
                      name={`rating-${index}-${3}`}
                      className="mask mask-star-2"
                    />
                    <input
                      type="radio"
                      name={`rating-${index}-${3}`}
                      className="mask mask-star-2"
                    />
                    <input
                      type="radio"
                      name={`rating-${index}-${3}`}
                      className="mask mask-star-2"
                    />
                    <input
                      type="radio"
                      name={`rating-${index}-${3}`}
                      className="mask mask-star-2"
                    />
                  </div>
                </Flipped>
              </div>
            </div>
          </div>
        </div>
      </Flipped>
    </div>
  </Flipped>
)

const ExpandedListItem = ({
  index,
  onClick,
  title,
  pricing,
  description,
}: any) => (
  <Flipped flipId={`card-${index}`} stagger="card">
    <div
      className="bg-primary/50 shadow-md rounded-box p-12"
      onClick={() => onClick(index)}
    >
      <Flipped flipId={`global-${index}`} stagger="global">
        <div className="cursor-pointer flex justify-between global-container">
          {/* img */}
          {/* <Flipped flipId={`left-${index}`} stagger="left"> */}
          <div className="left-container">
            <Flipped flipId={`left-image-${index}`} stagger="card-content">
              <div className="flex justify-center image-container">
                <img
                  className="w-32 avatarExpanded rounded-full"
                  src="https://picsum.photos/200/"
                  alt=""
                />
              </div>
            </Flipped>

            {/* descs */}
            <div className="gap-5 flex data-left-container">
              <div className="space-y-5">
                <Flipped
                  flipId={`left-data-title-${index}`}
                  stagger="card-content"
                >
                  <div className="text-center">
                    <h1 className="font-asap-bold text-xl">{title}</h1>
                  </div>
                </Flipped>
                <Flipped
                  flipId={`left-data-pricing-${index}`}
                  stagger="card-content"
                >
                  <div className="text-center">
                    <h1 className="text-lg font-bold">{pricing} Ar</h1>
                  </div>
                </Flipped>
                <div className="flex justify-center">
                  <Flipped
                    flipId={`left-data-rating-${index}`}
                    stagger="card-content"
                  >
                    <div className="rating gap-1">
                      <input
                        type="radio"
                        name={`rating-${index}-${3}`}
                        className="mask mask-star-2"
                      />
                      <input
                        type="radio"
                        name={`rating-${index}-${3}`}
                        className="mask mask-star-2"
                      />
                      <input
                        type="radio"
                        name={`rating-${index}-${3}`}
                        className="mask mask-star-2"
                      />
                      <input
                        type="radio"
                        name={`rating-${index}-${3}`}
                        className="mask mask-star-2"
                      />
                      <input
                        type="radio"
                        name={`rating-${index}-${3}`}
                        className="mask mask-star-2"
                      />
                    </div>
                  </Flipped>
                </div>
              </div>
            </div>
          </div>
          {/* </Flipped> */}

          {/* more descs */}
          <div className="right-container">
            <div className="additional-content">
              <div className="flex justify-center text-lg font-semibold">
                <div className="space-y-5 w-2/3">
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Flipped>
    </div>
  </Flipped>
)

const princingData = [
  {
    title: "Cauchemar",
    pricing: "5 000",
    description: "Comment diminuer vos cauchemars ?",
  },
  {
    title: "Argent",
    pricing: "10 000",
    description: "Devenez millionniare ?",
  },
  {
    title: "Psy",
    pricing: "70 000",
    description: "Consulter les meilleurs psy de l'univers",
  },
]

const AnimatedList = () => {
  const [focused, setFocused] = useState(null)
  const onClick = useCallback(
    (index: any) => setFocused((focused) => (focused === index ? null : index)),
    []
  )
  return (
    <Flipper
      flipKey={focused}
      spring="gentle"
      decisionData={focused}
      staggerConfig={{
        card: {
          reverse: focused !== null,
        },
        global: {
          reverse: focused !== null,
        },
      }}
    >
      <ul className="flex flex-col gap-5">
        {princingData.map((data, index) => (
          <li key={index}>
            {index === focused ? (
              <ExpandedListItem
                index={focused}
                onClick={onClick}
                title={data.title}
                pricing={data.pricing}
                description={data.description}
              />
            ) : (
              <ListItem
                title={data.title}
                pricing={data.pricing}
                description={data.description}
                index={index}
                key={index}
                onClick={onClick}
              />
            )}
          </li>
        ))}
      </ul>
    </Flipper>
  )
}

export default AnimatedList
