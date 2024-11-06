import { useState } from 'react';
import {Link} from ReactDOM;
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Fluzlle</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit{' '}
          <Link href="https://fluzzle.youcodeuse.com">
            Fluzzle Documentation
          </Link>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
