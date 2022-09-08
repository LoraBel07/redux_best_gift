import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Filters from './Components/Filters/Filters';
import Gifts from './Components/GiftsComponents/Gifts';
import Login from './Login';
import Logout from './Logout';
import MyAccount from './MyAccount';

function App() {

  const { isLoading } = useAuth0();
  if (isLoading) return <h1>Loading...</h1>
  
  return (
    <div className='App'>
      <div className='block'>
        <div>
        <Login/>
        <Logout/>
        <MyAccount/>
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
