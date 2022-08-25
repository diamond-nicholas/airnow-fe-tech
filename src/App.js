import './App.css';
// import installedSdks from './Datasets/installed.json';

function App() {
  return (
    <div className='userPage'>
      <h1>Airnow-fe-tech-test</h1>

      <section className='btn-selector'>
        <div className='wrapper'>
          <button>Installed</button>
          <div className='line'></div>
          <button>Unistalled</button>
        </div>
      </section>

      <section className='userData'>
        <div className='wrapperData'>
          <div className='header'>
            <div className='header-left'>
              <h2 className='sdk-type'>Installed SDK's</h2>
              <p>Latest Update: Jul 16, 2019</p>
            </div>
            <div className='header-right'>
              <h4 className='sdk-count'>10</h4>
            </div>
          </div>
          <div className='borderline'></div>

          <article className='sdk-categories'>
            <div className='sdk-category-wrapper'>
              <div className='sdk-1'>
                <h3 className='category'>App Platform</h3>
                <div className='sdk-body'>
                  <p className='name'>SDK 1</p>
                  <p className='lastseen'>2 years ago</p>
                </div>
              </div>
              <div className='sdk-2'>
                <h3 className='category'>Payments</h3>
                <div className='sdk-body'>
                  <p className='name'>SDK 5</p>
                  <p className='lastseen'>2 years ago</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
