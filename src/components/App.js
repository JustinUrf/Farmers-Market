import React from 'react';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import LocationControl from './LocationControl';
import ProduceControl from './ProduceControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import './App.css';

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header/> 
            <Row>
              <Col>
                <ProduceControl/>
              </Col>
              <Col>
                <LocationControl />
              </Col>
            </Row>
      </Container>
    </React.Fragment>

  );
}

export default App;
