import Navigation from './components/Navigation';
import Aside from './components/Aside';
import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <Navigation />
      <div className={style.container}> 
        <Aside />
      </div>
    </div>
  );
}

export default App;

/*TO DO: Make container component for aside and main*/