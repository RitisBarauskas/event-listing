import "./Card.css";

function Card({card, onClickLike, isFavorites}) {
    const isLiked = localStorage.getItem(card.id)
    const cardLikeClass = `card__like ${isLiked ? 'card__like_active' : ''}`
    const cardDateClass = `card__date ${isFavorites ? 'card__date_favorite' : ''}`;
    return (
        <li className="card">
            <img
                src={card.image}
                className="card__image"
                alt={card.genre}
            />
            <h2 className="card__title">
                {card.name}
            </h2>
            <p className={cardDateClass}>
                {card.date.split('.')[0]} {isFavorites? card.date.split('.')[1]: ''}
            </p>
            <button type="button" className={cardLikeClass} onClick={_ => onClickLike(card)}>
            </button>
        </li>
    );
}

export default Card;