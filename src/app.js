import React from 'react';
import Header from './Components'
import ToDo from './Components/ToDo';

export default class App extends React.Component {
  render() {
    return (
			<>
			<Header />
      <ToDo />
			<Footer />
			</>
    );
  }
}
