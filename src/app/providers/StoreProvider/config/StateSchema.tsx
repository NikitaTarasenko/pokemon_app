import { Dispatch } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { PokemonSchema } from 'entities/Pokemon';
import { MainPageSchema } from 'pages/MainPage';

export interface StateSchema {
    mainPage: MainPageSchema;
}

export interface ThunkExtraArgs {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArgs;
    dispatch?: Dispatch;
    state: StateSchema;
}
