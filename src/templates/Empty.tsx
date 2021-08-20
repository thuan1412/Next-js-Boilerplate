import { ReactNode } from 'react';

type EmptyProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Empty = (props: EmptyProps) => {
  return (
    <div className="container mx-auto">
      {props.meta}
      <div className="page-content py-5 text-xl">{props.children}</div>
    </div>
  );
};

export { Empty };
