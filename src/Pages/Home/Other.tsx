import AnimatedPage from "../../AnimatedPage"
import CountdownCompo from "../Components/CountdownCompo"
import CustomEmojiPicker from "../Components/Forms/emoji/CustomEmojiPicker"
import TheVoice from "../Components/TheVoice"
import LiveLineChart from "../Components/charts/LiveLineChart"

function Other() {
  return (
    <AnimatedPage>
      <div className="px-[5%]">
        <h1>Here is live line chart</h1>
        <div>
          <LiveLineChart title="Data" />
        </div>
        <CustomEmojiPicker />
        <CountdownCompo />
        <CountdownCompo />
      </div>
    </AnimatedPage>
  )
}

export default Other
