import React, { useState } from 'react';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Attendence = () => {
  const [state, setState] = useState({
    series: [44, 17],
    options: {
      colors: ['#69d7ba', '#ffb1b4'],
      stroke: {
        width: [],
      },
      chart: {
        type: 'donut',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  return (
    <div className="  h-full  p-6">
      <div>
        <h6 className="font-bold text-xl">Attendence</h6>
      </div>
      <div className=" h-full flex items-center">
        <Chart options={state.options} series={state.series} type="donut" />
      </div>
    </div>
  );
};

export default Attendence;
