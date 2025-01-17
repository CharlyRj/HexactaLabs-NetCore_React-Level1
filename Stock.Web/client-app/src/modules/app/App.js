import React from "react";
import { Route } from "react-router";
import { ToastContainer } from "react-toastify";

import Layout from "../../components/Layout";
import HomePage from "../home/container/HomePage";
import LoginPage from "../auth/containers/LoginPage";
import ProviderPage from "../providers/page";
import CategoriesPage from "../categories/page";
import StorePage from "../stores/page";
import PropTypes from "prop-types";
import LogoutPage from "../auth/containers/LogoutPage";

const Private = (props) => {
  if (localStorage.getItem("JWT_LOGIN")) {
    return props.children;
  }
  return <LoginPage />;
};

const App = (props) => (
  <Private>
    <Layout {...props}>
      <Route exact path="/" component={HomePage} />
      <Route path="/provider" component={ProviderPage} />
      <Route path="/logout" component={LogoutPage} />
      <Route path="/store" component={StorePage} />
      <Route path="/category" component={CategoriesPage} />
    </Layout>
    <ToastContainer autoClose={2000} />
  </Private>
);

Private.propTypes = {
  children: PropTypes.array,
};

App.displayName = "App";
export default App;
