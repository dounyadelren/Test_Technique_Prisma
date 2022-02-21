import './Assets/css/App.css';
import Nav from "./Components/Nav"
import "../src/Assets/css/globals.css"
import Article from "../src/Components/Article"
import Article2 from "../src/Components/Article2"
import Footer from "../src/Components/Footer"
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="h-[100px]"></div>
      <Article />
      <Article2 />
      <div className="h-[61px]"></div>
      <Footer />
    </div>
  );
}

export default App;
