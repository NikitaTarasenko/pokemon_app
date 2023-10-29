import React, { useCallback, useState } from 'react';
import styles from './PokFilters.module.scss';
import { Input } from 'shared/ui/Input/Input';
import Card from 'shared/ui/Card/Card';
import { useSelector } from 'react-redux';
import { getMainPageSearch } from 'pages/MainPage/model/selectors/mainPageSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDIspatch/useAppDispatch';
import { mainPageActions } from 'pages/MainPage/model/slice/mainPageSlice';
import { fetchPokemonList } from 'pages/MainPage/model/services/fetchPokemonsList/fetchPokemonsList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';

interface PokFiltersProps {
    className?: string;
}

const PokFilters = (props: PokFiltersProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const search = useSelector(getMainPageSearch);

    const fetchData = useCallback(() => {
        dispatch(fetchPokemonList({ name: search }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 400);

    const onChangeSearch = useCallback((newSearch: string) => {
        dispatch(mainPageActions.setSearch(newSearch));
        // dispatch(articlesPageActions.setPage(1));
        debounceFetchData();
    }, []);

    return (
        <div className={styles.filterBar}>
            <Card className={styles.search}>
                <Input
                    placeholder={'Search'}
                    onChange={onChangeSearch}
                    value={search}
                />
            </Card>
        </div>
    );
};

export default PokFilters;
