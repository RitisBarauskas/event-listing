import "./Card.css";

function Card({card, onClickLike}) {
    const isLiked = localStorage.getItem(card.id)
    const cardLikeClass = `card__like ${isLiked ? 'card__like_active' : ''}`

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
            <p className="card__date">
                {card.date.split('.')[0]}
            </p>
            <button type="button" className={cardLikeClass} onClick={_ => onClickLike(card)}>
            </button>
        </li>
    );
}

export default Card;