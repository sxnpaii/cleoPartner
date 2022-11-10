import React from 'react'

function Services() {
    return (
        <section className="innerServices">
            <h2 className="display-5">Наши преимуществa</h2>
            <div className="sect">
                <div className="skill">
                    <div className="icon">
                        <i className='bx bx-money'></i>
                    </div>
                    <p>Автоматическая выплата зарплаты каждые 24 часа</p>
                </div>
                <div className="skill">
                    <div className="icon">
                        <i class='bx bx-check-square'></i>
                    </div>
                    <p>Рекомендованный партнер Uber, Bolt, Free Now</p>
                </div>
                <div className="skill">
                    <div className="icon">
                        <i className="bx bx-support"></i>
                    </div>
                    <p>Техническая поддержка 24/7 в онлайн-режиме
                    </p>
                </div>
                <div className="skill">
                    <div className="icon green">
                        <i class='bx bxs-file'></i>
                    </div>
                    <p>Мы оплачиваем штрафы по безналичным поездкам</p>
                </div>
                <div className="skill">
                    <div className="icon green">
                        <i class='bx bx-calendar-week' ></i>
                    </div>
                    <p>До 2-ух рабочих дней подключения на флот водителя</p>
                </div>
                <div className="skill">
                    <div className="icon green">
                        <i className="bx bx-star"></i>
                    </div>
                    <p>Являемся единственным гарантом выплат на рынке</p>
                </div>
            </div>
        </section>
    )
}

export default Services;
