import "../../assets/Css/themeChanger.css"
const ThemeChangerV2 = () => {
  return (
    <div>
      <label className="bb8-toggle">
        <input className="bb8-toggle__checkbox" type="checkbox" />
        <div className="bb8-toggle__container w-[10rem] h-[5rem]">
          <div className="bb8-toggle__scenery">
            <div className="bb8-toggle__star"></div>
            <div className="bb8-toggle__star"></div>
            <div className="bb8-toggle__star"></div>
            <div className="bb8-toggle__star"></div>
            <div className="bb8-toggle__star"></div>
            <div className="bb8-toggle__star"></div>
            <div className="bb8-toggle__star"></div>
            <div className="tatto-1"></div>
            <div className="tatto-2"></div>
            <div className="gomrassen"></div>
            <div className="hermes"></div>
            <div className="chenini"></div>
            <div className="bb8-toggle__cloud"></div>
            <div className="bb8-toggle__cloud"></div>
            <div className="bb8-toggle__cloud"></div>
          </div>
          <div className="bb8">
            <div className="bb8__head-container">
              <div className="bb8__antenna"></div>
              <div className="bb8__antenna"></div>
              <div className="bb8__head"></div>
            </div>
            <div className="bb8__body"></div>
          </div>
          <div className="artificial__hidden">
            <div className="bb8__shadow"></div>
          </div>
        </div>
      </label>
    </div>
  )
}

export default ThemeChangerV2
