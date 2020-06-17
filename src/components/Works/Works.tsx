import React from 'react';

import './Works.scss';

import WorksItem from '@components/Works/WorksItem/WorksItem';
import { ProjectData } from '@interfaces/index';

interface Props {
  title: string;
  projects: ProjectData[];
}

const Works = ({ title, projects }: Props): JSX.Element => {
  return (
    <section className="Works">
      <h2>{title}</h2>
      <div className="list">
        {projects.map((project, index) => (
          <WorksItem key={index} item={project} />
        ))}
      </div>
    </section>
  );
};

export default Works;
