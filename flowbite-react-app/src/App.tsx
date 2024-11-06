import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import ErrorPage from "./error-page"

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
              <Route path="/about" element={<About />} errorElement={<ErrorPage />} />
          </Routes>
      </>
  );
}

export default App;
