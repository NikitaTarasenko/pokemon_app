import React from 'react';
import Card from 'shared/ui/Card/Card';
import styles from './PokemonListItem.module.scss';
import { PokemonSchema } from 'entities/Pokemon/model/types/pokemonSchema';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { getRoutePokemonDetails } from 'shared/const/router';

import { PokemonView } from 'entities/Pokemon/model/consts/consts';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

import { PokemonItem, PokemonItemInfo } from 'entities/Pokemon';

interface PokemonListItemProps {
    pokemon?: PokemonItem;
    pokemonSearched?: PokemonItemInfo;
    view: PokemonView;
    className?: string;
}

const PokemonListItem = (props: PokemonListItemProps) => {
    const { className, pokemon, view } = props;
    let id = '1';

    if (view === PokemonView.LIST) {
        return (
            <div className={classNames('', {}, [className, styles[view]])}>
                <Card className={styles.card}>
                    <div className={styles.name}>{pokemon?.name}</div>
                    <div className={styles.footer}>
                        <AppLink to={getRoutePokemonDetails(id)}>
                            <Button theme={ThemeButton.OUTLINE}>
                                Read more
                            </Button>
                        </AppLink>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            to={getRoutePokemonDetails(id)}
            className={classNames('', {}, [className, styles[view]])}
        >
            <Card className={styles.card}>
                <div className={styles.name}>{pokemon?.name}</div>
            </Card>
        </AppLink>
    );
};

export default PokemonListItem;
