import logo from './logo.svg';
import './App.css';
import ViewAllBus from './components/ViewAllBus';
import AddBus from './components/AddBus';
import SearchBus from './components/SearchBus';
import DeleteBus from './components/DeleteBus';

function App() {
  return (
    <div>
      <ViewAllBus/>
      <AddBus/>
      <SearchBus/>
      <DeleteBus/>
    </div>
  );
}

export default App;
