import React, { useState, useEffect } from 'react';
import Card from './Card.js';
import api from '../utils/Api.js';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onDeleteCard,
  onCardClick,
}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__about-person">
          <div
            className="profile__photo-container interactive-button"
            onClick={onEditAvatar}
          >
            <img
              src={userAvatar}
              alt="Аватар пользователя"
              className="profile__photo"
            />
          </div>

          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              aria-label="Редактировать профайл"
              className="interactive-button profile__edit-button"
              onClick={onEditProfile}
            ></button>
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          aria-label="Добавить карточку с местом"
          className="interactive-button profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="places" aria-label="Фотографии мест">
        {cards.map((card) => (
          <Card
            card={card}
            onCardClick={onCardClick}
            onDeleteCard={onDeleteCard}
            key={card._id}
          />
        ))}
      </section>
    </main>
  );
}
export default Main;
