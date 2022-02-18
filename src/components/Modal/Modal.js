import React, {useState} from "react";
import './Modal.css';

const Modal = ({active, setActive}) => {
    const [salary, setSalary] = useState('');
    const [taxesResult, setTaxesResult] = useState('');
    const [lastTaxes, setLastTaxes] = useState('');


    function calcSalary () {
        let taxes = Number(salary * 12) * 0.13;
        let lastTaxes = 260000 - (taxes * 3);
        if (salary === '') {
            alert('Введите сумму');
        } else if (salary >= 55500) {
            alert('Сумма для получения завышена');
        } else {
            setTaxesResult(taxes);
            setLastTaxes(lastTaxes);
            console.log(lastTaxes);
            console.log(taxes);
        }
    }
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                <div className={'modal__content-close-btn'} onClick={() => setActive(false)}>×</div>
                <h4 className={'modal__content-title'}></h4>
                <div className={'modal__content-form'}>
                    <form>
                            <input placeholder={'Ваше имя'} value={salary} onChange={e => setSalary(e.target.value)}></input>
                           <input placeholder={'Ваш комментарий'} value={salary} onChange={e => setSalary(e.target.value)}></input>
                        <div className={'modal__content-form-btn'} onClick={() => calcSalary()}>Расситать</div>
                    </form>
                </div>
                <div className={'modal__content-add-btn'}>Добавить</div>
            </div>
        </div>
    )
};

export default Modal;