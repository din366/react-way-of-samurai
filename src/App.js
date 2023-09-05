import React, {Suspense, lazy} from "react";
import styles from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer/HeaderContainer";
import Login from "./components/Login/Login";
import * as PropTypes from "prop-types";
import {connect} from "react-redux";
import {initializeApp} from "./state/appReducer";
import Preloader from "./components/Other/Preloader/Preloader";
import Page404 from "./components/Pages/page404/Page404";


/* Lazy loaded components */
const DialogsContainer = lazy(() => import("./components/Pages/Dialogs/DialogsContainer"));
const UsersContainer = lazy(() => import("./components/Pages/Users/UsersContainer"));
const ProfileContainer = lazy(() => import("./components/Pages/ProfileContainer/ProfileContainer"));
const FirstPage = lazy(()=> import ("./components/Pages/FirstPage/FirstPage"));
const FriendsContainer = lazy(()=> import('./components/Pages/Friends/FriendsContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }


  render() {
    if (!this.props.inititialized) {
      return <div className={styles.preloaderWrapper}><Preloader/></div>
    } else {
      return (
        <BrowserRouter>
          <div className={styles.appWrapper}>
            <HeaderContainer/>
            <Navbar state={this.props.store.getState().sidebarFriends} isAuth={this.props.isAuth}/>
            <div className={styles.appWrapperContent}>
              <Suspense fallback={<Preloader/>}>
                <Routes>
                  <Route path="/profile/:userId?" element={<Suspense fallback={<Preloader/>}><ProfileContainer store={this.props.store}/></Suspense>}/>
                  <Route path="/dialogs/*" element={<Suspense fallback={<Preloader/>}><DialogsContainer store={this.props.store}/></Suspense>}/>
                  <Route path="/users/*" element={<Suspense fallback={<Preloader/>}><UsersContainer/></Suspense>}/>
                  <Route path="/friends" element={<Suspense fallback={<Preloader/>}><FriendsContainer/></Suspense>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="*" element={<Page404 />}/>
                  <Route path="/" element={<FirstPage isAuth={this.props.isAuth}/>}/>
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
  isAuth: state.auth.isAuth
})


/*export default App;*/
export default connect(mapStateToProps, {initializeApp})(App);