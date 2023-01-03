import React from 'react';

import { Exam } from './UpcommingSection/exam/Exam';
import { UpcommingClasses } from './UpcommingSection/upcommingClasses/UpcommingClasses';
import { Assignments } from './assignment/Assignments';
import { RecentClass } from './recentClass/RecentClass';
import { UpcommingClass } from './upcommingClass/UpcommingClass';
import { VideoCall } from './videoCall/VideoCall';

export const Dashboard = () => {
  return (
    <div className="h-screen ">
      <div className=" lg:flex md:overflow-hidden md:m-4 md:gap-4">
        <aside className="w-full lg:w-[60%] xl:w-[70%]  ">
          <VideoCall />
        </aside>
        <div className=" flex-1 max-h-full ">
          <UpcommingClass />
        </div>
      </div>
      <div className="lg:flex md:overflow-hidden px-2 md:px-4 md:gap-4 rounded-3xl">
        <aside className="w-full lg:w-[35%]">
          <RecentClass />
        </aside>
        <div className="flex-1  max-h-full  pb-4 md:pb-0">
          <Assignments />
        </div>
      </div>
    </div>
  );
};
