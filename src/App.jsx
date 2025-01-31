import React, { useState} from 'react';
import './App.css'
import Modal from './components/modal';

function App() {
    // создаёт состояние + ф-я отвечающее за видимость окна, по умолчанию будет скрыто
    // и передаёт как пропсы в компонент окна ниже
    const [modalActive, setModalActive] = useState(false)

    return (
        <div className='app'>
            <main>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <button className='button' onClick={()=> setModalActive(true)}>Открыть модальное окно</button>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <button className='button' onClick={()=> setModalActive(true)}>Открыть модальное окно</button>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
                <p>Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. Основной контент страницы на которой размещается модальное окно. </p>
            </main>
            {/* Добавляет модалку с пропсами */}
            <Modal 
                active={modalActive} 
                setActive={setModalActive} 
                title={"Ты уверен, что хочешь удалить цель/задача номер 2?"}
                content = {"Задача организации, в особенности же дальнейшее развитие различных форм деятельности обеспечивает широкому кругу «специалистов» участие в формировании соответствующий условий активизации."}
                resolve={"Подтвердить"}
                reject={"Отменить"}
            >
            </Modal>         
        </div>
    )
}

export default App