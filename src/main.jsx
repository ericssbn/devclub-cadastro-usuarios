import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { GlobalStytles } from "./styles/GlobalStyles.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStytles />
    <App/>
</React.StrictMode>
)
