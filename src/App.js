import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div>
        <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/' exact element={<Cart/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
