import React, {Suspense, lazy, useEffect} from "react";
import styles from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
/*import ProfileContainer from "./components/Pages/ProfileContainer/ProfileContainer";*/
import {BrowserRouter, Route, Routes} from "react-router-dom";
/*import Music from "./components/Pages/Music/Music";*/
/*import News from "./components/Pages/News/News";*/
/*import Settings from "./components/Pages/Settings/Settings";*/
/*import DialogsContainer from "./components/Pages/Dialogs/DialogsContainer";*/
/*import UsersContainer from "./components/Pages/Users/UsersContainer";*/
import HeaderContainer from "./components/Header/HeaderContainer/HeaderContainer";
import Login from "./components/Login/Login";
import * as PropTypes from "prop-types";
import {connect} from "react-redux";
import {initializeApp} from "./state/appReducer";
import Preloader from "./components/Other/Preloader/Preloader";


/* Lazy loaded components */
const Music = lazy(() => import("./components/Pages/Music/Music"));
const News = lazy(() => import("./components/Pages/News/News"));
const Settings = lazy(() => import("./components/Pages/Settings/Settings"));
const DialogsContainer = lazy(() => import("./components/Pages/Dialogs/DialogsContainer"));
const UsersContainer = lazy(() => import("./components/Pages/Users/UsersContainer"));
const ProfileContainer = lazy(() => import("./components/Pages/ProfileContainer/ProfileContainer"));



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
              <Suspense fallback={<Preloader/>}>
                <Routes>
                  <Route path="/profile/:userId?" element={<Suspense fallback={<Preloader/>}><ProfileContainer store={store}/></Suspense>}/>
                  <Route path="/dialogs/*" element={<Suspense fallback={<Preloader/>}><DialogsContainer store={store}/></Suspense>}/>
                  <Route path="/users/*" element={<Suspense fallback={<Preloader/>}><UsersContainer/></Suspense>}/>
                  <Route path="/music" element={<Music/>}/>
                  <Route path="/news" element={<News/>}/>
                  <Route path="/settings" element={<Settings/>}/>
                  <Route path="/login" element={<Login/>}/>
                </Routes>
              </Suspense>
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