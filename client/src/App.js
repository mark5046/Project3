import React from "react";
import Excercise from "./pages/Excercise";
// import Nav from "./components/Nav";

const App = () => (
  <div>
        
    <Excercise />
  </div>
);

export default App;
















// // import React, { Component } from 'react';
// import React from 'react';
// import Form from "./components/Form";

// class App extends React.Component {
//     state = {
//         userInputs: [],//use to push new posts from user.
//         title: "",
//         description: "" 
//     }

//     handleInputChange = (event) => {
//         const { name, value } = event.target;

//         this.setState({
//             [name]: value
//         });
//     }

//     render() {
//         return <Form title={this.state.title}
//                      description={this.state.description}
//                      handleInputChange={this.handleInputChange}
//                 />;
//     }
// }

// export default App;
