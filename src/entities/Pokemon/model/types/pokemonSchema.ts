import { PokemonItemInfo, Pokemons } from './pokemon';

export interface PokemonSchema {
    isLoading: boolean;
    error?: string;
    detailsInfo?: PokemonItemInfo;
    openedDetails: false;
}
