import AnimatedPage from "../AnimatedPage"
import { Virtual } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/virtual"

const LiteCard = () => {
  // Create array with 1000 slides
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  )
  return (
    <AnimatedPage>
      <div className="px-[5%] space-y-10 mt-10">
        <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={3} virtual>
          {slides.map((slideContent, index) => (
            <SwiperSlide key={slideContent} virtualIndex={index}>
              {slideContent}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </AnimatedPage>
  )
}

export default LiteCard
