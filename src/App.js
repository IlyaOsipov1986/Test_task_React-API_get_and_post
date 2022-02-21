import { useState, useEffect } from 'react';
import axios from 'axios';

import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";

const App = () => {
    const [cards, setCards] = useState([]);
    const [isCardsLoading, setCardsLoading] = useState(true);
    const [isModalActive, setModalActive] = useState(false);
    const [modalContext, setModalContext] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const cardsResponse = await axios.get(
                'http://boiling-refuge-66454.herokuapp.com/images'
            );

            setCardsLoading(false);
            setCards(cardsResponse.data);
        };

        fetchData();
    }, []);

    const loadModalWindow = (id) => {
        const fetchData = async () => {
            const response = await axios.get(
                `http://boiling-refuge-66454.herokuapp.com/images/${id}`
            );

            setModalContext(response.data);
            setModalActive(true);
        };

        fetchData();
    };

    return (
        <div className="wrapper clear">
            {isModalActive && (
                <Modal
                    context={modalContext}
                    handleCloseButton={() => setModalActive(false)}
                />
            )}
            <header className="d-flex">
                    <div className="headerInfo">
                        <h3 className="text-uppercase">Test App</h3>
                        <p className="opacity-5">Gallery with modal window</p>
                    </div>
            </header>
            <main className="content">
                <div className="cardsBlock d-flex flex-wrap align-center">
                    {(isCardsLoading ? [...Array(9)] : cards).map((card, index) => {
                        return (
                            <Card
                                key={index}
                                loading={isCardsLoading}
                                {...card}
                                handleClick={loadModalWindow}
                            />
                        );
                    })}
                </div>
            </main>
            <footer>
                <div className="footerInfo d-flex justify-center align-center opacity-5">
                    <p>©2018-2019</p>
                </div>
            </footer>
        </div>
    );
};

export default App;