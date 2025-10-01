// src/Root.jsx
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themes } from './theme.js'
import App from './App'

const Root = () => {
   // leer tema guardado
  const savedTheme = localStorage.getItem("theme")

  // si no existe o no coincide, usar "purple"
  const initialTheme = themes[savedTheme] || themes["purple"]

  const [currentTheme, setCurrentTheme] = useState(initialTheme)

  console.log("🎨 currentTheme:", currentTheme)

  

  return (
    <ThemeProvider theme={currentTheme}>
      <App setCurrentTheme={setCurrentTheme} />
    </ThemeProvider>
  )
}

export default Root
