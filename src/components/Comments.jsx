import React from 'react'
// import React, { useRef, useState } from "react";
// swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
// img
import userImage from '../img/userImg.svg';

function Comments() {
    return (
        <section className="innerComments">
            <h2 className="display-5">Отзывы от наших водителей</h2>
            <Swiper
                dir="rtl"
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                spaceBetween={30}
                loop={true}
                loopFillGroupWithBlank={false}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,

                }}
                modules={[Navigation, Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={userImage} alt="user" />
                    <div className="text">
                        <p className='lorem'>Несколько месяцев назад, я стал водителем компании Cleo Partners. Ребята очень молодые и упорные. Сначала я отнесся с недоверием, так как стоимость аренды, как мне казалось, была несколько высокой.
                            Но, через месяц я понял, что все имеет свою цену. Результаты, которые дали в короткий срок, 2 месяца, меня удивили. Все четко, прозрачно, развернутые отчеты и контроль бизнес-процессов. В плане организации, если и возникали какие-то вопросы,  то все решали в течении считанных минут или часов.</p>
                        <div className="userName">
                            <b>Юрий Филионов</b>
                            <p>Водитель в сети Uber</p>
                        </div>
                    </div>
                    
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Comments;
