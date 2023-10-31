export interface PokemonItem {
    name: string;
    url?: string;
}
export interface PokemonItemInfo {
    abilities: any[];
    forms: any[];
    game_indices: any[];
    held_items: any[];
    moves: any;
    name: string;
    species: any;
    sprites: any;
    stats: any;
    types: any;
}
export interface Pokemons {
    count: number;
    next: string;
    previous: any;
    results: PokemonItem[];
}
