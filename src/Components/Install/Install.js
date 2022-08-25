import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { data } from '../../actions';
import installedData from '../../Datasets/installed.json';
import './Install.css';

function Install() {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.install.Data);
  const SDKs = select.installedSdks;
  useEffect(() => {
    dispatch(data(installedData.data.installedSdks));
  }, []);

  const currentYear = new Date().getFullYear();
  return (
    <section className='userData'>
      <div className='wrapperData'>
        <div className='header'>
          <div className='header-left'>
            <h2 className='sdk-type'>installedSdks</h2>
            <p>Latest Update: Jul 16, 2019</p>
          </div>
          <div className='header-right'>
            <h4 className='sdk-count'>{select.length}</h4>
          </div>
        </div>
        <div className='borderline'></div>

        <article className='sdk-categories'>
          {select.map(({ id, categories, name, lastSeenDate }) => {
            return (
              <div key={id} className='sdk-category-wrapper'>
                <div className='sdk-1'>
                  <h3 className='category'>{categories[0]}</h3>
                  <div className='sdk-body'>
                    <p className='name'>{name}</p>
                    <p className='lastseen'>
                      {currentYear - currentYear} years ago
                    </p>
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

export default Install;
