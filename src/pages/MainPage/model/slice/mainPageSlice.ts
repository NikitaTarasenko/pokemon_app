import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import {
    Pokemons,
    PokemonSchema,
    PokemonType,
    PokemonView,
} from 'entities/Pokemon';
import { MainPageSchema } from '../types/mainPageSchema';
import { fetchPokemonList } from '../services/fetchPokemonsList/fetchPokemonsList';

const initialState: MainPageSchema = {
    data: {
        count: 0,
        next: '',
        previous: null,
        results: [],
    },
    error: undefined,
    isLoading: false,
    search: '',
    view: PokemonView.TABLE,
    offset: 0,
    limit: 12,
    hasMore: true,
    _inited: false,
};

const mainPageSlice = createSlice({
    name: 'mainPageSlice',
    initialState,

    reducers: {
        setView: (state, action: PayloadAction<PokemonView>) => {
            state.view = action.payload;
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
        },

        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },

        setOffset: (state) => {
            state.offset = state.view === PokemonView.LIST ? 3 : 12;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPokemonList.pending, (state, action) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchPokemonList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.hasMore = action.payload.next !== null;
            state.data = action.payload;
        });
        builder.addCase(fetchPokemonList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { reducer: mainPageReducer } = mainPageSlice;
export const { actions: mainPageActions } = mainPageSlice;
