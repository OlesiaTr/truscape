'use client';

import Image from 'next/image';
import React, { FC } from 'react';
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid';
import { usePathname, useRouter } from 'next/navigation';
import SidebarItem from './sidebar-item';

export interface Props {}

const Sidebar: FC<Props> = (props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleExitClick = () => router.push('/');

  return (
    <aside className="fixed top-0 left-0 w-60 h-screen ">
      <div className="bg-gray-900 pt-8 pb-10 h-full overflow-y-auto flex flex-col justify-between">
        <div>
          <Image
            src={'/icons/truscape-logo.svg'}
            alt="Truscape logo"
            width={122}
            height={24}
            className="mx-auto mb-[77px]"
          />

          <ul className="ml-4 space-y-7">
            <SidebarItem
              icon="Squares2X2Icon"
              pathname="/dashboard"
              current={pathname === '/dashboard'}
            >
              Dashboard
            </SidebarItem>
            <SidebarItem
              icon="BriefcaseIcon"
              pathname="/companies"
              current={pathname === '/companies'}
            >
              Companies
            </SidebarItem>
          </ul>
        </div>
        <button
          onClick={handleExitClick}
          className="flex mx-auto justify-center items-center"
        >
          {' '}
          <ArrowLeftEndOnRectangleIcon className="w-[18px] h-[18px] fill-white mr-2" />
          <span className="text-white leading-6 font-medium">Exit</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
