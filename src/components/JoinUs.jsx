import React from 'react'

function JoinUs() {
    return (
        <section className="innerJoinUs">
            <div className="text">
                <h2 className="display-6">
                    Присоединяйся к нашей службе такси и начинай зарабатывать прямо сейчас!
                </h2>
                <p>Оставляй заявку для сотрудничества с Cleo Partners</p>
            </div>
            <form action="">
                <input type="text" placeholder='Ваше имя' />
                <input type="text" placeholder='+48 (99) 999-99-99' />
                <button className="btn btn-light">
                    Оставить заявку
                </button>
            </form>
        </section>
    )
}

export default JoinUs;
