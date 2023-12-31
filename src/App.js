import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BookList from './components/BookList';
import Categories from './components/Categories';
import Navbar from './components/Navigation';
import Input from './components/Input';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={(
                <>
                  <ul>
                    <BookList />
                  </ul>
                  <Input />
                </>
              )}
            />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
