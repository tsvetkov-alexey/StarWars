// Тип для персонажа
export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

// Тип для ответа от API
export interface CharactersResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}
