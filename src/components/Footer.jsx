import React from 'react';
import logo from '../img/logo.svg';

function Footer() {
    return (
        <section className="innerFooter">
            <div className="subhead">
                <ul>
                    <li>
                        <a href="#!">Главная</a>
                    </li>
                    <li>
                        <a href="#!">Страховка</a>
                    </li>
                    <li>
                        <a href="#!">FAQ</a>
                    </li>
                    <li>
                        <a href="#!">О нас</a>
                    </li>
                    <li>
                        <a href="#!">Контакты</a>
                    </li>

                </ul>
                <img src={logo} alt="" />
            </div>
            <div className="subfoot">
                <div className="copyr">
                    <p>
                        © 2021 Cleopartner
                    </p>
                    <a href="#!">
                        <i className="bx bxl-telegram"></i>
                    </a>
                    <a href="!#">
                        <i className="bx bxl-instagram"></i>
                    </a>
                </div>
                <div className="privacy">
                    <p>Политика конфиденциальности</p>
                    <p>Договора</p>
                </div>
            </div>




        </section>
    )
}

export default Footer;
