import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Xt } from "xtendui"
import "xtendui/src/form"
import "xtendui"
import "xtendui/src/toggle"
import "xtendui/src/overlay"
import "xtendui/src/stickyflow"
import "xtendui/src/scrollto"
import "/src/assets/Css/epicgames.css"
import { gsap } from "gsap"
import OrderConfirmBtn from "../Components/GsapBtn/OrderConfirmBtn"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { Link } from "react-router-dom"
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin)
}
export const EpicGameCarousel = () => {
  useEffect(() => {
    // js
    const mountVariants = ({ ref }: any) => {
      // vars

      const form = ref.querySelector("form")
      const gallery = ref.querySelector(".product-gallery")

      // init

      let self = new Xt.Toggle(form, {
        min: 1,
        elements: "[data-node-variants-element]",
        targets: "[data-node-variants-target]",
        on: "change",
        off: false,
        duration: 500,
        a11y: {
          keyboard: false,
        },
      })

      // on

      const ondone = () => {
        // scrollto
        if (!self.initial) {
          // reset scroll
          form.dispatchEvent(new CustomEvent("scrollto.trigger.xt.scrollto"))
          gallery.scrollTo(0, 0)
        }
        // initial mobile dots activation
        gallery.dispatchEvent(new CustomEvent("scroll"))
      }

      for (const element of self.elements) {
        element.addEventListener("ondone.xt.toggle", ondone)
      }

      // unmount

      return () => {
        self.destroy()
        self = null
      }
    }

    /* mountScrollto */

    const mountScrollto = () => {
      // init

      let self = new Xt.Scrollto(document.documentElement, {
        scrollers:
          ".xt-overlay:not([data-xt-overlay-disabled]), .product-gallery",
        space: ({ self }: any) => {
          return self.scroller.classList.contains(
            ...["xt-overlay", "product-gallery"]
          )
            ? 0
            : window.innerHeight / 6
        },
      })

      // scrollto

      const scrollto = () => {
        // scroll
        gsap.killTweensOf(self.scroller)
        gsap.to(self.scroller, {
          scrollTo: self.position,
          duration: self.duration,
          ease: "quint.out",
        })
      }

      self.container.addEventListener("scrollto.xt.scrollto", scrollto)

      // fix stop scroll animation on user interaction

      const stopScrolling = () => {
        gsap.killTweensOf(self.scroller)
      }

      addEventListener("touchstart", stopScrolling)
      addEventListener("wheel", stopScrolling)

      // unmount

      return () => {
        removeEventListener("touchstart", stopScrolling)
        removeEventListener("wheel", stopScrolling)
        self.container.removeEventListener("scrollto.xt.scrollto", scrollto)
        self.destroy()
        self = null
      }
    }

    /* mountImages */

    const mountImages = ({ ref }: any) => {
      // vars

      const container = ref
      const images = ref.querySelectorAll(".product-image")

      // overlay

      new Xt.Overlay(container, {
        targets: "#overlay--product-images",
        duration: 500,
      })

      // vars

      const mediaContainerScale = -0.015
      const mediaScale = 0.06
      const titleY = -10
      const maskOpacityOn = 0.2
      const maskOpacityOff = 0.2
      const maskOpacityDone = 0.1

      // enter

      const enter = ({ e }: any) => {
        const tr = e.target
        // media
        const media = tr.querySelector(".xt-media-container")
        gsap.to(media, {
          scale: 1 + mediaContainerScale,
          duration: 0.5,
          ease: "quart.out",
        })
        const mediaInner = tr.querySelector(".xt-media")
        gsap.to(mediaInner, {
          scale: 1 + mediaScale,
          duration: 1.5,
          ease: "quart.out",
        })
        // mask
        const mask = tr.querySelector(".xt-media-mask")
        gsap.set(mask, {
          height: 0,
          y: media.offsetHeight,
          skewY: 0,
          opacity: maskOpacityOff,
        })
        gsap.to(mask, {
          // fix to cover height: '150%'
          height: "150%",
          y: 0,
          opacity: maskOpacityOn,
          duration: 0.5,
          ease: "quart.out",
        })
        gsap
          .to(mask, {
            skewY: -10,
            duration: 0.5 / 2,
            ease: "quart.out",
          })
          .eventCallback("onComplete", () => {
            gsap.to(mask, {
              skewY: 0,
              duration: 0.5 / 2,
              ease: "quart.out",
            })
          })
        gsap.to(mask, {
          opacity: maskOpacityDone,
          duration: 0.75,
          ease: "quart.out",
          delay: 0.5,
        })
        // item
        const item = tr.querySelector(".xt-card-item")
        if (item) {
          gsap.to(item, {
            y: titleY,
            duration: 0.5,
            ease: "expo.out",
          })
        }
      }

      for (const image of images) {
        image.addEventListener("mouseenter", enter)
      }

      // leave

      const leave = ({ e }: any) => {
        const tr = e.target
        // media
        const media = tr.querySelector(".xt-media-container")
        gsap.to(media, {
          scale: 1,
          duration: 0.5,
          ease: "quart.out",
        })
        const mediaInner = tr.querySelector(".xt-media")
        gsap.to(mediaInner, {
          scale: 1,
          duration: 1.5,
          ease: "quart.out",
        })
        // mask
        const mask = tr.querySelector(".xt-media-mask")
        gsap.to(mask, {
          // fix to cover height: '50%', y: '-100%'
          height: "50%",
          y: "-100%",
          opacity: maskOpacityOff,
          duration: 0.5,
          ease: "quart.out",
        })
        gsap
          .to(mask, {
            skewY: 10,
            duration: 0.5 / 2,
            ease: "quart.out",
          })
          .eventCallback("onComplete", () => {
            gsap.to(mask, {
              skewY: 0,
              duration: 0.5 / 2,
              ease: "quart.out",
            })
          })
        // item
        const item = tr.querySelector(".xt-card-item")
        if (item) {
          gsap.to(item, {
            y: 0,
            duration: 0.5,
            ease: "expo.out",
          })
        }
      }

      for (const image of images) {
        image.addEventListener("mouseleave", leave)
      }

      // unmount

      return () => {}
    }

    /* mount */

    Xt.mount({
      matches: ".demo--products-gallery-v1",
      mount: ({ ref }: any) => {
        const unmountVariants = mountVariants({ ref }) as any
        // const unmountScrollto = mountScrollto({ ref }) as any
        const unmountImages = mountImages({ ref })

        // unmount

        return () => {
          unmountVariants()
          // unmountScrollto()
          unmountImages()
        }
      },
    })
  }, [])
  const { t } = useTranslation()
  return (
    <div>
      <div className="sm:w-1/2 w-full space-y-2">
        <h1 className="sm:text-7xl text-xl font-app text-primary">
          {t("voila")}
          <span className="text-secondary">{t("astuc")}</span> {t("dreamtype")}
        </h1>
        <p className="sm:text-3xl text-lg font-app text-secondary mt-5">
          ({t("especially")}*)
        </p>
      </div>
      <div className="demo--products-gallery-v1">
        <form>
          <div className="container md:py-12 lg:py-20 xl:py-28">
            <div className="xt-row md:xt-row-8 lg:xt-row-12 items-stretch">
              <div className="w-full md:w-5/12 lg:w-6/12 xl:w-7/12">
                <div className="relative">
                  <div className="product-gallery overflow-y-auto overflow-x-hidden xt-overflow-sub h-96 xt-container-remove md:!m-0 md:!h-auto md:!overflow-hidden">
                    <div className="xt-list flex-col">
                      <div
                        className="product-image w-full off:hidden out:pointer-events-none opacity-0 translate-y-6 scale-95 in:transition in:opacity-100 in:translate-y-0 in:scale-100 out:transition out:translate-y-0 out:scale-100"
                        data-node-variants-target
                        data-xt-group="red"
                      >
                        <a
                          href="#product-image-overlay-1"
                          id="product-image-1"
                          title="Expand image 1"
                        >
                          <div
                            className="xt-media-container bg-gray-200 overflow-hidden"
                            data-xt-overlay-element
                          >
                            <img
                              className="xt-media relative "
                              src="/images/illustration of 0.png"
                              loading="lazy"
                              alt=""
                            />
                            <div className="xt-media-mask absolute inset-0 pointer-events-none bg-white -translate-y-full"></div>
                          </div>
                        </a>
                      </div>

                      <div
                        className="product-image w-full off:hidden out:pointer-events-none opacity-0 translate-y-6 scale-95 in:transition in:opacity-100 in:translate-y-0 in:scale-100 out:transition out:translate-y-0 out:scale-100"
                        data-node-variants-target
                        data-xt-group="red"
                      >
                        <a
                          href="#product-image-overlay-2"
                          id="product-image-2"
                          title="Expand image 2"
                        >
                          <div
                            className="xt-media-container bg-gray-200 overflow-hidden"
                            data-xt-overlay-element
                          >
                            <img
                              className="xt-media relative "
                              src="/images/illustration of 1.png"
                              loading="lazy"
                              alt=""
                            />
                            <div className="xt-media-mask absolute inset-0 pointer-events-none bg-white -translate-y-full"></div>
                          </div>
                        </a>
                      </div>

                      <div
                        className="product-image w-full off:hidden out:pointer-events-none opacity-0 translate-y-6 scale-95 in:transition in:opacity-100 in:translate-y-0 in:scale-100 out:transition out:translate-y-0 out:scale-100"
                        data-node-variants-target
                        data-xt-group="green"
                      >
                        <a
                          href="#product-image-overlay-3"
                          id="product-image-3"
                          title="Expand image 3"
                        >
                          <div
                            className="xt-media-container bg-gray-200 overflow-hidden"
                            data-xt-overlay-element
                          >
                            <img
                              className="xt-media relative "
                              src="/images/illustration of 5.png"
                              loading="lazy"
                              alt=""
                            />
                            <div className="xt-media-mask absolute inset-0 pointer-events-none bg-white -translate-y-full"></div>
                          </div>
                        </a>
                      </div>

                      <div
                        className="product-image w-full off:hidden out:pointer-events-none opacity-0 translate-y-6 scale-95 in:transition in:opacity-100 in:translate-y-0 in:scale-100 out:transition out:translate-y-0 out:scale-100"
                        data-node-variants-target
                        data-xt-group="green"
                      >
                        <a
                          href="#product-image-overlay-4"
                          id="product-image-4"
                          title="Expand image 4"
                        >
                          <div
                            className="xt-media-container bg-gray-200 overflow-hidden"
                            data-xt-overlay-element
                          >
                            <img
                              className="xt-media relative "
                              src="/images/illustration of 4.png"
                              loading="lazy"
                              alt=""
                            />
                            <div className="xt-media-mask absolute inset-0 pointer-events-none bg-white -translate-y-full"></div>
                          </div>
                        </a>
                      </div>

                      <div
                        className="product-image w-full off:hidden out:pointer-events-none opacity-0 translate-y-6 scale-95 in:transition in:opacity-100 in:translate-y-0 in:scale-100 out:transition out:translate-y-0 out:scale-100"
                        data-node-variants-target
                        data-xt-group="blue"
                      >
                        <a
                          href="#product-image-overlay-5"
                          id="product-image-5"
                          title="Expand image 5"
                        >
                          <div
                            className="xt-media-container bg-gray-200 overflow-hidden"
                            data-xt-overlay-element
                          >
                            <img
                              className="xt-media relative "
                              src="/images/illustration of 6.png"
                              loading="lazy"
                              alt=""
                            />
                            <div className="xt-media-mask absolute inset-0 pointer-events-none bg-white -translate-y-full"></div>
                          </div>
                        </a>
                      </div>

                      <div
                        className="product-image w-full off:hidden out:pointer-events-none opacity-0 translate-y-6 scale-95 in:transition in:opacity-100 in:translate-y-0 in:scale-100 out:transition out:translate-y-0 out:scale-100"
                        data-node-variants-target
                        data-xt-group="blue"
                      >
                        <a
                          href="#product-image-overlay-6"
                          id="product-image-6"
                          title="Expand image 6"
                        >
                          <div
                            className="xt-media-container bg-gray-200 overflow-hidden"
                            data-xt-overlay-element
                          >
                            <img
                              className="xt-media relative "
                              src="/images/illustration of 2.png"
                              loading="lazy"
                              alt=""
                            />
                            <div className="xt-media-mask absolute inset-0 pointer-events-none bg-white -translate-y-full"></div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="absolute h-full bottom-0 right-0 md:hidden">
                      <div className="xt-list flex-col h-full justify-center">
                        <a
                          href="#product-image-1"
                          className="off:hidden out:pointer-events-none py-1.5 px-2 flex items-center justify-center group"
                          title="Go to image 1"
                          data-node-variants-target
                          data-xt-group="red"
                        >
                          <div className="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black w-[7px] h-[7px] group-on:w-[9px] group-on:h-[9px] transition-all"></div>
                        </a>

                        <a
                          href="#product-image-2"
                          className="off:hidden out:pointer-events-none py-1.5 px-2 flex items-center justify-center group"
                          title="Go to image 2"
                          data-node-variants-target
                          data-xt-group="red"
                        >
                          <div className="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black w-[7px] h-[7px] group-on:w-[9px] group-on:h-[9px] transition-all"></div>
                        </a>

                        <a
                          href="#product-image-3"
                          className="off:hidden out:pointer-events-none py-1.5 px-2 flex items-center justify-center group"
                          title="Go to image 3"
                          data-node-variants-target
                          data-xt-group="green"
                        >
                          <div className="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black w-[7px] h-[7px] group-on:w-[9px] group-on:h-[9px] transition-all"></div>
                        </a>

                        <a
                          href="#product-image-4"
                          className="off:hidden out:pointer-events-none py-1.5 px-2 flex items-center justify-center group"
                          title="Go to image 4"
                          data-node-variants-target
                          data-xt-group="blue"
                        >
                          <div className="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black w-[7px] h-[7px] group-on:w-[9px] group-on:h-[9px] transition-all"></div>
                        </a>

                        <a
                          href="#product-image-5"
                          className="off:hidden out:pointer-events-none py-1.5 px-2 flex items-center justify-center group"
                          title="Go to image 5"
                          data-node-variants-target
                          data-xt-group="blue"
                        >
                          <div className="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black w-[7px] h-[7px] group-on:w-[9px] group-on:h-[9px] transition-all"></div>
                        </a>

                        <a
                          href="#product-image-6"
                          className="off:hidden out:pointer-events-none py-1.5 px-2 flex items-center justify-center group"
                          title="Go to image 6"
                          data-node-variants-target
                          data-xt-group="red,green"
                        >
                          <div className="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black w-[7px] h-[7px] group-on:w-[9px] group-on:h-[9px] transition-all"></div>
                        </a>

                        <a
                          href="#product-image-7"
                          className="off:hidden out:pointer-events-none py-1.5 px-2 flex items-center justify-center group"
                          title="Go to image 7"
                          data-node-variants-target
                          data-xt-group="red,green"
                        >
                          <div className="bg-black rounded-full border-2 border-transparent group-on:bg-transparent group-on:border-black w-[7px] h-[7px] group-on:w-[9px] group-on:h-[9px] transition-all"></div>
                        </a>
                      </div>
                    </div>

                    <div
                      aria-label="Modal"
                      className="xt-overlay group"
                      id="overlay--product-images"
                    >
                      <div className="xt-backdrop z-below bg-gray-900 opacity-0 transition-opacity duration-300 ease-in-out-cubic group-in:delay-200 group-in:ease-out-quint group-in:opacity-25"></div>
                      <div className="xt-overlay-container p-0">
                        <button
                          type="button"
                          className="xt-button xt-dismiss fixed z-above top-0 right-0 p-3 text-2xl text-white bg-transparent transition hover:text-white hover:bg-primary active:text-white active:bg-primary on:text-white on:bg-primary opacity-0 transition-opacity duration-300 ease-in-out-cubic group-in:delay-200 group-in:ease-out-quint group-in:opacity-100"
                          aria-label="Close"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="xt-icon "
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <div className="xt-overlay-inner">
                          <div className="xt-card min-h-screen items-center justify-center shadow-xl text-current xt-links-default bg-white transition opacity-0 group-in:opacity-100">
                            <div className="w-full opacity-0 translate-y-6 scale-95 group-in:transition group-in:opacity-100 group-in:translate-y-0 group-in:scale-100 group-out:transition group-out:translate-y-0 group-out:scale-100">
                              <div
                                className="xt-media-container bg-gray-200 overflow-hidden off:hidden out:pointer-events-none"
                                data-node-variants-target
                                data-xt-group="red"
                              >
                                <img
                                  className="xt-media relative "
                                  id="product-image-overlay-1"
                                  src="/images/illustration of 0.png"
                                  loading="lazy"
                                  alt=""
                                />
                              </div>

                              <div
                                className="xt-media-container bg-gray-200 overflow-hidden off:hidden out:pointer-events-none"
                                data-node-variants-target
                                data-xt-group="red"
                              >
                                <img
                                  className="xt-media relative "
                                  id="product-image-overlay-2"
                                  src="/images/illustration of 1.png"
                                  loading="lazy"
                                  alt=""
                                />
                              </div>

                              <div
                                className="xt-media-container bg-gray-200 overflow-hidden off:hidden out:pointer-events-none"
                                data-node-variants-target
                                data-xt-group="green"
                              >
                                <img
                                  className="xt-media relative "
                                  id="product-image-overlay-3"
                                  src="/images/illustration of 5.png"
                                  loading="lazy"
                                  alt=""
                                />
                              </div>

                              <div
                                className="xt-media-container bg-gray-200 overflow-hidden off:hidden out:pointer-events-none"
                                data-node-variants-target
                                data-xt-group="green"
                              >
                                <img
                                  className="xt-media relative "
                                  id="product-image-overlay-4"
                                  src="/images/illustration of 4.png"
                                  // loading="eagelazyr"
                                  alt=""
                                />
                              </div>

                              <div
                                className="xt-media-container bg-gray-200 overflow-hidden off:hidden out:pointer-events-none"
                                data-node-variants-target
                                data-xt-group="blue"
                              >
                                <img
                                  className="xt-media relative "
                                  id="product-image-overlay-5"
                                  src="/images/illustration of 6.png"
                                  loading="lazy"
                                  alt=""
                                />
                              </div>

                              <div
                                className="xt-media-container bg-gray-200 overflow-hidden off:hidden out:pointer-events-none"
                                data-node-variants-target
                                data-xt-group="blue"
                              >
                                <img
                                  className="xt-media relative "
                                  id="product-image-overlay-6"
                                  src="/images/illustration of 2.png"
                                  loading="lazy"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="w-full md:w-7/12 lg:w-6/12 xl:w-5/12"
                id="product-arrow-target"
                data-xt-stickyflow="{ element: '[data-xt-stickyflow-el]', filler: '[data-xt-stickyflow-filler]' }"
              >
                <div
                  className="pointer-events-none absolute md:relative"
                  data-xt-stickyflow-filler
                ></div>
                <div className="py-12 md:sticky" data-xt-stickyflow-el>
                  <h1 className="text-5xl mb-5">{t("type")}</h1>
                  <div className="mb-4 xt-list xt-list-2">
                    <label className="btn font-app">
                      {t("Cauchemar")}
                      <input
                        type="radio"
                        aria-label="Red"
                        className="sr-only"
                        name="radio-button"
                        data-node-variants-element
                        data-xt-group="red"
                        data-xt-hash="red"
                      />
                    </label>

                    <label className="btn btn-error font-app text-base-100">
                      {t("Amour")}
                      <input
                        type="radio"
                        aria-label="Green"
                        className="sr-only"
                        name="radio-button"
                        data-node-variants-element
                        data-xt-group="green"
                        data-xt-hash="green"
                      />
                    </label>

                    <label className="btn btn-success text-base-100 font-app">
                      {t("money")}
                      <input
                        type="radio"
                        aria-label="Blue"
                        className="sr-only"
                        name="radio-button"
                        data-node-variants-element
                        data-xt-group="blue"
                        data-xt-hash="blue"
                      />
                    </label>
                  </div>

                  <div className="card shadow-xl my-6 text-current">
                    <div className="p-6 sm:p-8 text-sm">
                      {/* cauchemar */}
                      <div className="flex flex-col justify-center space-y-5">
                        <div
                          className="off:hidden out:pointer-events-none text-normal first-letter:text-4xl"
                          data-node-variants-target
                          data-xt-group="red"
                        >
                          {t("nightmare_desc")}
                        </div>

                        <div
                          data-node-variants-target
                          data-xt-group="red"
                          className="off:hidden out:pointer-events-none inline-flex items-center justify-center w-full gap-5"
                        >
                          <span className="absolute px-3 -translate-x-1/2 left-1/2 font-app text-3xl text-secondary">
                            {t("solution")}
                          </span>
                        </div>
                        <div
                          data-node-variants-target
                          data-xt-group="red"
                          className="off:hidden out:pointer-events-none gap-2 first-letter:text-4xl"
                        >
                          {t("solution_desc")}
                        </div>
                        <Link
                          to="/live"
                          data-xt-group="red"
                          data-node-variants-target
                          className="btn btn-primary off:hidden out:pointer-events-none"
                        >
                          {t("specialist")}
                        </Link>
                      </div>

                      {/* amour */}
                      <div className="flex flex-col justify-center space-y-5">
                        <div>
                          <div
                            className="max-w-xl mx-auto off:hidden out:pointer-events-none"
                            data-node-variants-target
                            data-xt-group="green"
                          >
                            <div data-xt-toggle="{ min: 1, duration: 500 }">
                              <div className="xt-card p-1.5 rounded-full text-current xt-links-default bg-base backdrop-filter backdrop-blur-sm backdrop-saturate-50">
                                <nav
                                  aria-label="Navigation"
                                  className="xt-list xt-list-1 flex-col md:flex-row md:flex-nowrap"
                                >
                                  <a
                                    role="button"
                                    className="xt-button flex-auto py-2 px-3 text-xs rounded-full font-medium leading-snug tracking-wider uppercase transition hover:bg-white hover:text-primary active:text-white active:bg-primary on:text-white on:bg-primary"
                                    data-xt-toggle-element
                                    data-xt-hash="description"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="xt-icon text-base opacity-50 mr-2"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                                      <polyline points="13 2 13 9 20 9"></polyline>
                                    </svg>{" "}
                                    {t("Celibataire")}
                                  </a>
                                  <a
                                    role="button"
                                    className="xt-button flex-auto py-2 px-3 text-xs rounded-full font-medium leading-snug tracking-wider uppercase transition hover:bg-secondary hover:text-base-100 active:text-white active:bg-secondary on:text-white on:bg-secondary"
                                    data-xt-toggle-element
                                    data-xt-hash="features"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="xt-icon text-base opacity-50 mr-2"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                      <polyline points="14 2 14 8 20 8"></polyline>
                                      <line
                                        x1="16"
                                        y1="13"
                                        x2="8"
                                        y2="13"
                                      ></line>
                                      <line
                                        x1="16"
                                        y1="17"
                                        x2="8"
                                        y2="17"
                                      ></line>
                                      <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>{" "}
                                    {t("relation")}
                                  </a>
                                </nav>
                              </div>

                              <div className="mt-3">
                                <div
                                  className="off:hidden out:pointer-events-none transition opacity-0 scale-95 in:opacity-100 in:scale-100 out:scale-105"
                                  data-xt-toggle-target
                                >
                                  <div className="xt-card rounded-2xl p-6 sm:p-8 text-sm text-current xt-links-default bg-base space-y-5">
                                    <div
                                      className="off:hidden out:pointer-events-none"
                                      data-node-variants-target
                                      data-xt-group="green"
                                    >
                                      {t("single_desc")}
                                    </div>

                                    <div
                                      data-node-variants-target
                                      data-xt-group="green"
                                      className="off:hidden out:pointer-events-none inline-flex items-center justify-center w-full gap-5"
                                    >
                                      <span className="absolute px-3 -translate-x-1/2 left-1/2 font-app text-3xl text-secondary">
                                        {t("solution")}
                                      </span>
                                    </div>
                                    <div
                                      data-node-variants-target
                                      data-xt-group="green"
                                      className="off:hidden out:pointer-events-none gap-2"
                                    >
                                      {t("solution_single")}
                                    </div>
                                    <button
                                      data-node-variants-target
                                      data-xt-group="green"
                                      type="submit"
                                      className="off:hidden out:pointer-events-none inline-flex cursor-pointer items-center justify-center p-5 text-base font-medium text-white rounded-lg bg-secondary hover:text-current hover:bg-base-100"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                        />
                                      </svg>

                                      <span className="w-full">
                                        {t("konw_future")}
                                      </span>
                                      <svg
                                        aria-hidden="true"
                                        className="w-6 h-6 ml-3"
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
                                    </button>
                                  </div>
                                </div>

                                <div
                                  className="off:hidden out:pointer-events-none transition opacity-0 scale-95 in:opacity-100 in:scale-100 out:scale-105"
                                  data-xt-toggle-target
                                >
                                  <div className="xt-card rounded-2xl p-6 sm:p-8 text-sm text-current xt-links-default bg-base">
                                    <p>{t("relationship_desc")}</p>
                                    <button
                                      data-node-variants-target
                                      data-xt-group="green"
                                      type="submit"
                                      className="off:hidden out:pointer-events-none inline-flex cursor-pointer items-center justify-center p-5 text-base font-medium text-white rounded-lg bg-secondary hover:text-current hover:bg-base-100"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                        />
                                      </svg>

                                      <span className="w-full">
                                        {t("konw")}
                                      </span>
                                      <svg
                                        aria-hidden="true"
                                        className="w-6 h-6 ml-3"
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
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* argent */}
                      <div className="flex flex-col justify-center space-y-5">
                        <div
                          data-node-variants-target
                          data-xt-group="blue"
                          className="off:hidden out:pointer-events-none gap-2"
                        >
                          {t("money_desc")}
                        </div>
                        <button
                          data-node-variants-target
                          data-xt-group="blue"
                          type="submit"
                          className="off:hidden out:pointer-events-none inline-flex cursor-pointer items-center justify-center p-5 text-base font-medium text-white rounded-lg bg-green-600 hover:text-current hover:bg-base-100"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mr-3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                            />
                          </svg>

                          <span className="w-full">{t("billionary")}</span>
                          <svg
                            aria-hidden="true"
                            className="w-6 h-6 ml-3"
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
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
