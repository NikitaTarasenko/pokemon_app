import { PokemonItem } from 'entities/Pokemon';

export interface sortedPokemons {
    damage_relations: {};
    game_indices: any[];
    generation: {};
    id: number;
    move_damage_class: {};
    name: string;
    names: any[];
    past_damage_relations: any[];
    pokemon?: [pokemon: PokemonItem[], slot: number];
}
