import { createClient, groq } from 'next-sanity';
import { Bug } from 'types/Bug';

import clientConfig from './config/client-config';

export async function getBugs(): Promise<Bug[]> {
  const client = createClient({
    projectId: '34kbkw0y',
    dataset: 'production',
    apiVersion: '2023-05-03',
  });

  return client.fetch(
    groq`*[_type == "bug"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
      }`
  );
}

export async function getBug(slug: string): Promise<Bug> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "bug" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  );
}
