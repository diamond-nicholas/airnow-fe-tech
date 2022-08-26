import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { undata } from '../../actions';
import uninstalledData from '../../Datasets/uninstalled.json';
import './unistall.css';
import { formatDate } from '../../utils/formatDate';

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
            <p>Latest Update: May 21, 2019</p>
          </div>
          <div className='header-right'>
            <h4 className='sdk-count'>{}</h4>
          </div>
        </div>
        <div className='borderline'></div>

        <article className='sdk-categories'>
          {unselect.map(
            ({ id, categories, name, firstSeenDate, lastSeenDate }) => {
              return (
                <div key={id} className='sdk-category-wrapper'>
                  <div className='sdk-1'>
                    <h3 className='category'>{categories[0]}</h3>
                    <div className='sdk-body'>
                      <p className='name'>{name}</p>
                      <p className='lastseen'>
                        {new Date(lastSeenDate).getFullYear() -
                          new Date(firstSeenDate).getFullYear()}{' '}
                        years ago
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </article>
      </div>
    </section>
  );
}

export default Uninstall;
