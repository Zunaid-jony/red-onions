
import './App.css';
import Header from './componets/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './componets/Login/Login';
import Registration from './componets/Registration/Registration';

import Home from './componets/Home/Home';


import Service1 from './componets/Menu/Service1/Service1';
import Breakfull from './componets/Menu/Breakfast/Breakfast-vew/Breakfull';
import Lunch1 from './componets/Menu/Lunch1/Lunch1';
import LunchView from './componets/Menu/Lunch/LunchView/LunchView';
import Dinner1 from './componets/Menu/Dinner1/Dinner1';
import DinnerView from './componets/Menu/Dinner/DinnerView/DinnerView';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
     
      <Routes>
      <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/registration' element={<Registration></Registration>}> </Route>
        <Route path='/breakfast' element={<Service1></Service1>}> </Route>
        <Route path='/lunch' element={<Lunch1></Lunch1>}> </Route>
        <Route path='/dinner' element={<Dinner1></Dinner1>}> </Route>
        <Route path='/breakfast/:breakfasID' element={<Breakfull></Breakfull>}> </Route>
        <Route path='/lunch/:lunchID' element={<LunchView></LunchView>}> </Route>
        <Route path='/dinner/:dinnerID' element={<DinnerView></DinnerView>}> </Route>
      </Routes>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
