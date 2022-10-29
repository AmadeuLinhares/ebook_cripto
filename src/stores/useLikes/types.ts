export type State = {
  likes: Array<string>;
  setLike(id: string): void;
  removeLike(id: string): void;
};
