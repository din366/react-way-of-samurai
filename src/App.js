import React from "react";
import styles from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Pages/ProfileContainer/ProfileContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Pages/Music/Music";
import News from "./components/Pages/News/News";
import {Settings} from "./components/Pages/Settings/Settings";
import DialogsContainer from "./components/Pages/Dialogs/DialogsContainer";
import UsersContainer from "./components/Pages/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer/HeaderContainer";
import Login from "./components/Login/Login";
import * as PropTypes from "prop-types";
import {connect} from "react-redux";
import {initializeApp} from "./state/appReducer";
import Preloader from "./components/Other/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }


  render() {
    let {store} = this.props;
    window.store = store;
    if (!this.props.inititialized) {
      return <div className={styles.preloaderWrapper}><Preloader/></div>
    } else {
      return (
        <BrowserRouter>
          <div className={styles.appWrapper}>
            <HeaderContainer/>
            <Navbar state={store.getState().sidebarFriends}/>
            <div className={styles.appWrapperContent}>
              <Routes>
                <Route path="/profile/:userId?" element={<ProfileContainer store={store}/>}/>
                <Route path="/dialogs/*" element={<DialogsContainer store={store}/>}/>
                <Route path="/users/*" element={<UsersContainer/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/login" element={<Login/>}/>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      );
    }
  }
}

App.propTypes = {store: PropTypes.any}


const mapStateToProps = (state) => ({
  inititialized: state.app.initialized,
})


/*export default App;*/
export default connect(mapStateToProps, {initializeApp})(App);