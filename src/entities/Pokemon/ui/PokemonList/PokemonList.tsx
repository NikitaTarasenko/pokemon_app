import React from 'react';
import styles from './PokemonList.module.scss';
import PokemonListItem from '../PokemonListItem/PokemonListItem';
import { PokemonView } from 'entities/Pokemon/model/consts/consts';
import { PokemonItem, Pokemons } from 'entities/Pokemon/model/types/pokemon';
import { PokemonListItemSkeleton } from '../PokemonListItem/PokemonListItemSkeleton';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getMainPageSearch } from 'pages/MainPage/model/selectors/mainPageSelectors';

interface PokemonListProps {
    className?: string;
    pokemons: Pokemons;
    view?: PokemonView;
    isLoading?: boolean;
}
const PokemonList = (props: PokemonListProps) => {
    const { pokemons, className, isLoading, view = PokemonView.TABLE } = props;
    const search = useSelector(getMainPageSearch);

    const getSkeletons = (view: PokemonView) =>
        new Array(view === PokemonView.TABLE ? 12 : 3)
            .fill(0)
            .map((item, index) => (
                <PokemonListItemSkeleton
                    className={styles.card}
                    key={index}
                    view={view}
                />
            ));

    const renderPokemons = (pokemon: Pokemons, index: number) => (
        <PokemonListItem
            pokemon={pokemons.results[index]}
            key={index}
            view={view}
        />
    );

    return (
        <div className={classNames(styles.list, {}, [className, styles[view]])}>
            {isLoading && getSkeletons(view)}
            {!search && 'results' in pokemons
                ? pokemons.results.map((pok: any, index: number) =>
                      renderPokemons(pok, index),
                  )
                : null}
            {/* {search &&            <PokemonListItem pokemon={} view={view}/>} */}
        </div>
    );
};

export default PokemonList;
