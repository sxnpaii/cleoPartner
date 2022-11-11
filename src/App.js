// sources
import './styles/App.scss';
import { Suspense } from 'react'
// components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Comments from './components/Comments';
import Requires from './components/Requires';
import JoinUs from './components/JoinUs';


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
        <section className="Services">
          <div className="container">
            <div className="row">
              <div className="col">
                <Services />
              </div>
            </div>
          </div>
        </section>
        <section className="Comments">
          <div className="container">
            <div className="row">
              <div className="col">
                <Comments />
              </div>
            </div>
          </div>
        </section>
        <section className="Requires">
          <div className="container">
            <div className="row">
              <div className="col">
                <Requires />
              </div>
            </div>
          </div>
        </section>
        <section className="JoinUs">
          <div className="container">
            <div className="row">
              <div className="col">
                <JoinUs />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Suspense >
  );
}

export default App;
