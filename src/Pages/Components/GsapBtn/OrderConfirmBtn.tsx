import { useEffect } from "react"
import "/src/assets/Css/orderBtn.scss"
const OrderConfirmBtn = () => {
  useEffect(() => {
    const button = document.querySelector(".order") as any
    button.addEventListener("click", () => {
      if (!button!.classList.contains("animate")) {
        button!.classList.add("animate")
        setTimeout(() => {
          button.classList.remove("animate")
        }, 10000)
      }
    })
  }, [])
  return (
    <div>
      <button className="order bg-primary overflow-hidden w-[240px] h-16 relative border-none p-0 appearance-none outline-none cursor-pointer rounded-full">
        <span className="default !font-bold !text-lg">Complete Order</span>
        <span className="success flex justify-center gap-2 !font-bold !text-lg">
          <label>Order Placed</label>
          <svg className="w-10" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <div className="box"></div>
        <div className="truck">
          <div className="back"></div>
          <div className="front">
            <div className="window"></div>
          </div>
          <div className="light top"></div>
          <div className="light bottom"></div>
        </div>
        <div className="lines"></div>
      </button>
    </div>
  )
}

export default OrderConfirmBtn
