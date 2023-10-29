import { Pokemons } from './pokemon';

export interface PokemonSchema {
    isLoading: boolean;
    error?: string;
    data?: Pokemons;
}
