import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

class NovaWidget extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" })

    const mountPoint = document.createElement("div")
    shadow.appendChild(mountPoint)

    createRoot(mountPoint).render(
      <StrictMode>
        <App />
      </StrictMode>
    )
  }
}

customElements.define("nova-chatbot", NovaWidget)

// Auto-inject into body
if (!document.querySelector("nova-chatbot")) {
  const el = document.createElement("nova-chatbot")
  el.style.position = "fixed"
  el.style.zIndex = "2147483647"
  el.style.top = "0"
  el.style.left = "0"
  el.style.width = "0"
  el.style.height = "0"
  document.body.appendChild(el)
}