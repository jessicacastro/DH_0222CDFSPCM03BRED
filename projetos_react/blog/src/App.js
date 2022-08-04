import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import { DetalhePost } from './pages/DetalhePost';
import { ListagemPosts } from './pages/ListagemPosts';
import { LoginPage } from './pages/Login';
import { UseRefHook } from './pages/UseRefHook';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< LoginPage />} />
          <Route path="/posts" element={< ListagemPosts />} />
          <Route path="/posts/:id" element={<DetalhePost />} />
          <Route path="/useRefHook" element={<UseRefHook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
