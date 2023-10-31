import { PokemonType } from 'entities/Pokemon';
import { sortedPokemons } from './sortedPokemons';

export interface SortByTypeSchema {
    isLoading: boolean;
    error?: string;
    data?: sortedPokemons;
    currentType?: PokemonType;
    _isSorted: boolean;
}
