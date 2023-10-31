import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Card from 'shared/ui/Card/Card';
import styles from './PokemonListItem.module.scss';
import { PokemonView } from 'entities/Pokemon/model/consts/consts';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface AtrticleListSkeletonProps {
    className?: string;

    view: PokemonView;
}
export const PokemonListItemSkeleton = memo(
    (props: AtrticleListSkeletonProps) => {
        const { className, view } = props;

        if (view === PokemonView.LIST) {
            return (
                <div className={classNames('', {}, [className, styles[view]])}>
                    <Card className={styles.card}>
                        <Skeleton height={370} className={styles.img} />
                    </Card>
                </div>
            );
        }
        return (
            <div className={classNames('', {}, [className, styles[view]])}>
                <Card className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <Skeleton
                            width={210}
                            height={270}
                            className={styles.img}
                        />
                    </div>
                </Card>
            </div>
        );
    },
);
