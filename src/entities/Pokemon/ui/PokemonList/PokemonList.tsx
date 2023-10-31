import React, { memo } from 'react';
import styles from './PokemonList.module.scss';
import PokemonListItem from '../PokemonListItem/PokemonListItem';
import { PokemonType, PokemonView } from 'entities/Pokemon/model/consts/consts';
import {
    PokemonItemInfo,
    Pokemons,
} from 'entities/Pokemon/model/types/pokemon';
import { PokemonListItemSkeleton } from '../PokemonListItem/PokemonListItemSkeleton';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getMainPageSearch } from 'pages/MainPage/model/selectors/mainPageSelectors';
import { getPokemonDetailsIsloading } from 'entities/Pokemon/model/selectors/pokemonDetailsSelectors';
import { sortedPokemons } from 'features/SortByType/model/types/sortedPokemons';
import { getSortByTypeType } from 'features/SortByType/model/selectors/sortByTypeSelectors';

interface PokemonListProps {
    className?: string;
    pokemons?: Pokemons;
    pokemonSearched?: PokemonItemInfo;
    view?: PokemonView;
    isLoading?: boolean;
    sortedData?: sortedPokemons;
    isLoadingSorted?: boolean;
}
const PokemonList = memo((props: PokemonListProps) => {
    const {
        pokemons,
        className,
        isLoading,
        view = PokemonView.TABLE,
        pokemonSearched,
        sortedData,
        isLoadingSorted,
    } = props;
    const isLoadingByName = useSelector(getPokemonDetailsIsloading);
    const search = useSelector(getMainPageSearch);
    const type = useSelector(getSortByTypeType);

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
            pokemon={pokemons?.results[index]}
            key={index}
            view={view}
        />
    );

    if (type && type !== PokemonType.ALL) {
        return (
            <div
                className={classNames(styles.list, {}, [
                    className,
                    styles[view],
                ])}
            >
                {!search && sortedData
                    ? sortedData.pokemon?.map((pok: any, index: number) => (
                          <PokemonListItem
                              pokemon={pok.pokemon}
                              key={index}
                              view={view}
                          />
                      ))
                    : null}
                {isLoadingSorted && getSkeletons(view)}
            </div>
        );
    }
    return (
        <div className={classNames(styles.list, {}, [className, styles[view]])}>
            {(!search &&
                !sortedData?.name &&
                pokemons &&
                pokemons.results.length > 0) ||
            (!search && pokemons && type === PokemonType.ALL)
                ? pokemons.results.map((pok: any, index: number) =>
                      renderPokemons(pok, index),
                  )
                : null}
            {search && !sortedData?.name && pokemonSearched?.name ? (
                <PokemonListItem
                    pokemonSearched={pokemonSearched}
                    view={view}
                />
            ) : null}
            {(isLoading || isLoadingByName) && getSkeletons(view)}
        </div>
    );
});

export default PokemonList;
