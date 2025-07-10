import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { Podcast } from "./components/podcast"
import "./styles/global.scss"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <StrictMode>
    <Podcast />
  </StrictMode>
)
