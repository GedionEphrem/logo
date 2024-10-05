import React, { useEffect, useState } from "react"
import "./App.css"
import Header from "./componets/Header/Header"
import Home from "./componets/home/Home"


function App() {
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode"))
  }
  const [dark, setMode] = useState(getMode())
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark))
  }, [dark])
  return (
    <>
      <div className={dark ? "app" : "light"}>
        <Header dark={dark} setMode={setMode} />
        <Home />
      </div>
    </>
  )
}

export default App
