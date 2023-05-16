import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

import { getBugs } from '../../sanity/sanity-utils';
import { Bug } from '../../types/Bug';

export default function HomePage() {
  const [loading, setLoading] = React.useState(true);
  const [bugs, setBugs] = React.useState<Bug[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      const data = await getBugs();
      setBugs(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <Seo />
      <main>
        <section className='bg-white'>
          <div className='mx-auto max-w-5xl py-20'>
            <h1 className='text-7xl font-extrabold'>
              Distributed&nbsp;
              <span className='bg-gradient-to-r from-blue-400 via-red-500 to-yellow-600 bg-clip-text text-transparent'>
                Properties
              </span>
            </h1>
            <p className='mt-3 text-xl font-semibold text-gray-600'>
              Bug List Showcase
            </p>
            <div className='mt-24 flex items-end'>
              <p>
                <span className='text-3xl font-bold text-gray-700'>Ray | </span>
              </p>
              <UnderlineLink
                href='https://docs.dist-properties.site/'
                className='hover:text-blue-500'
              >
                &nbsp;What is Ray?
              </UnderlineLink>
            </div>
            <ArrowLink
              as={ButtonLink}
              variant='light'
              className='mt-3 inline-flex items-center'
              href='https://github.com/ray-project/ray/issues?q=is%3Aissue+is%3Abug+is%3Aclosed'
            >
              Bug Source
            </ArrowLink>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className='mt-5 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {bugs.map((bug) => (
                  <Link
                    href={`/bugs/${bug.slug}`}
                    key={bug._id}
                    className='rounded-lg border-2 border-gray-500 p-1 shadow-lg transition duration-500 hover:scale-105 hover:border-blue-500 hover:shadow-xl'
                  >
                    {bug.image && (
                      <Image
                        src={bug.image}
                        alt={bug.name}
                        width={750}
                        height={300}
                        className='rounded-lg border border-gray-500 object-cover'
                      />
                    )}
                    <div className='mt-2 bg-gradient-to-r from-red-400 via-blue-500 to-yellow-600 bg-clip-text font-extrabold text-transparent'>
                      {bug.name}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
