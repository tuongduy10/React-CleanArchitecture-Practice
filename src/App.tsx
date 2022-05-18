import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/global.scss';

import { Provider } from 'react-redux';
import store from './app/store';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import routes from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<routes.HomePage />} />
          <Route path="/products" element={<routes.ProductPage />} />
          <Route path="/categories" element={<routes.CategoryPage />} />
          <Route path="/stock" element={<routes.StockPage />} />
          <Route path='/login' element={<routes.LoginPage />} />
          <Route path='/signup' element={<routes.SignupPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App;