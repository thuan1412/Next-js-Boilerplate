import React from 'react';

import { Meta } from '../layout/Meta';
import { Empty } from '../templates/Empty';

const About = () => (
  <Empty meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div>
      <h1 className="text-2xl">Dashboard</h1>
      <span className="text-sm text-gray-600">
        Check all of your information
      </span>
      <div className="flex" />
    </div>
  </Empty>
);

export default About;
