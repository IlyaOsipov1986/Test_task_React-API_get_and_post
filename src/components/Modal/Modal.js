import React, {useState} from "react";
import './Modal.css';

const Modal = ({active, setActive}) => {
    const [salary, setSalary] = useState('');
    const [taxesResult, setTaxesResult] = useState('');
    const [lastTaxes, setLastTaxes] = useState('');
    const [hidden, setHidden] = useState(true);

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
            setHidden(false);
            console.log(lastTaxes);
            console.log(taxes);
        }
    }
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                <div className={'modal__content-close-btn'} onClick={() => setActive(false)}>×</div>
                <h4 className={'modal__content-title'}>Налоговый вычет</h4>
                <div className={'modal__content-text'}>Используйте налоговый вычет чтобы погасить ипотеку досрочно.
                    Размер налогового вычета составляет не более 13% от своего официального годового дохода.</div>
                <div className={'modal__content-form'}>
                    <form>
                        <label>Ваша зарплата в месяц
                            <input placeholder={'Введите данные'} value={salary} onChange={e => setSalary(e.target.value)}></input></label>
                        <div className={'modal__content-form-btn'} onClick={() => calcSalary()}>Расситать</div>
                    </form>
                </div>
                <div className={hidden ? 'modal__content-result hidden' : 'modal__content-result'}>
                    <span>{taxesResult} рублей в 1-ый год</span>
                    <span>{taxesResult} рублей в 2-ой год</span>
                    <span>{taxesResult} рублей в 3-ий год</span>
                    <span>{lastTaxes} рублей в 4-ый год </span>
                </div>
                <div className={'modal__content-add-btn'}>Добавить</div>

            </div>
        </div>
    )
};

export default Modal;