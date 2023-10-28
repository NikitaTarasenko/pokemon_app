import { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import axios from 'axios';
import { PokFilters, PokemonList } from 'entities/Pokemon';

import styles from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}
const baseUrl = 'https://pokeapi.co/api/v2';

const MainPage = ({ className }: MainPageProps) => {
    const [loading, setLoading] = useState(false);
    const [pokemons, setPokemons] = useState<any>({});
    useEffect(() => {
        setLoading(true);
        axios.get(`${baseUrl}/pokemon`).then((res) => {
            setLoading(false);
            console.log(res.data.results);
            setPokemons(res.data.results);
        });
    }, []);

    if (loading) {
        return <p>loading...</p>;
    }
    return (
        <div
            className={classNames(styles.main, {}, [className])}
            data-testid="MainPage"
        >
            <PokFilters />
            <PokemonList pokemons={pokemons} />
        </div>
    );
};

export default MainPage;
