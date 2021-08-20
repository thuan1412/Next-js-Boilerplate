import React from 'react';

type Props = {
  title: string;
  total: number;
};
const TotalMoney = (props: Props) => {
  return (
    <div
      className="relative border-2 px-7 py-3 rounded-md mr-5 content-center"
      style={{ minWidth: '200px', height: '150px' }}
    >
      <img
        className="w-10 h-10 mb-3"
        src="https://yt3.ggpht.com/ytc/AKedOLSJdALxDjyTd2RHJw13i-YBYE0j9IWsk0AMgH5a=s900-c-k-c0x00ffffff-no-rj"
        alt={props.title}
      />
      <span className="text-sm text-gray-600">{props.title}</span> <br />
      <span className="text-me font-bold text-2xl">${props.total}</span>
    </div>
  );
};

export default TotalMoney;
