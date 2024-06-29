import logo from './logo.svg';
import './App.css';
import ViewAllBus from './components/ViewAllBus';
import AddBus from './components/AddBus';
import SearchBus from './components/SearchBus';

function App() {
  return (
    <div>
      <ViewAllBus/>
      <AddBus/>
      <SearchBus/>
    </div>
  );
}

export default App;
