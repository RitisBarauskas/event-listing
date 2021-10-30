import "./Main.css";
import Card from "../Card/Card";

function Main({cards}) {
    return (
        <main className="main">
            <ul className="main__places">
                {cards.map((card, i) => (
                    <Card
                        key={card.id}
                        card={card}
                    />
                ))}
            </ul>
        </main>
    );
}

export default Main;