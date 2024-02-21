import './App.css';
import Footer from "./components/footer/footer"
import Banner from "./components/banner/banner"
import Navbar from "./components/navbar/navbar"

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <Banner />
        <Navbar />
      </header>
      <Footer/>
    </div>
  );
}

export default App;
