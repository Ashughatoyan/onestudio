import React,{ useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './Pages/mainPage';
import ProfilePage from './Pages/profilePage';
import { LoginPage } from './Pages/loginPage';
import NewsPage from './Pages/newsPage';
import View from './Pages/view';
import { Provider } from 'react-redux';
import { store } from './redux';

function App() {

  interface Istate{
    loggedIn: boolean,
    link?:string,
    navigate?: () => void
  }

  
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage/>}></Route>
            <Route path="news" element={<NewsPage/>} ></Route>
            <Route path="login" element={<LoginPage/>} ></Route> 
            <Route path="profile" element={<ProfilePage/>}></Route>
            <Route path="view" element={<View/>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
