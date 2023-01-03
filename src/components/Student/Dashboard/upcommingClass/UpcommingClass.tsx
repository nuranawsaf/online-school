import React from 'react';

import clsx from 'clsx';

import UpcommingClasses from '@components/Teachers/Dashboard/UpcommingClasses/UpcommingClasses';

import { upcommingdata } from './upcommingdata';

export const UpcommingClass = () => {
  return (
    <div className="my-4 md:my-0  lg:pt-4 xl:py-5 rounded-lg md:rounded-3xl bg-white h-full mx-2 md:mx-0">
      <h4 className="font-semibold  md:mt-4 lg:mt-0 lg:pt-0 md:pt-4 pt-2 ml-2 md:ml-6">
        Upcoming Classes
      </h4>
      <div className="px-2 md:px-6">
        {upcommingdata.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center lg:py-1 xl:py-2 2xl:py-4 "
            >
              <div className="flex items-center gap-4 py-2 md:py-4 lg:py-0">
                <div
                  className={clsx(
                    'text-white',
                    item.title == 'English' && 'bg-pink p-4 rounded-full',
                    item.title == 'Photography' && 'bg-downy p-4 rounded-full',
                    item.title == 'History' && 'bg-secondary p-4 rounded-full',
                    item.title == 'Arts' && 'bg-teritory p-4 rounded-full',
                    item.title == 'General Science' &&
                      'bg-blue p-4 rounded-full',
                    item.title == 'Music' && 'bg-purpole p-4 rounded-full'
                  )}
                >
                  <item.icon />
                </div>

                <div>
                  <h6 className="font-semibold text-gray-700">{item.title}</h6>
                  <div className="flex items-center gap-1 text-teritory">
                    <item.dateIcon />
                    {item.date}
                  </div>
                </div>
              </div>

              <div className="text-teritory">
                <item.menuIcon />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
