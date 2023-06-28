import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Navbar from './components/Navbar/Navbar';

//Pages
import Home from './pages/Home/Home';
import Books from './pages/Books/Books';
import AddBook from './pages/Books/AddBook';
import EditBook from './pages/Books/EditBook';

//CSS
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/addBook' element={<AddBook />} />
        <Route path='/books/editBook/:id' element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
