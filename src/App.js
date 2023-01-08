import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
      </div>
      <Home></Home>
    </div>
  );
}

export default App;
