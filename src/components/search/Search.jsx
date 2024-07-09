import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { url, ApiOptions } from '../../Api'

import './Search.css'

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState([])

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(`${url}/cities?minPopulation=1000000&namePrefix=${inputValue}`, ApiOptions)
      const data = await response.json()

      // Check if data.data is defined
      if (!data || !data.data) {
        throw new Error("Response data is not defined")
      }

      return {
        options: data.data.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name} ${city.countryCode}`
        }))
      }
    } catch (error) {
      console.error('Error loading options:', error)
      return { options: [] }
    }
  }

  const handleOnChange = (inputData) => {
    setSearch(inputData)
    onSearchChange(inputData)
  }

  return (
    <div className="searchBar">
      <AsyncPaginate
      className='searchInput'
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
    </div>
  )
}

export default Search
