
import './App.css';
import LoginPage from './Components/loginPage/LoginPage';
import NavComp from './Components/NavFolder/NavComp';
import HomeComp from './Components/homePage/HomeComp';
import { Routes,Route } from 'react-router-dom';
import CreateBlogComp from './Components/CreateBlog/CreateBlogComp';
import BlogDescription from './Components/blogDescription/BlogDescription';
function App() {
  return (
    <div className="App">
      <NavComp/>
      <Routes>
        <Route path='/' element={<HomeComp/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/createcomp' element={<CreateBlogComp/>}/>
        <Route path='/:id' element={<BlogDescription/>}/>
      </Routes>
    </div>
  );
}

export default App;
