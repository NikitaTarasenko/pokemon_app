export enum AppRoutes {
    MAIN = 'main',
    POKEMON_DETAILS = 'pokemon_details',
}

export const getRouteMain = () => '/';
export const getRoutePokemonDetails = (id: string) => `/pokemons/${id}`;
