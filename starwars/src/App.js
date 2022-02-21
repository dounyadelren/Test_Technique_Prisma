import './Assets/css/App.css';
import Nav from "./Components/Nav"
import "../src/Assets/css/globals.css"
import Article from "../src/Components/Article"
import Article2 from "../src/Components/Article2"
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="h-[100px]"></div>
      <Article />
      <Article2 />
    </div>
  );
}

export default App;
