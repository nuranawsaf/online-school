import clsx from "clsx";
import React from "react";
import { assignmentdata } from "./assignmentdata";

export const Assignments = () => {
  return (
    <div className="bg-white md:p-5 p-2  w-full rounded-lg md:rounded-3xl h-full  md:my-4 lg:my-0">
      <h4 className="font-semibold mb-2">Assignments</h4>
      <div>
        {assignmentdata.map((item, index) => {
          return (
            <div key={index} className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2 md:gap-4">
                <div
                  className={clsx(
                    item.title == "Elenar Pena" &&
                      "bg-lightBlue p-3 rounded-full text-blue",
                    item.title == "Leslie Alexander" &&
                      "bg-lightBlue p-3 rounded-full text-secondary",
                    item.title == "Guy Hawkins" &&
                      "bg-lightBlue p-3 rounded-full text-downy",
                    item.title == "Savannah Nguyen" &&
                      "bg-lightBlue p-3 rounded-full text-pink"
                  )}
                >
                  <item.titleIcon />
                </div>

                <div>
                  <div className="md:flex gap-1 ">
                    <h6 className="font-semibold text-gray-700">
                      {item.title}
                    </h6>
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
    </div>
  );
};
