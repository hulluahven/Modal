import React from "react";
import './modal.css'
// для управления состоянием передаёт props
// active - отвечает за отображение
// setActive - ф-я которая меняет состояние
// title - текст заголовка
// content - контентное содержимое модалки
// resolve - текст в кнопке принять
// reject - текст в кнопке отменить
const Modal = ({active, setActive, title, content, resolve, reject}) => {
    return (
        // здесь передаётся состояние и добавляется/снимается класс в зависимости от значения состояния  соотв. true/false
        // на кнопки отменить и закрытия вешается слушатель, который будет менять состояние модалки - открытое/закрытое
        <div className={active ? "modal active": "modal"}>
            <div className={active ? "modal__content active": "modal__content"}> 
                <div className="modal__title-container">
                    <h2 className='modal__title'>{title}</h2>
                    <button className='modal__button modal__button-close' onClick={()=> setActive(false)}  type='button'></button>
                </div>
                <div className="modal__text-container">
                    <p className='modal__text'>{content}</p>
                </div>
                <div className='modal__buttons-wrapper'>
                    <button className='modal__button modal__button--reject' onClick={()=> setActive(false)} type='button'>{reject}</button>
                    <button className='modal__button modal__button--resolve' type='button'>{resolve}</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;