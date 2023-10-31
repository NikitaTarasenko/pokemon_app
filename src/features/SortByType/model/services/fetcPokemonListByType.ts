import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getMainPageLimit,
    getMainPageNumberOffset,
} from 'pages/MainPage/model/selectors/mainPageSelectors';

import { sortedPokemons } from '../types/sortedPokemons';
import { getSortByTypeType } from '../selectors/sortByTypeSelectors';
import { PokemonType } from 'entities/Pokemon';

interface FetchedProps {
    type: PokemonType;
}

export const fetchPokemonListByType = createAsyncThunk<
    sortedPokemons,
    FetchedProps,
    ThunkConfig<string>
>(
    'features/fetchPokemonListByType',
    async (props, { extra, rejectWithValue, getState }) => {
        const limit = getMainPageLimit(getState());
        const page = getMainPageNumberOffset(getState());
        // const type = getSortByTypeType(getState());

        try {
            const response = await extra.api.get<sortedPokemons>(
                `${props.type}`,
                {},
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
