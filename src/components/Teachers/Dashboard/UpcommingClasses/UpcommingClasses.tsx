import React from 'react';

import clsx from 'clsx';
import { BsChatRightText } from 'react-icons/bs';
import { FiVideo } from 'react-icons/fi';

import { upcommingclassdata } from './upcommingclasses-data';

const UpcommingClasses = () => {
  return (
    <div className="bg-white p-6 rounded-2xl">
      <h4 className="font-semibold  md:mt-4 lg:mt-0 lg:pt-0 md:pt-4 pt-2 pb-2">
        Upcoming Classes
      </h4>
      {upcommingclassdata.map((item, index) => {
        return (
          <div
            key={index}
            className="flex justify-between items-center lg:py-1 xl:py-2 2xl:py-4 "
          >
            <div className="flex items-center gap-4 py-2 md:py-4 lg:py-0 ">
              <div
                className={clsx(
                  'text-white ',
                  item.title == 'English | Batch 42 | Group B' &&
                    'bg-pink p-4 rounded-full',
                  item.title == 'Photography | class 6 | Group A' &&
                    'bg-downy p-4 rounded-full',
                  item.title == 'History | Class 8 | Group C' &&
                    'bg-secondary p-4 rounded-full',
                  item.title == 'Arts | Class 10 | Group A' &&
                    'bg-teritory p-4 rounded-full',
                  item.title == 'General Science | class 7 | Group c' &&
                    'bg-blue p-4 rounded-full',
                  item.title == 'Music | Class 6 | Group B' &&
                    'bg-purpole p-4 rounded-full'
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

            <div className="text-teritory  flex items-center gap-4">
              <FiVideo />
              <BsChatRightText />
              <item.menuIcon />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UpcommingClasses;
