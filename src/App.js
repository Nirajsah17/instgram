import './App.css';
import data from './data/home.json';
import { FaHeart } from "react-icons/fa";

  function App() {
    return (
      <div>
        <h1 className="font-bold">
          Hello world! {data.Nav.name}
        </h1>
        <FaHeart />
        <h2>test</h2>
      </div>

    );
  }

export default App;
