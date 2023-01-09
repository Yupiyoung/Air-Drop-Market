import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';

function App() {
  const [mobileBottom, setMobileBottom] = React.useState(false)
  const resizeComp = () => {
    if (window.innerWidth <= 425) {
      setMobileBottom(true);
    } else {
      setMobileBottom(false);
    }
  }
  React.useEffect(() => {
    window.addEventListener('resize', resizeComp);
    resizeComp();
    return () => {
      window.removeEventListener('resize', resizeComp);
    };
  }, []);
  return (
    <div className="App" style={mobileBottom ? {marginBottom: '100px'} : null}>
      <div className='container'>
        <Header></Header>
      </div>
      <Home></Home>
    </div>
  );
}

export default App;
