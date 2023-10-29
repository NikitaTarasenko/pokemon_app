import {
    CombinedState,
    Reducer,
    ReducersMapObject,
    configureStore,
} from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArgs } from './StateSchema';
import { mainPageReducer } from 'pages/MainPage/model/slice/mainPageSlice';
import { $api } from 'shared/api/api';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        mainPage: mainPageReducer,
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
