import './App.css';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import WhatsappButton from './components/common/WhatsappButton';

function App() {
  return (
    <main>
      <header>
        <NavBar />
      </header>
      {/* <NavBar /> */}
      <section className="min-h-screen mt-16">
        <Home />
        <WhatsappButton />
      </section>
      <Footer />
    </main>
  );
}

export default App;
