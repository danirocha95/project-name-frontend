import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import About from './components/About/About.jsx';
import Pets from './pages/Pets/Pets.jsx';
import PetDetails from './pages/PetDetails/PetDetails.jsx';
import SeeMorePets from './pages/SeeMorePets/SeeMorePets.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className='app'>
      <Header />

      <main className='app__main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pets/:id' element={<PetDetails />} />
          <Route path='/sobre' element={<About />} />
          <Route path='/pets' element={<Pets />} />
          <Route path='/mais-animais' element={<SeeMorePets />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
