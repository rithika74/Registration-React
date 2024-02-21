import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Registration } from './Registration';
import { Home } from './Home';
import { Login } from './Login';
import { Provider } from 'react-redux';
import { store } from './store';
import Admin from './Admin';
import View from './View';
import { Update } from './Update';
import Loginview from './Loginview';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='register' element={<Registration />} />
            <Route path='login' element={<Login />} />
            <Route path='admin' element={<Admin />} />
            <Route path='view' element={<View />} />
            <Route path='/update/:id' element={<Update />} />
            <Route path='/viewlogin/:id' element={<Loginview />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
