import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useGlobalContext } from './Context'

function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()

  return (
    <div>
      <button onClick={() => toggleDarkTheme()} className="day-light">
        {isDarkTheme ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  )
}

export default ThemeToggle
