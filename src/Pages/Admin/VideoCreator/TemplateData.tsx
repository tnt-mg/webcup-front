import React from "react"
import {
  Trailer,
  TRAILER_DURATION,
  trailerDefaultProps,
} from "../../../remotion/compositions/Trailer"
import TrailerTemplate from "./templates/TrailerTemplate"
import { Webcup, WEBCUP_DURATION } from "../../../remotion/compositions/Webcup"
import WebcupTemplate from "./templates/WebcupTemplate"
import DreamTemplate, {
  DREAM_TEMPLATE_DURATION,
  dreamTemplateDefaultProps,
} from "../../../remotion/compositions/DreamTemplate"
import TravelTemplate from "./templates/TravelTemplate"
import FinanceTemplate from "./templates/FinanceTemplate"
import WorkTemplate from "./templates/WorkTemplate"
import LoveTemplate from "./templates/LoveTemplate"

export interface Template {
  title: string // must be unique
  image: string
  preview: React.FC<any>
  duration: number
  defaultProps: any
  template: (props: any) => any
}

export const data: Template[] = [
  // {
  //   title: "Trailer",
  //   image: "trailer.jpg",
  //   preview: Trailer,
  //   duration: TRAILER_DURATION,
  //   defaultProps: trailerDefaultProps,
  //   template: (props: any) => <TrailerTemplate {...props} />,
  // },
  {
    title: "Voyage",
    image: "travel.jpg",
    preview: DreamTemplate,
    duration: DREAM_TEMPLATE_DURATION,
    defaultProps: dreamTemplateDefaultProps,
    template: (props: any) => <TravelTemplate {...props} />,
  },
  {
    title: "Finance",
    image: "finance.webp",
    preview: DreamTemplate,
    duration: DREAM_TEMPLATE_DURATION,
    defaultProps: dreamTemplateDefaultProps,
    template: (props: any) => <FinanceTemplate {...props} />,
  },
  {
    title: "Metier",
    image: "work.jpg",
    preview: DreamTemplate,
    duration: DREAM_TEMPLATE_DURATION,
    defaultProps: dreamTemplateDefaultProps,
    template: (props: any) => <WorkTemplate {...props} />,
  },
  {
    title: "Amour",
    image: "love.jpg",
    preview: DreamTemplate,
    duration: DREAM_TEMPLATE_DURATION,
    defaultProps: dreamTemplateDefaultProps,
    template: (props: any) => <LoveTemplate {...props} />,
  },
]
