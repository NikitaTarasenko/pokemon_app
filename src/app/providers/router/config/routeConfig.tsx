import { MainPage } from 'pages/MainPage';
import { PokemonDetailsPage } from 'pages/PokemonDetailsPage';
import { RouteProps } from 'react-router-dom';
import {
    AppRoutes,
    getRouteMain,
    getRoutePokemonDetails,
} from 'shared/const/router';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.POKEMON_DETAILS]: {
        path: getRoutePokemonDetails(':id'),
        element: <PokemonDetailsPage />,
    },
};
