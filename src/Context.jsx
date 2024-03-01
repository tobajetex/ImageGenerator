// context.js
import React, { createContext, useContext, useState } from 'react'

// Create the context
const GlobalContext = createContext()

// Create a provider component
export const GlobalContextProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState(/* Initial state here */)
  const [isDarkTheme, setToggleDarkTheme] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [searchInput, setSearchInput] = useState('dogs')

  const updateGlobalState = (newState) => {
    setGlobalState(newState)
  }
  const toggleDarkTheme = () => {
    setToggleDarkTheme((prevState) => !prevState)
    document.body.classList.toggle('dark-theme')
  }
  const handleFormSubmission = (e) => {
    e.preventDefault()

    setSearchInput(inputValue)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <GlobalContext.Provider
      value={{
        globalState,
        updateGlobalState,
        isDarkTheme,
        toggleDarkTheme,
        inputValue,
        handleFormSubmission,
        handleInputChange,
        searchInput,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

// Create a custom hook to use the context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error(
      'useGlobalContext must be used within a GlobalContextProvider'
    )
  }
  return context
}
//tyMW3owT0goleC5u1AMzS3fv1cOXl6oly0LLj1MaI8
