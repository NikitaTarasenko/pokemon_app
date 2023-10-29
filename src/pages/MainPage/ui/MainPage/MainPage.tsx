import { useCallback, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import axios from 'axios';
import { PokFilters, PokemonList, PokemonView } from 'entities/Pokemon';

import styles from './MainPage.module.scss';
import { fetchPokemonList } from 'pages/MainPage/model/services/fetchPokemonsList/fetchPokemonsList';
import { useAppDispatch } from 'shared/lib/hooks/useAppDIspatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getMainPageError,
    getMainPageIsloading,
    getMainPageSearch,
    getPokemons,
} from 'pages/MainPage/model/selectors/mainPageSelectors';
import NavBar from 'widgets/NavBar/NavBar';

interface MainPageProps {
    className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
    const dispatch = useAppDispatch();
    const pokemons = useSelector(getPokemons);
    const isLoading = useSelector(getMainPageIsloading);
    const search = useSelector(getMainPageSearch);
    const error = useSelector(getMainPageError);

    const fetchData = useCallback(() => {
        dispatch(fetchPokemonList({}));
    }, [dispatch]);

    useEffect(() => {
        // setLoading(true);
        // axios.get(`${baseUrl}/pokemon`).then((res) => {
        //     setLoading(false);
        //     console.log(res.data.results);
        //     setPokemons(res.data.results);
        // });
        fetchData();
    }, []);

    if ((!search && !isLoading && !('results' in pokemons)) || error) {
        return (
            <NavBar>
                <p className={styles.nf}>not found</p>
            </NavBar>
        );
    }

    return (
        <NavBar>
            <PokemonList
                pokemons={pokemons}
                isLoading={isLoading}
                view={PokemonView.TABLE}
            />
        </NavBar>
    );
};

export default MainPage;
