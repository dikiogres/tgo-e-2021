import { PortableTextBlock } from 'sanity';

export type Detail = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  content: PortableTextBlock[];
};
