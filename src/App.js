import logo from './logo.svg';
import './App.css';
import ViewAllBus from './components/ViewAllBus';
import AddBus from './components/AddBus';
import SearchBus from './components/SearchBus';
import DeleteBus from './components/DeleteBus';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddBus/>}/>
      <Route path="/delete" element={<DeleteBus/>}/>
      <Route path="/search" element={<SearchBus/>}/>
      <Route path="/viewall" element={<ViewAllBus/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
