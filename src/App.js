import './App.css';
// import installedSdks from './Datasets/installed.json';

function App() {
  return (
    <div className='userPage'>
      <h3>Welcome to airnow-fe-tech-test</h3>

      <section className='btn-selector'>
        <div className='wrapper'>
          <button>Installed</button>
          <div className='line'></div>
          <button>Unistalled</button>
        </div>
      </section>
    </div>
  );
}

export default App;
