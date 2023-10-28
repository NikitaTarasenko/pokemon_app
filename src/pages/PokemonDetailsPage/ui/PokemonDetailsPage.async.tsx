import { lazy } from 'react';

export const PokemonDetailsPageAsync = lazy(
    () => import('./PokemonDetailsPage'),
);
