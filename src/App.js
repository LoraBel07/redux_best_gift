import './App.css';
import Cart from './Components/Cart/Cart';
import Filters from './Components/Filters/Filters';
import Gifts from './Components/GiftsComponents/Gifts';

function App() {
  return (
    <div className='App'>
      <div className='block'>
        <Filters/>
        <Gifts/>
      </div>
      <div className='block'>
        <Cart/>
      </div>
      
    </div>
  );
}

export default App;
