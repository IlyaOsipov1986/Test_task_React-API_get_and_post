import './App.css';
import Images from "./components/Images/Images";



function App() {


  return (

      <div className="test__app _container">
          <div className={'test__app-title'}><h1>Test APP</h1></div>
        {/*/!*<main>*!/*/}
        {/*/!*  <button type={"button"} className='button__open-pop-up' onClick={() => setModalActive(true)}>Налоговый вычет</button>*!/*/}
        {/*/!*</main>*!/*/}
        {/*<Modal active={modalActive} setActive={setModalActive}/>*/}
          <Images/>
      </div>

  );
}

export default App;
