import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="Reddit clone" description="Lorem ipsum" />}>
      <div>Hello</div>
    </Main>
  );
};

export default Index;
