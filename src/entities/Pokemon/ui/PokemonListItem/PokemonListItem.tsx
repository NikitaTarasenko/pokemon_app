import React from 'react';
import Card from 'shared/ui/Card/Card';
import styles from './PokemonListItem.module.scss';
import { Pokemon } from 'entities/Pokemon/types/pokemon';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { getRoutePokemonDetails } from 'shared/const/router';

interface PokemonListItemProps {
    pokemon: Pokemon;
}

const PokemonListItem = (props: PokemonListItemProps) => {
    const { name, url } = props.pokemon;
    let id = '1';
    return (
        <AppLink to={getRoutePokemonDetails(id)}>
            <Card className={styles.card}>
                <div className={styles.name}>{name}</div>
            </Card>
        </AppLink>
    );
};

export default PokemonListItem;
