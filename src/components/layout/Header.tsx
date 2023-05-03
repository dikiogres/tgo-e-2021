import Link from 'next/link';
import * as React from 'react';
import { FcHome } from 'react-icons/fc';
import { SiNotion } from 'react-icons/si';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  {
    href: 'https://eastern-power-432.notion.site/418f5d8a0be449798f313ab458357e93?v=4ff5291447c64812ad1aeaa825691c1c',
    label: <SiNotion />,
  },
  // { href: '/', label: 'Route 2' },
];

export default function Header() {
  return (
    <header className='flex items-center justify-between'>
      <Link href='/' className='flex'>
        <h5
          className='bg-gradient-to-r from-red-300 via-red-500 to-red-700 bg-clip-text text-2xl
        font-bold text-transparent'
        >
          <FcHome />
        </h5>
      </Link>
      <nav>
        <ul className='flex items-center justify-between space-x-4'>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <UnstyledLink href={href} className='hover:text-gray-600'>
                {label}
              </UnstyledLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
