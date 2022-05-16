import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import route from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={ <route.ProductPage/> } />
        <Route path="/categories" element={<route.CategoryPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
