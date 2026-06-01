const BASE_URL = 'https://restcountries.com/v3.1'

export async function getAllCountries() {
  const response = await fetch(
    `${BASE_URL}/all?fields=name,capital,region,population,flags,cca3`
  )

  if (!response.ok) {
    throw new Error('Could not fetch countries')
  }

  return response.json()
}