import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from './pages/Posts';
import Post from './pages/Post';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= '/' element={<Posts/>} />
        <Route path= '/:id' element={<Post/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
