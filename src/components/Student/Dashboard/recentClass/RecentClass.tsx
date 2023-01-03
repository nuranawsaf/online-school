import React from "react";
import { recentclassdata } from "./recentclass-data";

export const RecentClass = () => {
  return (
    <div className="bg-white rounded-lg md:rounded-3xl md:p-5 md:px-6 px-2 py-2 md:py-6   mb-4 md:mb-0 s  w-full">
      <h4 className="font-semibold">Recent Classes</h4>
      <div>
        {recentclassdata.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center gap-3  py-3"
            >
              <div className="flex gap-3 items-center">
                <div>
                  <img
                    className="w-10 h-11 rounded-lg cover"
                    src={item.image}
                    alt=""
                  />
                </div>

                <div>
                  <h6 className="font-semibold">{item.title}</h6>
                  <div className="flex gap-3 text-teritory">
                    <div className="flex items-center">
                      <item.dateIcon />
                      {item.date}
                    </div>

                    <div className="flex items-center">
                      <item.sandIcon />
                      {item.sandDate}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex md:gap-2 text-teritory">
                <item.playIcon />
                <item.menuIcon />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
