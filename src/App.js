import './App.css';
import Header from './components/Header'
import Team from './components/Team'
import Counter from './components/Counter';

function App() {
  return (
   <div className='container'>
     <Header/>
     <Counter/>
     <Team/>
   </div>
  );
}

export default App;
