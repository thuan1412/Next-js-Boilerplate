import React from 'react';

import JobShort from '../components/home/JobShort';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const jobList = [
  {
    title: 'job-title',
    company: 'company',
    location: 'hanoi',
    shortDescriptions: [
      'Develop features and enhancements on existing products based on defined requirements and designs',
      'Follow given procedures and instructions to produce well-designed, testable and clean code',
      'Participate in numerous activities for building software product: requirement analysis / enhance UI-UX design / Scrum process/customer support / improve DevOps infrastructure /',
    ],
  },
];

const Index = () => {
  return (
    <Main meta={<Meta title="Reddit clone" description="Lorem ipsum" />}>
      <div className="container flex mx-auto">
        <div className="job-list w-2/5">
          {jobList.map((job) => (
            <JobShort job={job} key={job.title} />
          ))}
        </div>
        <div className="job-content w-3/5" />
      </div>
    </Main>
  );
};

export default Index;
