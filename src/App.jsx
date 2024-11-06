import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <>
      <h1>Fluzlle</h1>
      <div className="card">
        <button>Popover</button>
        <p>
          <a
            href="https://fluzzle.youcodeuse.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fluzzle Documentation
          </a>
        </p>
      </div>
    </>
  );
};
export default App;
