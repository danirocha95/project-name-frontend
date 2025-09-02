import CountryCard from '../components/CountryCard.jsx'

function Home() {
  const dummyCountry = { name: { common: "Brasil" } }

  return (
    <div>
      <CountryCard country={dummyCountry} />
    </div>
  )
}

export default Home
