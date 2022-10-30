type Favorite = {
  id: string;
  symbol: string;
  name: string;
  price_usd: number;
  percent_change_usd_last_24_hours: number;
  slug: string;
};

export type State = {
  favorites: Array<Favorite>;
  setFavorites(newFavorite: Favorite): void;
  removeFavorites(favoriteId: string): void;
};
