import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { data, undata } from './actions';
import installedData from './Datasets/installed.json';
import uninstalledData from './Datasets/uninstalled.json';
import './App.css';
import Install from './Components/Install/Install';
import Uninstall from './Components/Uninstall/Uninstall';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(data(installedData.data.installedSdks));
  }, []);

  const handleInstall = () => {
    dispatch(data(installedData.data.installedSdks));
    setIsClicked(false);
    console.log('dang');
  };

  const handleUninstall = () => {
    console.log('ok');
    dispatch(undata(uninstalledData.data.uninstalledSdks));
    setIsClicked(true);
  };

  return (
    <div className='main'>
      <div className='userPage'>
        <h1>Airnow-fe-tech-test</h1>
        <section className='btn-selector'>
          <div className='wrapper'>
            <button onClick={() => handleInstall()}>Installed</button>
            <div className='line'></div>
            <button onClick={() => handleUninstall()}>Unistalled</button>
          </div>
        </section>
        {isClicked ? <Uninstall /> : <Install />}
      </div>
    </div>
  );
}

export default App;
