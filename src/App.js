import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Pages/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Pages/Music/Music";
import News from "./components/Pages/News/News";
import {Settings} from "./components/Pages/Settings/Settings";
import DialogsContainer from "./components/Pages/Dialogs/DialogsContainer";
import UsersContainer from "./components/Pages/Users/UsersContainer";

const App = ({store}) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar state={store.getState().sidebarFriends}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile store={store}/>}/>
            <Route path="/dialogs/*" element={<DialogsContainer store={store}/>}/>
            <Route path="/users/*" element={<UsersContainer />} />
            <Route path="/music" element={<Music />} />
            <Route path="/news" element={<News />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
