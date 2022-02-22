import Navigation from './components/Navigation';
import Aside from './components/Aside';
import style from './App.module.css';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <div className={style.app}>
      <Navigation />
      <div className={style.container}> 
        <Aside />
        <Main />
        
      </div>
      <Footer />
    </div>
  );
}

export default App;

/*TO DO: Make container component for aside and main*/