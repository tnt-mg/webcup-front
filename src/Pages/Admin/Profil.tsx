import AnimatedPage from "../../AnimatedPage"
import Countdown from "../Components/CountdownCompo"
import OrderConfirmBtn from "../Components/GsapBtn/OrderConfirmBtn"
import { SendBtn } from "../Components/GsapBtn/SendBtn"
import TrashBtn from "../Components/GsapBtn/TrashBtn"
import WaveBtn from "../Components/GsapBtn/WaveBtn"
import UserProfile from "../UserProfile"
import ModalDialog from "../Components/GsapBtn/ModalDialog"
function Profil() {
  return (
    <AnimatedPage>
      <UserProfile />
      {/* <div className="flex gap-4">
        <WaveBtn state="success" text="Test" />
        <TrashBtn />
        <OrderConfirmBtn />
        <SendBtn />
      </div> */}
      {/* <div>
        <Countdown />
      </div> */}
    </AnimatedPage>
  )
}

export default Profil
