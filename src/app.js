import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Footer from './Components/footer/footer';
import ToDo from './Components/ToDo/index';
import AppHeader from './Components/header/header';
import SettingsForm from './Components/SettingsForm/settingsForm';
import Auth from './Components/auth/index';
import Login from "./Components/Login/index";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <AppHeader />
          <Login />
          <Auth capability="create">
            <Routes>
              <Route
                path="/"
                element={
                  <ToDo />
                }>
              </Route>
              <Route
                path="/settings"
                element={
                  <SettingsForm />
                }>
              </Route>
            </Routes>
          </Auth>
          <Footer />
        </Router>

      </>
    );
  }
}