interface FeedsProps {
  name: string
}
const Feeds = (props: FeedsProps) => {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-primary">
          <span className="text-sm font-bold">{props.name}</span>
          <p>Put me on the Council and not make me a Master!??</p>
          <div className="flex justify-end">
            <span className="text-xs font-bold">13h May 2023 , 12:00 am</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feeds
