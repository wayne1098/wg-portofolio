import { About } from './component/About';
import { Contact } from './component/Contact';
// import { Experience } from './component/Experience';
import { Footer } from './component/Footer';
import { Navbar } from './component/Nav';
import { Skills } from './component/Skills';
import { Works } from './component/Works';


function App() {
  return (
    <div>
    <Navbar />
    <About />
    <Skills />
    <Works />
    {/* <Experience /> */}
    <Contact />
    <Footer />
  </div>
  );
}

export default App;
