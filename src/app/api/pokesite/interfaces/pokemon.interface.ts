export interface Pokemon {
  id: number;
  name: string;
  image: string;
  favorite: boolean;
  weight?: number;
  type?: string[];
  height?: number;
  attack?: number;
  deffense?: number;
  health?: number;
  speed?: number;
}
