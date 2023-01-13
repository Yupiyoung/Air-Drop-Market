import React from 'react';
import footerStyle from './footer.module.scss';
import Sberbank from './Sberbank.svg';
import VisaMastercard from './Visa-mastercard.svg';
function Footer() {
  return (
    <footer>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div className={footerStyle.menu}>
            <li>
              <ul>
                <a>О нас</a>
              </ul>
              <ul>
                <a>Каталог</a>
              </ul>
              <ul>
                <a>Доставка и оплата</a>
              </ul>
              <ul>
                <a>Отзывы</a>
              </ul>
            </li>
          </div>
          <div className={footerStyle.contacts}>
            <h2>Контакты</h2>
            <li>
              <ul>
                <p>Почта:</p>
                <a>air-drop-market@gmail.com</a>
              </ul>
              <ul>
                <a>Telegram</a>
              </ul>
              <ul>
                <a>Vk</a>
              </ul>
            </li>
          </div>
        </div>
        <div className={footerStyle.mainFooter}>
          <div className={footerStyle.payMethods}>
            <img alt="Sberbank" height="30px" src={Sberbank}></img>
            <img alt="VisaMastercard" height="30px" src={VisaMastercard}></img>
          </div>
          <p>ООО “Аир Дроп”, 2023. Все права защищены</p>
          <a>Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
