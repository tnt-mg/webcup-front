import Strapi from "strapi-sdk-js"
export const BASE_URL =
  import.meta.env.VITE_ENV === "AWS"
    ? import.meta.env.VITE_AWS_API_BASE_URL
    : import.meta.env.VITE_LOCAL_BASE_URL

const strapi = new Strapi({
  url: window.location.origin,
  prefix: "/v1/api",
})

export const strapiService = strapi
