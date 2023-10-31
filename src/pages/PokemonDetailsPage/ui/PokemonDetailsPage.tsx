import React, { useEffect } from 'react';
import styles from './PokemonDetailsPage.module.scss';
import { useAppDispatch } from 'shared/lib/hooks/useAppDIspatch/useAppDispatch';
import { pokemonDetailsActions } from 'entities/Pokemon/model/slice/pokemonDetailsSlice';
import { fetchPokemonBySearch } from 'entities/Pokemon/model/services/fetchPokemonBySearch';
import Card from 'shared/ui/Card/Card';
import { mainPageActions } from 'pages/MainPage/model/slice/mainPageSlice';
import { useSelector } from 'react-redux';
import {
    getPokemonDetailsDetailsInfo,
    getPokemonDetailsIsloading,
} from 'entities/Pokemon/model/selectors/pokemonDetailsSelectors';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

const PokemonDetailsPage = () => {
    const currentPokemon = window.location.href.split('pokemons/')[1];
    const dispatch = useAppDispatch();
    const details = useSelector(getPokemonDetailsDetailsInfo);
    const isLoading = useSelector(getPokemonDetailsIsloading);

    useEffect(() => {
        dispatch(pokemonDetailsActions.setOpenDetails(true));
        dispatch(mainPageActions.setSearch(currentPokemon));
        dispatch(fetchPokemonBySearch({}));

        return () => {
            dispatch(pokemonDetailsActions.setOpenDetails(false));
            dispatch(mainPageActions.setSearch(''));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) {
        return (
            <div className={styles.detailspage}>
                <Card className={styles.card}>
                    <Skeleton width={'100%'} height={400} />
                </Card>
            </div>
        );
    }
    return (
        <div className={styles.detailspage}>
            <Card className={styles.card}>
                <div className={styles.head}>
                    <div className={styles.row}>
                        <span>Name:</span>
                        <i> {details?.name}</i>
                    </div>
                    <img
                        alt="pokemon"
                        className={styles.img}
                        src={details?.sprites.back_default}
                    />
                </div>
                <div className={styles.row}>
                    <span>Moves:</span>
                    <div className={styles.listMoves}>
                        {details?.moves.map((item: any, i: number) => (
                            <div className={styles.listMovesItem} key={i}>
                                {item.move.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.row}>
                    <span>Stats:</span>
                    {details?.stats.map((item: any, i: number) => (
                        <div className={styles.stats} key={i}>
                            <div>{item.stat.name} = </div>
                            <div className={styles.statN}>{item.base_stat}</div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default PokemonDetailsPage;
