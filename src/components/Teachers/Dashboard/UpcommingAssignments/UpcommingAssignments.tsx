import React from 'react';

import clsx from 'clsx';
import { GrNext } from 'react-icons/gr';

import { upcommingassignmentdata } from './upcommingassignment-data';

const UpcommingAssignments = () => {
  return (
    <div className="bg-white p-6 rounded-2xl">
      <div className="flex justify-between mb-4">
        <h6 className="text-xl font-bold">Upcomming Assignments</h6>
        <h6 className="flex items-center text-gray-500 ">
          See more <GrNext />
        </h6>
      </div>
      {upcommingassignmentdata.map((item) => {
        return (
          <div className="flex items-center justify-between  bg-white py-2">
            <div className="flex items-center gap-2 md:gap-4">
              <div
                className={clsx(
                  item.title == 'Lab Final Report' &&
                    'bg-lightBlue p-3 rounded-full text-blue',
                  item.title == 'Write Down "Student Life" Composition' &&
                    'bg-lightBlue p-3 rounded-full text-secondary',
                  item.title == 'Submit a Song on your own voice |' &&
                    'bg-lightBlue p-3 rounded-full text-downy',
                  item.title == 'Write down 7 Question from chapter-6 |' &&
                    'bg-lightBlue p-3 rounded-full text-pink'
                )}
              >
                <item.titleIcon />
              </div>

              <div>
                <div className="md:flex gap-1 ">
                  <h6 className="font-semibold text-gray-700">{item.title}</h6>
                  <h6>{item.des}</h6>
                </div>

                <div className="flex gap-4 items-center text-teritory">
                  <div className="flex items-center gap-2">
                    <item.dateIcon />
                    <h6>{item.date}</h6>
                  </div>

                  <div className="text-gray-200">|</div>

                  <div className="flex items-center gap-2">
                    <item.subIcon />
                    <h6>{item.sub}</h6>
                  </div>
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
  );
};

export default UpcommingAssignments;
