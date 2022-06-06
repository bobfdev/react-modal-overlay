import { useState } from 'react';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <h1>Click to open modal</h1>
      <button 
        className='open-modal' 
        onClick={() => { setModalOpen(true); }}
      >
        Open
      </button>
      {modalOpen && <Modal closeModal={setModalOpen} />}
    </div>
  );
}

export default App;
