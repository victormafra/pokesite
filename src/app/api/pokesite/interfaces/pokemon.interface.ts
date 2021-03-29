export interface Pokemon {
  id: number;
  name: string;
  image: string;
  favorite: boolean;
  weight?: number;
  type?: string[];
  hp?: number;
  height?: number;
  attack?: number;
  defense?: number;
  speed?: number;
}
