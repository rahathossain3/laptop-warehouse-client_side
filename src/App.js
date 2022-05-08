import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import AddItem from './Pages/Items/AddItem/AddItem';
import EditItem from './Pages/Items/EditItem/EditItem';
import ManageItems from './Pages/Items/ManageItems/ManageItems';
import MyItems from './Pages/Items/MyItems/MyItems';
import RestockedItem from './Pages/Items/RestokeItem/RestockedItem';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
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
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/manageitems' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        <Route path='/restockedItem/:itemId' element={
          <RequireAuth>
            <RestockedItem></RestockedItem>
          </RequireAuth>
        }></Route>
        <Route path='/edititem/:itemId' element={
          <RequireAuth>
            <EditItem></EditItem>
          </RequireAuth>
        }></Route>
        <Route path='/addanitem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>



        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>


      {/* footer section --------------- */}
      <Footer></Footer>
    </div>
  );
}

export default App;
