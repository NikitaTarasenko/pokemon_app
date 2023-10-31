import { StateSchema } from 'app/providers/StoreProvider';
import { PokemonType } from 'entities/Pokemon';

export const getSortByTypeType = (state: StateSchema) =>
    state.sortByTypeList.currentType;

export const getSortByTypeIsSorted = (state: StateSchema) =>
    state.sortByTypeList._isSorted;

export const getSortByTypeData = (state: StateSchema) =>
    state.sortByTypeList?.data;

export const getSortByTypeIsLoading = (state: StateSchema) =>
    state.sortByTypeList.isLoading;
