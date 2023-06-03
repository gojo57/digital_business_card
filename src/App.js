import About from './Components/About/About';
import Info from './Components/Info/Info';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='border-box'>
      <div className='container'>
        <Info />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
