import {
    CombinedState,
    Reducer,
    ReducersMapObject,
    configureStore,
} from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArgs } from './StateSchema';
import { mainPageReducer } from 'pages/MainPage/model/slice/mainPageSlice';
import { $api } from 'shared/api/api';
import { pokemonDetailsReducer } from 'entities/Pokemon/model/slice/pokemonDetailsSlice';
import { sortByTypeReducer } from 'features/SortByType/model/slice/sortByTypeSlice';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        mainPage: mainPageReducer,
        pokemonDetails: pokemonDetailsReducer,
        sortByTypeList: sortByTypeReducer,
    };

    const extraArgs: ThunkExtraArgs = {
        api: $api,
    };

    const store = configureStore({
        reducer: rootReducers,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArgs,
                },
            }),
    });
    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
