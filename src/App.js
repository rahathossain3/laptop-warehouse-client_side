import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Pages/Home/Banner/Banner';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Notfound from './Pages/Shared/NotFound/Notfound';

function App() {
  return (
    <div>
      {/* header section ------ */}
      <Header> </Header>

      {/* all routes ---------- */}
      <Routes>
        <Route path='/' element={<Banner></Banner>}></Route>
        <Route path='/home' element={<Banner></Banner>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>



        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>


      {/* footer section --------------- */}
      <Footer></Footer>
    </div>
  );
}

export default App;
