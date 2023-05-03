/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { getBugs } from '../../sanity/sanity-utils';

export default function HomePage() {
  const [loading, setLoading] = React.useState(true);
  const [bugs, setBugs] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const data = await getBugs();
      setBugs(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  // console.log(bugs)

  return (
    <Layout>
      <Seo />
      <main>
        <section className='bg-white'>
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              bugs.map((bug: any) => <div key={bug._id}>{bug.name}</div>)
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
