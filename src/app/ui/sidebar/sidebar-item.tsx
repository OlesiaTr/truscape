// import dynamic from 'next/dynamic';
import React, { ReactNode, FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Squares2X2Icon, BriefcaseIcon } from '@heroicons/react/24/solid';

export interface Props {
  icon: string;
  children: ReactNode;
  pathname: string;
  current?: boolean;
}

const SidebarItem: FC<Props> = ({ icon, children, pathname, current }) => {
  // @ts-ignore
  // const Icon = dynamic(() =>
  //   import('@heroicons/react/24/solid').then((mod) => mod[icon]),
  // );

  return (
    <li className="flex">
      <Link
        href={pathname}
        className={clsx(
          `flex items-center mr-1 w-full`,
          current &&
            `after:h-full after:border-2 after:border-purple-200 after:rounded-sm  after:ml-auto`,
        )}
      >
        {icon === 'Squares2X2Icon' ? (
          <Squares2X2Icon className="w-[18px] h-[18px] fill-white mr-3.5" />
        ) : (
          <BriefcaseIcon className="w-[18px] h-[18px] fill-white mr-3.5" />
        )}

        <span className="text-white leading-6 font-medium">{children}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
