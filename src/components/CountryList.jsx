
import CountryCard from './CountryCard'

function CountryList({ countries }) {
  return (
    <div className="country-grid">
      {countries.slice(0, 12).map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  )
}

export default CountryList