import { Pokemons } from 'entities/Pokemon';
import { PokemonType, PokemonView } from 'entities/Pokemon/model/consts/consts';

export interface MainPageSchema {
    data: Pokemons;
    isLoading?: boolean;
    error?: string;

    offset: number;
    limit: number;
    hasMore: boolean;
    _inited: boolean;

    view: PokemonView;
    search: string;
}
