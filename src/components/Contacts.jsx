import React from 'react'
import smallLogo from '../img/logoSmall.svg'

function Contacts() {
    return (
        <section className="innerContacts">
            <div className="head">
                <h2 className="display-5">Наши контакты</h2>
                <p>На связи 24/7, будем рады помочь, обращайтесь</p>
                <img src={smallLogo} alt="" />
            </div>
                <div className="nums">
                    <ul>
                        <li>+48 797 933 388</li>
                        <li>Администратор Михаил (Viber, WhatsApp)</li>
                    </ul>
                    <ul>
                        <li>+48 797 133 888</li>
                        <li>Администратор Богдан</li>
                    </ul>
                    <ul>
                        <li>t.me/cleo_partner</li>
                        <li>Администрация компании</li>
                    </ul>
                </div>
        </section>
    )
}

export default Contacts;
