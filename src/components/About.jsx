import React from 'react'
// source
import phones from '../img/2 айфонс 1.svg';
import desktopMap from '../img/desktopMap.svg';
function About() {
    return (
        <section className="innerAbout">
            <div className="phones">
                <img src={phones} alt="" />
                <div className="text">
                    <h2 className='display-5'>О нашей компании</h2>
                    <h4 className='h3'>Компания Cleo Partners предлагает Вам комплексное сотрудничество на платформах Uber, Bolt, Free Now, Uber Eats, Bolt Food.</h4>
                    <p>С нами уже работают более 2000 довольных водителей по всей Польше, которые ежедневно зарабатывают.</p>
                </div>
            </div>
            <div className="desktops">
                <div className="text">
                    <h2>
                        Работая с нами Вы сохраняете все преимущества водителя такси
                    </h2>
                    <ul>
                        <li>
                            Вы имеете возможность самостоятельно устанавливать рабочий график и получать заработанные деньги ежедневно.
                        </li>
                        <li>
                            Всего 4 документа разделяют вас от обычного человека и работника нашей компании.
                        </li>
                        <li>
                            Работать можно на собственном или арендованном автомобиле из нашего автопарка, либо из автопарка
                            за пределами компании.
                        </li>
                    </ul>
                    <div className="btn-gr">
                        <button>Консультация</button>
                        <a href="#!">Узнать больше</a>
                    </div>
                </div>
                <div className="map">
                    <img src={desktopMap} alt="" className='mapImg' />
                </div>
            </div>

        </section>
    )
}

export default About
