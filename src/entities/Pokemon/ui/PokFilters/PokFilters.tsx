import React, { useCallback, useState } from 'react';
import styles from './PokFilters.module.scss';
import { Input } from 'shared/ui/Input/Input';
import Card from 'shared/ui/Card/Card';

interface PokFiltersProps {
    className?: string;
}

const PokFilters = (props: PokFiltersProps) => {
    const { className } = props;
    const [search, setSearch] = useState('');

    // const fetchData = useCallback(() => {
    //     dispatch(fetchArticlesList({ replace: true }));
    // }, [dispatch]);

    //   const debounceFetchData = useDebounce(fetchData, 500);

    const onChangeSearch = useCallback((newSearch: string) => {
        // dispatch(articlesPageActions.setSearch(newSearch));
        // dispatch(articlesPageActions.setPage(1));
        //debounceFetchData();
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
function useDebounce(fetchData: any, arg1: number) {
    throw new Error('Function not implemented.');
}
