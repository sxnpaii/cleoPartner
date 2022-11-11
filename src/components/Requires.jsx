import React from 'react'
import Car from '../img/uberCar.svg';
import appStore from '../img/appStore.svg';
import gPlay from "../img/gPlay.svg";

function Requires() {
    return (
        <section className="innerRequires">
            <h2 className="display-5">Требования к автомобилю</h2>
            <div className="sect">
                <img src={Car} alt="Car" />
                <div className="list">
                    <ul>
                        <li>Авто должно быть 4-х дверное, леворульное.</li>
                        <li>Для работы в сервисе Bolt нужно:
                            <br />
                            — Авто от 2001 года
                        </li>
                        <li>
                            Для работы в сервисе Uber, Free Now нужно:
                            <br />
                            — Авто от 2006 года

                        </li>
                    </ul>
                    <div className="platforms">
                        <a href="#!" className="appStore">
                            <img src={appStore} alt="" />
                        </a>
                        <a href="#!" className="GPlay">
                            <img src={gPlay} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Requires;
