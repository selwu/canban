import React from 'react';

import './column-list.css';
import SectionWork from '../section-work/section-work';

const data = [
  {
    name: 'To Do',
  },
  {
    name: 'In progress',
  },
  {
    name: 'Done',
  },
];

const ColumnList = () => {
  const ColumnItems = data.map((column, index) => {
    return (
      <li key={index}>
        <SectionWork title={column.name} />
      </li>
    );
  });

  return <ul>{ColumnItems}</ul>;
};

export default ColumnList;
