import "./Card.css";

function Card() {
    return (
        <li className="card">
            <img
                src="https://cdn3.xsolla.com/files/uploaded/113250/826adbf1a19ba19e6ba9af9308d2b309.png"
                className="card__image"
                alt="Подпись к картике"
            />
            <h2 className="card__title">
                Rave Autumn
            </h2>
            <p className="card__date">
                14
            </p>
            <button type="button" className="card__like card__like_active">
            </button>
        </li>
    );
}

export default Card;