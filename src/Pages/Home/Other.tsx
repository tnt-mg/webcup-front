import AnimatedPage from "../../AnimatedPage"
import CustomEmojiPicker from "../Components/Forms/emoji/CustomEmojiPicker"
import TheVoice from "../Components/TheVoice"
import LiveLineChart from "../Components/charts/LiveLineChart"
import Functionnality from "../HomeSections/OnirixPresentation"

function Other() {
  return (
    <AnimatedPage>
      <div className="px-[5%]">
        <h1>Here is live line chart</h1>
        <div>
          <LiveLineChart title="Data" />
        </div>
        <CustomEmojiPicker />
        <section>{/* <Functionnality /> */}</section>
      </div>
    </AnimatedPage>
  )
}

export default Other
