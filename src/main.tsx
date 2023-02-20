import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './components/css/index.css'

import App from './components/App'
import Header from "./components/Header";
import Login from "./components/Login";
import Editor from './components/Editor';

const login = () => {
  const username = document.getElementById('username')
  const password = document.getElementById('password')
  if (password!=null && username!=null) {
      username.style.setProperty('display','block')
      password.style.setProperty('display','block')
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header func={login} />}>
                    <Route index element={<App />} />
                    <Route path="login" element={<Login />} />
                    <Route path="Editor" element={<Editor />} />
                    {/* <Route path="*" element={<NoPage />} />*/}
                </Route>
            </Routes>
    </BrowserRouter>,
)
