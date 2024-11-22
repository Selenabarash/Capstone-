import React, { useState } from 'react'

// import axios for backend?? route?? 


const SearchPage = () => {
    const [error, setError] = useState(null)
  

const handleInputChange = async (e) => {

try {
      const response = await fetch(`/api/users/search?query=${query}`)
      
      if (!response.ok) {
        throw new Error('No Results Found')
      }

      const data = await response.json();
      setUsers(data.results); // is this the right API response structure 
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }
}
export default SearchPage
