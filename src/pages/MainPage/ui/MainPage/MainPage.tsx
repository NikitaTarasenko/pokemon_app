import { memo, useCallback, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import axios from 'axios';
import {
    PokFilters,
    PokemonList,
    PokemonType,
    PokemonView,
} from 'entities/Pokemon';

import styles from './MainPage.module.scss';
import { fetchPokemonList } from 'pages/MainPage/model/services/fetchPokemonsList/fetchPokemonsList';
import { useAppDispatch } from 'shared/lib/hooks/useAppDIspatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getMainPageError,
    getMainPageHasMore,
    getMainPageIsloading,
    getMainPageLimit,
    getMainPageNumberOffset,
    getMainPageSearch,
    getMainPageView,
    getPokemons,
} from 'pages/MainPage/model/selectors/mainPageSelectors';
import NavBar from 'widgets/NavBar/NavBar';
import {
    getPokemonDetailsDetailsInfo,
    getPokemonDetailsError,
    getPokemonDetailsIsloading,
} from 'entities/Pokemon/model/selectors/pokemonDetailsSelectors';
import { PageWrapper } from 'widgets/PageWrapper';
import { mainPageActions } from 'pages/MainPage/model/slice/mainPageSlice';
import {
    getSortByTypeData,
    getSortByTypeIsLoading,
} from 'features/SortByType/model/selectors/sortByTypeSelectors';
import { sortByTypeActions } from 'features/SortByType/model/slice/sortByTypeSlice';

interface MainPageProps {
    className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
    const dispatch = useAppDispatch();
    const pokemons = useSelector(getPokemons);
    const pokemonDetails = useSelector(getPokemonDetailsDetailsInfo);
    const isLoading = useSelector(getMainPageIsloading);
    const isLoadingSearch = useSelector(getPokemonDetailsIsloading);
    const search = useSelector(getMainPageSearch);
    const error = useSelector(getMainPageError);
    const errorBySearch = useSelector(getPokemonDetailsError);
    const view = useSelector(getMainPageView);
    const limit = useSelector(getMainPageLimit);
    const offset = useSelector(getMainPageNumberOffset);
    const hasMore = useSelector(getMainPageHasMore);
    const isLoadingSorted = useSelector(getSortByTypeIsLoading);
    const sortedData = useSelector(getSortByTypeData);

    const fetchData = useCallback(() => {
        dispatch(sortByTypeActions.setType(PokemonType.ALL));
        dispatch(fetchPokemonList({ limit }));
    }, [dispatch, limit]);

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onLoadNextPart = useCallback(() => {
        if (!isLoading && !search && hasMore && !isLoadingSorted) {
            dispatch(mainPageActions.setLimit(limit + offset));
            dispatch(fetchPokemonList({ limit }));
        }
    }, [dispatch, isLoading, limit, search, offset, hasMore, isLoadingSorted]);

    if (
        (error && !isLoading) ||
        (errorBySearch && !isLoadingSearch && search)
    ) {
        return (
            <NavBar>
                <p className={styles.nf}>Something went wrong with request</p>
            </NavBar>
        );
    }
    return (
        <NavBar>
            <PageWrapper
                onScrollEnd={onLoadNextPart}
                className={classNames(styles.page, {}, [className])}
            >
                <PokemonList
                    pokemons={pokemons}
                    pokemonSearched={pokemonDetails}
                    sortedData={sortedData}
                    isLoading={isLoading}
                    view={view}
                    isLoadingSorted={isLoadingSorted}
                />
            </PageWrapper>
        </NavBar>
    );
};

export default memo(MainPage);
