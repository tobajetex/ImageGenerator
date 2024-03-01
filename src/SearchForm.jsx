import React from 'react'
import { useGlobalContext } from './Context'

function SearchForm() {
  const { inputValue, handleFormSubmission, handleInputChange } =
    useGlobalContext()
  return (
    <div>
      <form onSubmit={handleFormSubmission} className="inputContainer">
        <input
          className="input"
          type="text"
          name="search"
          placeholder="cat"
          value={inputValue}
          onChange={handleInputChange}
        />
        {inputValue && <button>Submit</button>}
      </form>
    </div>
  )
}

export default SearchForm
