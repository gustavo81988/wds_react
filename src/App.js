import {Link, Routes, Route, NavLink} from 'react-router-dom';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import BookRoutes from './BookRoutes'
import './styles.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/books" element={<h1>Extra Content</h1>}/>
      </Routes>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li><NavLink end to='/books'>Books</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/books/*" element={<BookRoutes />}></Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
      
  );
}

export default App;
