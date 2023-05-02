
import './App.css';
import LoginPage from './Components/loginPage/LoginPage';
import NavComp from './Components/NavFolder/NavComp';
import HomeComp from './Components/homePage/HomeComp';
import { Routes,Route } from 'react-router-dom';
import CreateBlogComp from './Components/CreateBlog/CreateBlogComp';
import BlogDescription from './Components/blogDescription/BlogDescription';
import ProtectedRoute from './Components/protectedRoutes/ProtectedRoute';
import { useDispatch } from 'react-redux';
import { Gallary } from './redux/action';
import { useEffect } from 'react';

function App() {
  const dispatch=useDispatch()
  async function getDetails(){
    const streamFunction=await fetch(`https://api.unsplash.com/photos/?client_id=mDT_AAjs9Wtv7YQFpijEFRDbUSF4QECATNTT8djHILY`);
    const textResponse=await streamFunction.text()
    const jsonData= JSON.parse(textResponse)
    dispatch(Gallary(jsonData))
  }
useEffect(() => {
 getDetails()
}, [])


  return (
    <div className="App">
      <NavComp/>
      <Routes>
        <Route path='/' element={<ProtectedRoute Component={HomeComp}/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/createcomp' element={<ProtectedRoute Component={CreateBlogComp}/>}/>
        <Route path='/:id' element={<ProtectedRoute Component={BlogDescription}/>}/>
      </Routes>
    </div>
  );
}

export default App;
