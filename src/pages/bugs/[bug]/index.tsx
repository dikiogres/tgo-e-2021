import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { TypedObject } from 'sanity';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { getBug } from '../../../../sanity/sanity-utils';
import { Bug } from '../../../../types/Bug';

function BugDetail() {
  const router = useRouter();
  // console.log("router.query:", router.query);
  const { bug } = router.query;
  const [bugDetail, setBugDetail] = useState<Bug>();

  useEffect(() => {
    async function fetchData() {
      if (bug) {
        const result = await getBug(bug as string);
        setBugDetail(result);
      }
    }
    fetchData();
  }, [bug]);

  // console.log("bug:", bug);

  return (
    <Layout>
      <Seo />
      <div className='flex flex-col gap-5 py-20 lg:gap-8'>
        <div className='flex items-center justify-between'>
          <div
            className='bg-gradient-to-r from-orange-300 via-red-500 to-blue-700 bg-clip-text text-4xl font-extrabold text-transparent
      md:text-5xl lg:text-7xl'
          >
            {bugDetail?.name}
          </div>

          <a
            href={bugDetail?.url}
            title='View bug'
            target='_blank'
            rel='nooper noreferrer'
            // className="text-lg font-bold text-white bg-gray-500 p-2 rounded-lg"
            className='inline-block rounded-lg bg-gray-500 p-2 text-lg font-bold text-white transition-colors hover:bg-gray-600 active:scale-95'
          >
            View bug
          </a>
        </div>
        <p className='text-lg font-semibold'>
          <PortableText value={bugDetail?.content as TypedObject[]} />
        </p>
        <Image
          src={bugDetail?.image ?? ''}
          alt={bugDetail?.name ?? ''}
          width={1920}
          height={100}
          className='rounded-xl object-cover'
        />
      </div>
    </Layout>
  );
}

export default BugDetail;
