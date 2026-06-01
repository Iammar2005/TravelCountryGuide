function CountryCard({ country }) {
    return (
      <div className="country-card">
        <img src={country.flags.png} alt={country.flags.alt || country.name.common} />
        <h4>{country.name.common}</h4>
        <p>Capital: {country.capital?.[0] || 'No capital'}</p>
        <p>Region: {country.region}</p>
        <p>Population: {country.population.toLocaleString()}</p>
      </div>
    )
  }
  
  export default CountryCard
  