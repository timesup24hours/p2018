import React, { useState } from 'react';

import './index.scss';

// data = [random.randint(0, 99) for i in range(COLUMNS)]
// minimum = min(data)
// maximum = max(data)

// for row in range(ROWS):
//     chart.append([])
//     chart[row].append(math.ceil((maximum / ROWS) * row))
//     for d in data:
//         chart[row].append('   ')

// for r_idx, row in enumerate(chart):
//     for c_idx, col in enumerate(data, start=1):
//         if col >= row[0]:
//             chart[r_idx][c_idx] = ' _ '

// chart.reverse()

// for row in chart:
//     for col in row:
//         sys.stdout.write(f'{str(col).rjust(3)} ')
//     sys.stdout.write('\n')

// sys.stdout.write('     ')
// for d in data:
//     sys.stdout.write(f'{str(d).ljust(4)}')
// print()

const SelfMakeChart = ({ columns = 10, rows = 5 }) => {
  let defaultData = Array.from({ length: rows }, () =>
    Math.ceil(Math.random() * 99)
  );
  const [data, setData] = useState(defaultData);
  // setInterval(() => {
  // setData(Array.from({ length: rows }, () => Math.ceil(Math.random() * 99)));
  // }, 100);
  // const maximum = Math.max(...data);
  // const minimum = Math.min(...data);
  // const chart = [];

  // for (let i = 0; i < rows; i++) {
  //   if (!chart[i]) chart[i] = [];
  //   // console.log(
  //   //   'Math.ceil((maximum / rows) * i): ',
  //   //   Math.ceil((maximum / rows) * i)
  //   // );
  //   chart[i].push(Math.ceil((maximum / rows) * i));
  //   data.forEach((d, index) => {
  //     chart[i].push(' ');
  //   });
  // }

  // chart.forEach((row, rIndex) => {
  //   data.forEach((col, cIndex) => {
  //     if (col >= row[0]) chart[rIndex][cIndex] = ' _ ';
  //   });
  // });

  // chart.reverse();

  return (
    <div className="SelfMakeChart">
      <div className="chart">
        {data.map((d, i) => {
          return (
            <div
              key={i}
              style={{
                height: `${d}px`,
                width: '10px',
                // position: 'absolute',
                // left: `${i * 14}px`,
                marginLeft: '4px',
                // bottom: '0px',
                backgroundColor: 'white'
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
export default SelfMakeChart;
