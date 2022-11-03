import React from 'react';
import {
BrowserRouter as Router,
Routes,
Route
} from 'react-router-dom';

import ToDo from './Components/ToDo/index';
import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Settings from './Context/Settings/settings'

export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
          <Route path="/"
            element={<ToDo />}>
          </Route>
          <Route path="/setting"
            element={<FormSetting />}>
          </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}