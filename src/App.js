import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {

  const data={
    name: 'dinesh',
    job: 'dev'
  }
  

  return (
    <div className="App">
      <Header data={data}/>
      
    </div>
  );
}

export default App;
