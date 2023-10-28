import React from 'react';
import styles from './PokemonList.module.scss';
import PokemonListItem from '../PokemonListItem/PokemonListItem';

interface PokemonListProps {
    pokemons: any[];
}
const PokemonList = (props: PokemonListProps) => {
    const { pokemons } = props;
    return (
        <div className={styles.list}>
            {pokemons[0] &&
                pokemons.map((pokemon, i) => (
                    <PokemonListItem pokemon={pokemon} key={pokemon.name + i} />
                ))}
        </div>
    );
};

export default PokemonList;
