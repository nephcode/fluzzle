import './App.css';
import { Modal } from './lib/Modal';
import { useState } from 'react';

//const idpop = 'pop';
//const message = 'mon message de validation';

const App = () => {
  const [modalIsDisplayed, setModalIsDisplayed] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setModalIsDisplayed(true);
  };
  return (
    <section className="container">
      <h1 className="title">Fluzzle Modal</h1>
      <form onSubmit={handleSubmit}>
        <button>Click me</button>
      </form>
      <Modal
        isDisplayed={modalIsDisplayed}
        onCloseModal={() => setModalIsDisplayed(false)}
        content={
          <div id="confirmation" className="modal">
            <p>This is a modal</p>
            <p>Click on X button to close me</p>
          </div>
        }
      />
    </section>
  );
};
export default App;
