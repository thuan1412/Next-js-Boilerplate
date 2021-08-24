import React from 'react';

interface Props {
  job: any;
}

export default function JobShort(props: Props) {
  const { job } = props;

  return (
    <div className="relative px-5 py-2 job-short w-full cursor-pointer rounded-md border-2 border-gray-400">
      <h2 className="text-2xl text-black font-bold">{job.title}</h2>
      <h3 className="text-lg text-black font-extralight">{job.company}</h3>
      <h3 className="text-lg text-black font-extralight">{job.location}</h3>
      <ul className="short-descriptions pl-4 list-disc mt-5">
        {job.shortDescriptions.slice(0, 2).map((desc: string) => (
          <li className="text-base font-extralight" key={desc}>
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
}
