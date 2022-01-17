import { useState } from 'react';
import logo from '../images/logo.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import '../index.css';

function App() {
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleDeleteCardClick() {
    setIsDeleteCardPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard(null);
  }
  function handleCardClick(card) {
    console.log(card);
    setSelectedCard(card);
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="page">
      <Header src={logo} />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onDeleteCard={handleDeleteCardClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="edit"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_name"
          type="text"
          id="username-input"
          name="username"
          placeholder="Жак-Ив Кусто"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__input-error username-input-error"></span>
        <input
          className="popup__input popup__input_type_about"
          type="text"
          id="about-input"
          name="about"
          placeholder="Исследователь океана"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__input-error about-input-error"></span>
        <button
          type="submit"
          aria-label="Сохранить информацию"
          className="popup__save-button"
        >
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="adding"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_name"
          type="text"
          id="name-input"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__input-error name-input-error"></span>
        <input
          className="popup__input popup__input_type_link"
          type="url"
          id="link-input"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error link-input-error"></span>
        <button
          type="submit"
          aria-label="Сохранить информацию"
          className="popup__save-button"
        >
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="change"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_link"
          type="url"
          id="avatar-input"
          name="avatar"
          placeholder="Ссылка на аватарку"
          required
        />
        <span className="popup__input-error avatar-input-error"></span>

        <button
          type="submit"
          aria-label="Сохранить аватар"
          className="popup__save-button"
        >
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm
        title="Вы уверены?"
        name="delete"
        isOpen={isDeleteCardPopupOpen}
        onClose={closeAllPopups}
      >
        <button
          type="submit"
          aria-label="Удались карточку"
          className="popup__save-button popup__save-button_type_delete"
        >
          Да
        </button>
      </PopupWithForm>

      {selectedCard && (
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      )}
    </div>
  );
}

export default App;