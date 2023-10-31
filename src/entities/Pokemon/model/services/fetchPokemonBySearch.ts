import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getMainPageSearch } from 'pages/MainPage/model/selectors/mainPageSelectors';
import { PokemonItemInfo } from '../types/pokemon';
import { getPokemonDetailOpened } from '../selectors/pokemonDetailsSelectors';

interface FetchPokemonBySearchProps {
    name?: string;
}

export const fetchPokemonBySearch = createAsyncThunk<
    PokemonItemInfo,
    FetchPokemonBySearchProps,
    ThunkConfig<string>
>(
    'mainPage/fetchPokemonBySearch',
    async (props, { extra, rejectWithValue, getState }) => {
        const search = getMainPageSearch(getState());
        const isOpenedDetails = getPokemonDetailOpened(getState());

        if (!search && !isOpenedDetails) {
            return rejectWithValue('no search text');
        }
        try {
            const response = await extra.api.get<PokemonItemInfo>(
                `/pokemon/${search}`,
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
