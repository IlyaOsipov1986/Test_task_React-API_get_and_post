import React, {useState} from "react";
import axios from "axios";
import {useEffect} from "react";
import './Images.css';
import Modal from "../Modal/Modal";


const Images = () => {
    const [isLoader, setIsLoader] = useState(false);
    const  [items, setItems] = useState([]);
    const [modalActive, setModalActive] = useState(false)


    useEffect(() => {
        const getImages = async () => {
            setIsLoader(true)
            const res = await axios.get('https://boiling-refuge-66454.herokuapp.com/images')
            setItems(res.data)
            setIsLoader(false)
            console.log(res.data)
        }
        getImages();
    }, [])

    if(isLoader) {
            return <h2>Loading...</h2>
        }
    return (
        <div className={'img__card'}>
            {
            items.map((item) => (
                <img key={item.id} src={item.url} alt={''}  onClick={() => setModalActive(true)}/>
            ))
            }
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default Images;