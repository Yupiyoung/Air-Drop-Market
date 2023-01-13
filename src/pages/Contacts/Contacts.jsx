import React from 'react';
import contactsStyle from './contacts.module.scss';

function Contacts() {
  return (
    <div className="container" style={{ minHeight: 'calc(100vh - 70px)' }}>
      <div className={contactsStyle.contacts}>
        <h1>Контакты</h1>
        <p>
          В нашей команде работают люди с большим опытом в продаже и доставке вещей из Китая.( Наши
          контакты c описанием и отзывами можно найти ниже по ссылке).
        </p>
        <div className={contactsStyle.contactsCard}>
          <h2>Крылов Михаил</h2>
          <p>Менеджер</p>
          <a>VK</a>
        </div>
        <div className={contactsStyle.contactsCard}>
          <h2>Спицын Максим</h2>
          <p>Администратор</p>
          <a>VK</a>
        </div>
        <div className={contactsStyle.contactsCard}>
          <h2>Поддержка</h2>
          <a style={{ marginRight: '10px' }}>VK</a>
          <a>Telegram</a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
