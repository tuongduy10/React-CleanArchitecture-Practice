import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/global.scss';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import routes from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <routes.HomePage/> } />
        <Route path="/products" element={ <routes.ProductPage/> } />
        <Route path="/categories" element={<routes.CategoryPage/>} />
        <Route path="/stock" element={<routes.CategoryPage/>} />
        <Route path='/login' element={<routes.LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
