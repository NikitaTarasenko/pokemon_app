import { StateSchema } from 'app/providers/StoreProvider';

export const getPokemonDetailsDetailsInfo = (state: StateSchema) =>
    state.pokemonDetails?.detailsInfo;

export const getPokemonDetailsError = (state: StateSchema) =>
    state.pokemonDetails.error;

export const getPokemonDetailsIsloading = (state: StateSchema) =>
    state.pokemonDetails?.isLoading || false;

export const getPokemonDetailOpened = (state: StateSchema) =>
    state.pokemonDetails.openedDetails;
