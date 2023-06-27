import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Pages/Profile/Profile";
import Dialogs from "./components/Pages/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Pages/Music/Music";
import News from "./components/Pages/News/News";
import {Settings} from "./components/Pages/Settings/Settings";

const App = ({state, dispatch}) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar state={state.sidebarFriends}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile state={state.profilePage} dispatch={dispatch}/>}/>
            <Route path="/dialogs/*" element={<Dialogs state={state.dialogsPage} dispatch={dispatch}/>}/>
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
