import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
})


const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (props.isAuth === false) return <Navigate to={'/login'}/>
    return <Component {...props}/>
  }
  
  return connect(mapStateToPropsForRedirect)(RedirectComponent);
}

export default withAuthRedirect;