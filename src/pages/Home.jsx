import { useEffect, useState } from 'react'
import { getAllCountries } from '../services/countryApi'
import CountryList from '../components/CountryList'
import SearchBar from '../components/SearchBar'

function Home() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function fetchCountries() {
      try {
        const data = await getAllCountries()
        setCountries(data)
      } catch (error) {
        setError('Could not load countries.')
      } finally {
        setLoading(false)
      }
    }

    fetchCountries()
  }, [])

  if (loading) return <p>Loading countries...</p>
  if (error) return <p>{error}</p>

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <section className="home">
      <h2>Explore countries around the world</h2>
      <p>Search, compare and save countries you want to visit.</p>
  
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
  
      <h3>Countries</h3>
  
      <CountryList countries={filteredCountries} />
    </section>
  )
}

export default Home