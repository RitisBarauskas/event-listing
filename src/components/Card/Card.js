import "./Card.css";

function Card({card}) {
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
            <button type="button" className="card__like card__like_active">
            </button>
        </li>
    );
}

export default Card;