import "./Main.css";
import Card from "../Card/Card";

function Main() {
    return (
        <main className="main">
            <ul className="main__places">
                <Card />
                <Card />
                <Card />
                <Card />
            </ul>
        </main>
    );
}

export default Main;