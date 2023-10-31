import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Pokemons } from 'entities/Pokemon';
import {
    getMainPageLimit,
    getMainPageNumberOffset,
} from '../../selectors/mainPageSelectors';

interface FetchedPokemonListProps {
    limit?: number;
}

export const fetchPokemonList = createAsyncThunk<
    Pokemons,
    FetchedPokemonListProps,
    ThunkConfig<string>
>(
    'mainPage/fetchPokemonList',
    async (props, { extra, rejectWithValue, getState }) => {
        const limit = getMainPageLimit(getState());

        try {
            const response = await extra.api.get<Pokemons>(
                `/pokemon/?limit=${limit}&offset=${0}`,
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
