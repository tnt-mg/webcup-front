import { useRef } from "react"

const KeyboardLayout = () => {
  const setKeyboardLayout = (layout: string) => {
    localStorage.setItem("keyboardLayout", layout)
    window.dispatchEvent(new Event("keyboardLayoutChanged"))
  }
  return (
    <div>
      <div className="flex items-center gap-4">
        <label className="text-sm">
          Séléctionner votre dispostion de clavier
        </label>
        <span>
          <svg className="w-8 fill-current" viewBox="0 0 512 512">
            <path
              d="M459.576,99.307H52.423C23.524,99.307,0,122.837,0,151.736v192.879c0,37.536,30.537,68.078,68.068,68.078
		h375.862c37.532,0,68.069-30.542,68.069-68.078V151.736C512,122.837,488.475,99.307,459.576,99.307z M485.515,344.615
		c0,22.934-18.655,41.589-41.584,41.589H68.068c-22.929,0-41.584-18.655-41.584-41.589V151.736
		c0-14.306,11.638-25.938,25.938-25.938h407.154c14.301,0,25.938,11.633,25.938,25.938V344.615z"
            />
            <rect x="189.792" y="233.929" width="44.138" height="44.142" />
            <rect x="256.002" y="233.929" width="44.134" height="44.142" />
            <rect x="322.207" y="233.929" width="44.138" height="44.142" />
            <rect x="410.484" y="300.139" width="44.134" height="44.134" />
            <rect x="189.792" y="167.729" width="44.138" height="44.134" />
            <rect x="123.587" y="233.929" width="44.138" height="44.142" />
            <rect x="123.587" y="167.729" width="44.138" height="44.134" />
            <rect x="57.382" y="300.139" width="44.134" height="44.134" />
            <rect x="57.382" y="233.929" width="44.134" height="44.142" />
            <rect x="57.382" y="167.729" width="44.134" height="44.134" />
            <rect x="256.002" y="167.729" width="44.134" height="44.134" />
            <rect x="322.207" y="167.729" width="44.138" height="44.134" />
            <rect x="123.587" y="300.139" width="264.825" height="44.134" />
            <rect x="388.412" y="167.729" width="66.205" height="110.343" />
          </svg>
        </span>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <kbd className="kbd">AZERTY</kbd>
          <input
            onClick={() => setKeyboardLayout("azerty")}
            type="radio"
            name="radio-10"
            className="radio checked:bg-primary"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <kbd className="kbd">QWERTY</kbd>
          <input
            onClick={() => setKeyboardLayout("qwerty")}
            type="radio"
            name="radio-10"
            className="radio checked:bg-primary"
          />
        </label>
      </div>
    </div>
  )
}

export default KeyboardLayout
