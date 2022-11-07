// sources
import './styles/App.scss';
import { Suspense } from 'react'
// components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
function App() {
  return (

    <Suspense >
      <div className="App">
        {/* header */}
        <header>
          <Header />
        </header>
        <section className="Hero" >
          <div className="container">
            <div className="row">
              <div className="col">
                <Hero />
              </div>
            </div>
          </div>
        </section>
        <section className="About">
          <div className="container">
            <div className="row">
              <div className="col">
                <About />
              </div>
            </div>
          </div>
        </section>
        <section className="services">
          <div className="cpntainer">
            <div className="row">
              <div className="col">
                <Services></Services>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Suspense >
  );
}

export default App;
