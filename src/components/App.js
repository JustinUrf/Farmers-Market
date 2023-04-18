import React from 'react';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import LocationControl from './LocationControl'
// import './App.css';

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header/> 
            {/* <ProduceControl/> */}

            <LocationControl />
      </Container>
    </React.Fragment>

  );
}

export default App;
