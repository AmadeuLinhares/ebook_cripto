type ImageLinksProps = {
  smallThumbnail: string;
  thumbnail: string;
};
export type VolumeInfoProps = {
  title: string;
  authors: Array<string>;
  language: string;
  previewLink: string;
  infoLink: string;
  imageLinks: ImageLinksProps;
  categories: Array<string>;
  pageCount: number;
  publisher: string;
  publishedDate: string;
  description: string;
};

export type BookItemProps = {
  id: string;
  volumeInfo: VolumeInfoProps;
};
export type BooksProps = {
  kind: string;
  totalItems: number;
  items: BookItemProps[];
};
