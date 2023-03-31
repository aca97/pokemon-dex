export interface Pokemon {
  id: number;
  name: string;
  types: type[];
  height: number;
  weight: number;
  abilities: ability[];
  stats: stat[];
}

export interface ability {
  ability: {
    name: string;
  };
}

export interface stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface type {
  slot: number;
  type: {
    name: string;
  };
}
