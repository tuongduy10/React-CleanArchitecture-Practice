import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="products" element={<App />} />
        <Route path="categories" element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
