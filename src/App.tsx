import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import route from './pages/index';
import Header from './components/Header/header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path="/" element={ <route.ProductPage/> } />
        <Route path="products" element={<route.CategoryPage/>} />
        <Route path="categories" element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
