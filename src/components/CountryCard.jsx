function CountryCard({ country }) {
  return (
    <div className="country-card">
      <h3>{country.name.common}</h3>
    </div>
  )
}

export default CountryCard
