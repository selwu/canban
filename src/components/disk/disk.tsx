import React, { useEffect } from 'react';
import './disk.scss';
// import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../utils/types';
import { getFiles } from '../../actions/file';

const Disk = () => {
  // const dispatch = useDispatch();
  // const currentDir = useSelector((state: RootState) => state.files.currentDir);

  // useEffect(() => {
  //   dispatch(getFiles(currentDir));
  // }, [currentDir]);

  return (
    <div className="disk">
      <div className="disk__btns">
        <button className="disk__back">Назад</button>
        <button className="disk__create">Создать папку</button>
      </div>
    </div>
  );
};

export default Disk;
