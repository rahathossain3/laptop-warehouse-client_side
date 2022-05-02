import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
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
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>




        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>


      {/* footer section --------------- */}
      <Footer></Footer>
    </div>
  );
}

export default App;
