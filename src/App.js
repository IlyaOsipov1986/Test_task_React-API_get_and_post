import './App.css';
import {useState} from "react";



function App() {

  const [modalActive, setModalActive] = useState(true);


  return (

      <div className="App">
        <main>
          <button type={"button"} className='button__open-pop-up' onClick={() => setModalActive(true)}>Налоговый вычет</button>
        </main>
        <Modal active={modalActive} setActive={setModalActive}/>
      </div>

  );
}

export default App;
