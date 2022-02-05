import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const nameInputRef = useRef();
  const linkInputRef = useRef();

  useEffect(() => {
    nameInputRef.current.value = '';
    linkInputRef.current.value = '';
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: nameInputRef.current.value,
      link: linkInputRef.current.value,
    });
  }
  return (
    <PopupWithForm
      title="Новое место"
      name="adding"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        ref={nameInputRef}
      />
      <span className="popup__input-error name-input-error"></span>
      <input
        className="popup__input popup__input_type_link"
        type="url"
        id="link-input"
        name="link"
        placeholder="Ссылка на картинку"
        required
        ref={linkInputRef}
      />
      <span className="popup__input-error link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
