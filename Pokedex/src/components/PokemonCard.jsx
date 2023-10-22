import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  return (
    <div>
      {pokemon.name}
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>Elle est où ma photo ? Elle est où, hein ? 😡😡</p>
      )}
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
