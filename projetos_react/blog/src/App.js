import "./App.css";
import { PostList } from "./components/PostListExample";
// import { DetalhePost } from './pages/DetalhePost';
// import { ListagemPosts } from './pages/ListagemPosts';
// import { LoginPage } from './pages/Login';

function App() {
  return (
    <div className="App">
      <PostList />
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/posts" element={<ListagemPosts />} />
          <Route path="/posts/:id" element={<DetalhePost />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
