import './App.css';
import {useEffect, useState} from "react";
import Modal from "./components/Modal/Modal";
import axios from "axios";
import Images from "./components/Images/Images";




function App() {
  const [image, setImage] = useState([])
  const [modalActive, setModalActive] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      const getImages = async () => {
          setLoading(true)
          const res = await axios.get('https://boiling-refuge-66454.herokuapp.com/images')
          setImage(res.data)
          setLoading(false)
          console.log(res.data)
      }
      getImages();
  }, [])


  return (

      <div className="test__app _container">
        {/*<main>*/}
        {/*  <button type={"button"} className='button__open-pop-up' onClick={() => setModalActive(true)}>Налоговый вычет</button>*/}
        {/*</main>*/}
        <Modal active={modalActive} setActive={setModalActive}/>
          <Images
            key={image.id}
            id={image.id}
            image={image}
            loading={loading}
          />
      </div>

  );
}

export default App;
