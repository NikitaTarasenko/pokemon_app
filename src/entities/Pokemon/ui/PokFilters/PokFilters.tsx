import React, { memo, useCallback, useState } from 'react';
import styles from './PokFilters.module.scss';
import { Input } from 'shared/ui/Input/Input';
import Card from 'shared/ui/Card/Card';
import { useSelector } from 'react-redux';
import {
    getMainPageSearch,
    getMainPageView,
} from 'pages/MainPage/model/selectors/mainPageSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDIspatch/useAppDispatch';
import { mainPageActions } from 'pages/MainPage/model/slice/mainPageSlice';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { fetchPokemonBySearch } from 'entities/Pokemon/model/services/fetchPokemonBySearch';
import { fetchPokemonList } from 'pages/MainPage/model/services/fetchPokemonsList/fetchPokemonsList';
import { getPokemonDetailsError } from 'entities/Pokemon/model/selectors/pokemonDetailsSelectors';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { PokemonView } from 'entities/Pokemon/model/consts/consts';
import { SortByType } from 'features/SortByType';
import { sortByTypeActions } from 'features/SortByType/model/slice/sortByTypeSlice';

interface PokFiltersProps {
    className?: string;
}

const PokFilters = memo((props: PokFiltersProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const search = useSelector(getMainPageSearch);
    const errorSearch = useSelector(getPokemonDetailsError);

    const fetchData = useCallback(() => {
        dispatch(fetchPokemonList({}));
    }, [dispatch]);

    const fetchDataBySearch = useCallback(() => {
        dispatch(fetchPokemonBySearch({ name: search }));
    }, [dispatch, search]);

    const debounceFetchData = useDebounce(fetchDataBySearch, 500);

    const onChangeSearch = useCallback(
        (newSearch: string) => {
            dispatch(mainPageActions.setSearch(newSearch.toLowerCase()));
            dispatch(sortByTypeActions.setData(undefined));
            debounceFetchData();
            if (errorSearch && !newSearch) {
                fetchData();
            }
        },
        [dispatch, debounceFetchData, errorSearch, fetchData],
    );

    const onChangeView = useCallback(
        (view: PokemonView) => {
            dispatch(mainPageActions.setView(view));
            dispatch(mainPageActions.setOffset());
        },
        [dispatch],
    );
    const onClick = (newView: PokemonView) => () => {
        onChangeView?.(newView);
    };
    return (
        <nav className={styles.nav}>
            <div className={styles.filterBar}>
                <Card className={styles.search}>
                    <Input
                        placeholder={'Search'}
                        onChange={onChangeSearch}
                        value={search}
                    />
                </Card>
                <div>
                    <Button
                        onClick={onClick(PokemonView.TABLE)}
                        theme={ThemeButton.OUTLINE}
                    >
                        Table
                    </Button>
                    <Button
                        onClick={onClick(PokemonView.LIST)}
                        theme={ThemeButton.OUTLINE}
                    >
                        List
                    </Button>
                </div>
            </div>
            <SortByType />
        </nav>
    );
});

export default PokFilters;
