import React from 'react';

import clsx from 'clsx';

import { subjectdata } from './subjectsdata';

const Subjects = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 m-4 ">
      {subjectdata.map((item, index) => {
        return (
          <div
            className="bg-white  pb-4 shadow-sm rounded-b-2xl mb-6"
            key={index}
          >
            <div
              className={clsx(
                'relative ',
                item.title == 'General Science' &&
                  'bg-blue w-full text-white font-medium rounded-t-2xl p-6',
                item.title == 'English' &&
                  'bg-pink w-full text-white font-medium rounded-t-2xl p-6',
                item.title == 'Photography' &&
                  'bg-downy w-full text-white font-medium rounded-t-2xl p-6 mb-20',
                item.title == 'Music' &&
                  'bg-purpole w-full text-white font-medium rounded-t-2xl p-6',
                item.title == 'History' &&
                  'bg-secondary w-full text-white font-medium rounded-t-2xl p-6'
              )}
            >
              <div className="flex items-center justify-between">
                <h4 className="pb-2">{item.title}</h4>
                <item.menuIcon />
              </div>
              <div className="flex  gap-3">
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src={item.img}
                  alt=""
                />
                <h5>{item.des}</h5>
              </div>
              <div className="bg-white w-12 h-12 rounded-full absolute right-12 bottom-5 opacity-10"></div>
              <div className="bg-white w-5 h-5 rounded-full absolute right-20 top-6 opacity-10"></div>
            </div>

            <div className="">
              <div className="flex items-center gap-3 px-6 pt-4 ">
                {item.icon && (
                  <div className="text-blue bg-lightBlue  rounded-full p-3">
                    <item.icon />
                  </div>
                )}

                <div>
                  <h6 className="font-semibold text-gray-700">
                    {item.subTitle}
                  </h6>
                  <div className="flex items-center gap-2 text-teritory ">
                    {item.subIcon && <item.subIcon />}
                    <h6>{item.subDes}</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex items-center gap-3 mx-6 pt-4 pb-6 border-b">
                {item.icon && (
                  <div className="text-blue bg-lightBlue  rounded-full p-3">
                    <item.icon />
                  </div>
                )}

                <div>
                  <h6 className="font-semibold text-gray-700">
                    {item.subTitle}
                  </h6>
                  <div className="flex items-center gap-2 text-teritory ">
                    {item.subIcon && <item.subIcon />}
                    <h6>{item.subDes}</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mx-6 pt-4 text-teritory">
              <item.footerIcon />
              <item.footerIcon2 />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Subjects;
