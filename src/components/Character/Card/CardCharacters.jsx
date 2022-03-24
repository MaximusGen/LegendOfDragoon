const CardCharacters = ({ character }) => {
  return (
    <div className="characters">
      <img src={character.image} alt={character.name} />
      <div className="characters_details">
        <h3 style={{ color: character.colorName }}>{character.name}</h3>
        <div className="details">
          <h4>Age: {character.age} ans</h4>
          <h4>Lieu de naissance: {character.born}</h4>
          <h5>Elements: {character.element}</h5>
          <p>{character.histoire}</p>
        </div>
      </div>
    </div>
  );
};

export default CardCharacters;
