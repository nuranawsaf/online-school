import React from 'react';

import Attendence from './Attendence/Attendence';
import Exams from './Exam/Exams';
import UpcommingAssignments from './UpcommingAssignments/UpcommingAssignments';
import UpcommingClasses from './UpcommingClasses/UpcommingClasses';

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 m-4">
        <div className="">
          <UpcommingClasses />
        </div>
        <div className="">
          <Exams />
        </div>
      </div>
      <div className="flex gap-4 m-4  ">
        <div className="flex-1 w-full ">
          <UpcommingAssignments />
        </div>
        <aside className="w-full lg:w-[35%] rounded-2xl  bg-white ">
          <Attendence />
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
