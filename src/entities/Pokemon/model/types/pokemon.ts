export interface PokemonItem {
    name: string;
    url: string;
}
export interface PokemonItemInfo {
    abilities: any;
    forms: any;
    game_indices: any;
    held_items: any;
    id: any;
    is_default: any;
    location_area_encounters: any;
    moves: any;
    past_abilities: any;
    past_types: any;
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
