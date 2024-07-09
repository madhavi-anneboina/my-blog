import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>My Awesome Blog</h1>
        <div id="page-body">
          <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/article' element={<ArticlePage />} />
          <Route path='/articleslist' element={<ArticlesListPage />} />
          </Routes>
         
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
