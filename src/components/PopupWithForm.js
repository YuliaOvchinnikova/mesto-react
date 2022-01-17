function PopupWithForm({ title, name, buttonText, isOpen, onClose, children }) {
  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          type="button"
          aria-label="Закрыть редактирование информации"
          className="interactive-button popup__close-button"
          onClick={onClose}
        ></button>
        <h2 className="popup__heading">{title}</h2>
        <form name={name} className="popup__form">
          {children}
          <button
            type="submit"
            aria-label={buttonText}
            className="popup__save-button"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
