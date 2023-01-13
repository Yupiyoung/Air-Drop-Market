import React from 'react';
import aboutUsStyle from './aboutUs.module.scss';
import Logo from './Logo.svg';
function AboutUs() {
  return (
    <div className="container" style={{ minHeight: 'calc(100vh - 70px)' }}>
      <div className={aboutUsStyle.aboutUs}>
        <h1>О нас</h1>
        <h2>Чем мы занимаемся?</h2>
        <p>
          Наш сервис предоставляет услуги доставки и выкупом лимитированных вещей из Европы и Китая.
          С помощью нас вы можете сделать заказ в Китае с таких площадок как Poizon, Nice, 95. Мы
          предоставляем авиатранспортный вид доставки, на данный момент это является самым быстрым и
          безопасным способом доставки. Мы старается предоставить вам самые быстрые сроки доставки,
          а так же приятный курс.
        </p>
        <h2>Почему именно мы?</h2>
        <p>
          Мы старается предоставить вам самые быстрые сроки доставки, а так же приятный вам курс. Cо
          временем сервис будет усовершенствован с целью более удобного и быстрого оформления
          заказа.
        </p>
        <div className={aboutUsStyle.aboutUsWall}>
          <img alt="" width="100%" src=""></img>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
