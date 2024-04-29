import Countdown from "react-countdown"

const CountdownUI = ({ hours, minutes, seconds }: any) => {
  return (
    <div>
      <span className="countdown font-mono text-2xl">
        <span style={{ "--value": hours } as any}></span>h
        <span style={{ "--value": minutes } as any}></span>m
        <span style={{ "--value": seconds } as any}></span>s
      </span>
    </div>
  )
}

const CountdownFinished = () => {
  return <div>Done</div>
}

const renderer = ({ hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return <CountdownFinished />
  } else {
    // Render a countdown
    return <CountdownUI hours={hours} minutes={minutes} seconds={seconds} />
  }
}
const CountdownCompo = () => {
  // Renderer callback with condition
  return (
    <div>
      <Countdown date={Date.now() + 500000} renderer={renderer} />
    </div>
  )
}

export default CountdownCompo
