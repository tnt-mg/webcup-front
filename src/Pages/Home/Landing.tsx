import { Suspense } from "react"
import AnimatedPage from "../../AnimatedPage"
import Loading from "../Components/Loading"
import { HeadingV2 } from "../HomeSections/HeadingV2"
import FunctionnalityV2 from "../HomeSections/FunctionnalityV2"
import AboutCompany from "../HomeSections/AboutCompany"
import MockupV2 from "../HomeSections/MockupV2"
import PayementMeths from "../HomeSections/PayementMeths"

function Landing() {
  return (
    <AnimatedPage>
      <Suspense fallback={<Loading />}>
        <div className="px-[7%] space-y-[7%]">
          <section>
            <HeadingV2 />
          </section>
          <section>
            <AboutCompany />
          </section>
          <section>
            <PayementMeths />
          </section>
          <section>
            <FunctionnalityV2 />
          </section>
          <section>
            <MockupV2 />
          </section>
        </div>
      </Suspense>
    </AnimatedPage>
  )
}

export default Landing
