import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PokemonSchema } from 'entities/Pokemon';
import { fetchPokemonBySearch } from '../services/fetchPokemonBySearch';

const initialState: PokemonSchema = {
    detailsInfo: {
        abilities: [],
        forms: [],
        game_indices: [],
        held_items: [],
        moves: [],
        name: '',
        species: {},
        sprites: {},
        stats: [],
        types: [],
    },
    error: undefined,
    isLoading: false,
    openedDetails: false,
};

const pokemonDetailsSlice = createSlice({
    name: 'pokemonDetailsSlice',
    initialState,

    reducers: {
        setOpenDetails(state, action) {
            state.openedDetails = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPokemonBySearch.pending, (state, action) => {
            state.error = undefined;
            state.isLoading = true;
            state.detailsInfo = initialState.detailsInfo;
        });
        builder.addCase(fetchPokemonBySearch.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = undefined;
            state.detailsInfo = action.payload;
        });
        builder.addCase(fetchPokemonBySearch.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { reducer: pokemonDetailsReducer } = pokemonDetailsSlice;
export const { actions: pokemonDetailsActions } = pokemonDetailsSlice;
