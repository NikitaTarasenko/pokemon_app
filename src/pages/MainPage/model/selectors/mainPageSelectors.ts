import { StateSchema } from 'app/providers/StoreProvider';
import { PokemonType, PokemonView } from 'entities/Pokemon';

export const getMainPageIsloading = (state: StateSchema) =>
    state.mainPage?.isLoading || false;

export const getMainPageLimit = (state: StateSchema) =>
    state.mainPage?.limit || 12;

export const getMainPageNumberOffset = (state: StateSchema) =>
    state.mainPage?.offset || 12;

export const getMainPageHasMore = (state: StateSchema) =>
    state.mainPage?.hasMore;

export const getMainPageView = (state: StateSchema) =>
    state.mainPage?.view || PokemonView.TABLE;

export const getMainPageInited = (state: StateSchema) =>
    state.mainPage?._inited;

export const getMainPageSearch = (state: StateSchema) =>
    state.mainPage?.search ?? '';

export const getPokemons = (state: StateSchema) => state.mainPage.data;

export const getMainPageError = (state: StateSchema) => state.mainPage.error;
