import React from 'react';//импортируэм язык JSX
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom";



const App = () => {
  return (
    <BrowserRouter>{/* обгортка для route */}
      <div className='app-wrapper'>
        <Header />
        <Navbar />

        <div className="app-wrapper-content">
          {/* Route використовується для роботи як силки, path - адрес сторінки, component - в цей параметр ми передаєм компоненту яка буде віддображатись */}
          <Route path="/dialogs" component={Dialogs} /> 
          <Route path="/profile" component={Profile} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/Settings" component={Settings} />
        </div>

      </div>
    </BrowserRouter>
  );
}


export default App;
