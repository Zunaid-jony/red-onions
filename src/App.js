import logo from './logo.svg';
import './App.css';
import Header from './componets/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './componets/Login/Login';
import Registration from './componets/Registration/Registration';
import Benar from './componets/Header/benar/Benar';
import Home from './componets/Home/Home';
import Breakfast from './componets/Menu/Breakfast/Breakfast';
import Lunch from './componets/Menu/Lunch/Lunch';
import Dinner from './componets/Menu/Dinner/Dinner';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
     
      <Routes>
      <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/registration' element={<Registration></Registration>}> </Route>
        <Route path='/breakfast' element={<Breakfast></Breakfast>}> </Route>
        <Route path='/lunch' element={<Lunch></Lunch>}> </Route>
        <Route path='/dinner' element={<Dinner></Dinner>}> </Route>
      </Routes>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
