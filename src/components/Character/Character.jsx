import "./characters.css";
import { characters } from "../../data/Characters";
import CardCharacters from "./Card/CardCharacters";

const Characters = () => {
  return (
    <div className="main-game_caracters">
      <h2>Personnages</h2>
      <div className="main-game_caracters_slider">
        {characters.map((character) => (
          <CardCharacters key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
