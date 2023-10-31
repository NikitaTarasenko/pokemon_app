import React, { memo, useCallback } from 'react';
import styles from './SortByType.module.scss';
import Card from 'shared/ui/Card/Card';
import { PokemonType } from 'entities/Pokemon';
import { useAppDispatch } from 'shared/lib/hooks/useAppDIspatch/useAppDispatch';
import { fetchPokemonListByType } from '../model/services/fetcPokemonListByType';
import { sortByTypeActions } from '../model/slice/sortByTypeSlice';
import { useSelector } from 'react-redux';
import { getSortByTypeType } from '../model/selectors/sortByTypeSelectors';
import { mainPageActions } from 'pages/MainPage/model/slice/mainPageSlice';
import { fetchPokemonList } from 'pages/MainPage/model/services/fetchPokemonsList/fetchPokemonsList';

const SortByType = memo(() => {
    const dispatch = useAppDispatch();
    const type = useSelector(getSortByTypeType);

    const onClickHandle = useCallback(
        (type: PokemonType) => {
            if (type !== PokemonType.ALL) {
                dispatch(sortByTypeActions.setType(type));
                dispatch(mainPageActions.setSearch(''));
                dispatch(fetchPokemonListByType({ type: type }));
            } else {
                dispatch(sortByTypeActions.setType(type));
                dispatch(fetchPokemonList({}));
            }
        },
        [dispatch],
    );

    const onClick = (newType: PokemonType) => () => {
        onClickHandle(newType);
    };

    return (
        <div className={styles.categories}>
            <Card onClick={onClick(PokemonType.ALL)}>All & pagination</Card>
            <Card onClick={onClick(PokemonType.NORMAL)}>Normal type</Card>
            <Card onClick={onClick(PokemonType.FIGHTING)}>Fighting type</Card>
            <Card onClick={onClick(PokemonType.FLYING)}>Flying type</Card>
        </div>
    );
});

export default SortByType;
