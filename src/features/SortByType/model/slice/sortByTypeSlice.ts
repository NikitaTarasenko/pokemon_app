import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SortByTypeSchema } from '../types/sortByTypeSchema';
import { fetchPokemonListByType } from '../services/fetcPokemonListByType';
import { PokemonType } from 'entities/Pokemon';

const initialState: SortByTypeSchema = {
    data: {
        damage_relations: {},
        game_indices: [],
        generation: {},
        id: 0,
        move_damage_class: {},
        name: '',
        names: [],
        past_damage_relations: [],
        pokemon: undefined,
    },
    error: undefined,
    currentType: undefined,
    isLoading: false,
    _isSorted: false,
};

const sortByTypeSlice = createSlice({
    name: 'sortByTypeSlice',
    initialState,

    reducers: {
        setType: (state, action: PayloadAction<PokemonType>) => {
            state.currentType = action.payload;
        },
        setData: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPokemonListByType.pending, (state, action) => {
            state.error = undefined;
            state.isLoading = true;
            state._isSorted = false;
        });
        builder.addCase(fetchPokemonListByType.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = undefined;
            state.data = action.payload;
            state._isSorted = true;
        });
        builder.addCase(fetchPokemonListByType.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state._isSorted = false;
        });
    },
});

export const { reducer: sortByTypeReducer } = sortByTypeSlice;
export const { actions: sortByTypeActions } = sortByTypeSlice;
