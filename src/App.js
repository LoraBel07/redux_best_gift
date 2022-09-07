import './App.css';
import Cart from './Components/Cart/Cart';
import Filters from './Components/Filters/Filters';
import Gifts from './Components/GiftsComponents/Gifts';
import Login from './Login';

function App() {
  return (
    <div className='App'>
      <div className='block'>
        <div>
        <Login/>
        </div>
        
        <Filters/>
        <div>
          <Gifts/>
        </div>
        
      </div>
      <div>
        <Cart/>
      </div>
      
    </div>
  );
}

export default App;
