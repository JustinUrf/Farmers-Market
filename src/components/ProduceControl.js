import React from "react";
import ProduceList from "./ProduceList";

class ProduceControl extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      formVisableOnPage: false
    };
  }

  handleCLick = () => {
    this.setState(prevState => ({
      formVisableOnPage :!prevState.formVisableOnPage
    }));
  }

  render() {
    return (
      <React.Fragment>
        <ProduceList />
      </React.Fragment>
    )
  }
}


export default ProduceControl;