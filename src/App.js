// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import SignIn from './Components/SignIn/SignIn';
import Cart from './Components/Cart/Cart';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route>
            <Route path="/" element={<><Header /><Main /><Footer /></>}/>
            <Route path='/signin' element={<SignIn />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>


  );
}

export default App;
