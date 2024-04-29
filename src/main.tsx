import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import "./i18n"
import "intro.js/introjs.css"
import "intro.js/themes/introjs-flattener.css"

import { IoProvider } from "socket.io-react-hook"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <IoProvider>
      <App />
    </IoProvider>
  </React.StrictMode>
)
