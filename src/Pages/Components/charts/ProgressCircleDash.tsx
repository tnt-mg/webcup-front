import React from "react"

interface ProgressCircleDashProps {
  value: number
}

const ProgressCircleDash: React.FC<ProgressCircleDashProps> = ({ value }) => {
  return (
    <div>
      <div
        className="radial-progress text-primary"
        style={
          { "--value": value, "--size": "8rem", "--thickness": "5px" } as any
        }
      >
        {value} %
      </div>
    </div>
  )
}

export default ProgressCircleDash
