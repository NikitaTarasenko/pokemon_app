import { EntityState } from '@reduxjs/toolkit';
import { Pokemons } from 'entities/Pokemon';
import { PokemonType, PokemonView } from 'entities/Pokemon/model/consts/consts';

export interface MainPageSchema {
    data: Pokemons;
    isLoading?: boolean;
    error?: string;

    page: number;
    limit: number;
    hasMore: boolean;
    _inited: boolean;

    view: PokemonView;
    search: string;
    type: PokemonType;
}
