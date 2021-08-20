import React, { useState } from 'react';

const Filter = () => {
  return (
    <div
      className="absolute top-full right-0 overflow-x-hidden overflow-y-scroll"
      style={{ width: 280, maxHeight: 482 }}
    >
      <span>hohoho</span>
    </div>
  );
};

interface GProps {
  icon: string; // url to the filter icon
  name: string; // display name of the icon
}

export default function CommunityFilter(props: GProps) {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const toggleShowFilter = () => setShowFilter(!showFilter);

  return (
    <div className="filter flex relative h-full">
      <div
        className="relative current-view select-none flex items-center pl-10 lg:w-72 md:w-16"
        onClick={() => toggleShowFilter()}
        onKeyDown={() => toggleShowFilter()}
        role="button"
        tabIndex={0}
      >
        <img
          className="absolute left-3"
          src={props.icon}
          alt={props.name}
          style={{ height: 18 }}
        />
        <span className="md:hidden lg:block text-white">{props.name}</span>
        <i className="absolute right-3 fa fa-arrow-down text-white" />
      </div>
      {showFilter && <Filter />}
    </div>
  );
}
