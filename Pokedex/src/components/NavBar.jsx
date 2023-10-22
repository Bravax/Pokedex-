import PropTypes from "prop-types";

function NavBar({ pokemonList, selectedPokemon, onPokemonClick }) {
  return (
    <div>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <button onClick={() => onPokemonClick(pokemon)}>
              {pokemon.name}
            </button>
          </li>
        ))}
      </ul>
      {selectedPokemon && (
        <div>
          <h2>{selectedPokemon.name}</h2>
          <img src={selectedPokemon.imgSrc} alt={selectedPokemon.name} />
        </div>
      )}
    </div>
  );
}

NavBar.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
  selectedPokemon: PropTypes.object,
  onPokemonClick: PropTypes.func.isRequired,
};

export default NavBar;
