import React from 'react';

import clsx from 'clsx';

import { examsdata } from './examsdata';

const Exams = () => {
  return (
    <div className="bg-white h-full rounded-2xl p-6">
      <h4 className="font-semibold  md:mt-4 lg:mt-0 lg:pt-0 md:pt-4 pt-2 pb-2 2xl:pb-8 ">
        Upcoming Classes
      </h4>
      <div className="grid grid-cols-2 gap-4 2xl:gap-8 ">
        {examsdata.map((item) => {
          return (
            <div
              className={clsx(
                '',
                item.title == 'General Science' &&
                  'bg-lightBlue p-4 rounded-xl',
                item.title == 'Music' && 'bg-lightPink p-4 rounded-xl',
                item.title == 'History' && 'bg-lightPink p-4 rounded-xl',
                item.title == 'English' && 'bg-lightBlue p-4 rounded-xl'
              )}
            >
              <h6 className="font-medium text-sm 2xl:mb-4 ">{item.class}</h6>
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-blue h-2 w-2 rounded-full"></div>
                <div>
                  <h6 className="text-sm font-medium text-sky-900 ">
                    {item.title}
                  </h6>
                </div>
              </div>
              <div className="flex items-center gap-2 lg:mb-1 xl:mb-3 ">
                <item.dateIcon />
                {item.date}
              </div>
              <div className="flex  -space-x-4">
                <img
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                  src="https://images.unsplash.com/photo-1672292865155-19cb9c6f5b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                  src="https://images.unsplash.com/photo-1670272506173-0b0be082a52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                  src="https://images.unsplash.com/photo-1672262103731-bc8d6147fa6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=418&q=80"
                  alt=""
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                  src="https://images.unsplash.com/photo-1672281647004-22e1bb3f2fba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                />
                <a
                  className="flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800"
                  href="#"
                >
                  +99
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exams;
