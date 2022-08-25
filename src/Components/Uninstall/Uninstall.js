import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { undata } from '../../actions';
import uninstalledData from '../../Datasets/uninstalled.json';
import './unistall.css';

function Uninstall() {
  const dispatch = useDispatch();
  const unselect = useSelector((state) => state.unInstall.Data);
  useEffect(() => {
    dispatch(undata(uninstalledData.data.uninstalledSdks));
  }, []);
  return (
    <section className='userData'>
      <div className='wrapperData'>
        <div className='header'>
          <div className='header-left'>
            <h2 className='sdk-type'>uninstalledSdks</h2>
            <p>Latest Update: Jul 16, 2019</p>
          </div>
          <div className='header-right'>
            <h4 className='sdk-count'>{unselect.length}</h4>
          </div>
        </div>
        <div className='borderline'></div>

        <article className='sdk-categories'>
          {unselect.map((data) => {
            return (
              <div key={data.id} className='sdk-category-wrapper'>
                <div className='sdk-1'>
                  <h3 className='category'>{data.categories[0]}</h3>
                  <div className='sdk-body'>
                    <p className='name'>{data.name}</p>
                    <p className='lastseen'>{data.lastSeenDate}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default Uninstall;
