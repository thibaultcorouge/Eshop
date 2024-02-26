import './App.css';
import Footer from "./components/footer/footer"
import Banner from "./components/banner/banner"
import AppRoutes from "./Routes"

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <Banner/>
      </header>
      <AppRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
