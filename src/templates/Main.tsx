import React, { ReactNode } from 'react';

import CommunityFilter from '../components/home/CommunityFilter';
import RedditIcon from '../components/home/RedditIcon';

type IMainProps = {
  meta: ReactNode; // defined the meta tag in the head of page
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full text-gray-700 relative">
    {props.meta}
    <div
      className="top-bar flex justify-around items-center w-full bg-top-reddit" //
      style={{ height: 50 }}
    >
      <RedditIcon />
      <CommunityFilter
        name="Home"
        icon="https://styles.redditmedia.com/t5_2rjo5/styles/communityIcon_5omgkjjymf661.png?width=256&s=05db9fcf42b2372a141c384c9c3f6aac92606f46"
      />
    </div>
    {props.children}
  </div>
);

export { Main };
