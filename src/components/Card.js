function Card({ card, onCardClick, onDeleteCard }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="place">
      <img
        src={card.link}
        className="place__image"
        alt={card.name}
        onClick={handleClick}
      />
      <button
        type="button"
        aria-label="Удалить место"
        className="interactive-button place__trash"
        onClick={onDeleteCard}
      ></button>
      <div className="place__container">
        <h2 className="place__name">{card.name}</h2>
        <div className="place__like-container">
          <button
            type="button"
            aria-label="Лайкнуть место"
            className="place__like"
          ></button>
          <p className="place__counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
