import React from 'react';
import './section-work.css';
import Button from '../button/button';

export interface SectionWorkType {
  title: string;
}

const SectionWork: React.FC<SectionWorkType> = ({ title }: SectionWorkType) => {
  return (
    <div className="section-work">
      <h2 className="section-work__title">{title}</h2>
      <ul className="section-work__list">
        <li className="list-group-item">FFFFF</li>
        <li className="list-group-item">FFFFF</li>
        <li className="list-group-item">FFFFF</li>
      </ul>
      <Button className={'btn'}>Add task</Button>
    </div>
  );
};

export default SectionWork;
