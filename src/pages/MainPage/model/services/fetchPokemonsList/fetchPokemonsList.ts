import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Pokemons } from 'entities/Pokemon';
import {
    getMainPageLimit,
    getMainPageNumber,
    getMainPageSearch,
} from '../../selectors/mainPageSelectors';
import axios from 'axios';

interface FetchedPokemonListProps {
    limit?: number;
    name?: string;
}

export const fetchPokemonList = createAsyncThunk<
    Pokemons,
    FetchedPokemonListProps,
    ThunkConfig<string>
>(
    'mainPage/fetchPokemonList',
    async (props, { extra, rejectWithValue, getState }) => {
        const limit = getMainPageLimit(getState());
        const search = getMainPageSearch(getState());
        const page = getMainPageNumber(getState());
        try {
            const response = await extra.api.get<Pokemons>(
                `/pokemon/${search}`,
                {
                    params: {
                        // _limit: limit,
                        // _page: page,
                        // q: search,
                    },
                },
            );
            console.log(response.data);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
