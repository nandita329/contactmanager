import React, { Component } from "react";
// import Contact from "./components/Contact";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";
import EditContact from "./components/contacts/EditContact";
// function App() {
//   const name = "Suraj";
//   const showName = false;
//   const showMath = false;
//   // this.state = {
//   //   showMath: false
//   // };
//   let math;
//   if (showMath) {
//     math = <h1>1+1 = {1 + 1}</h1>;
//   } else {
//     math = null;
//   }
//   return (
//     <div className="App">
//       <h1>Welcome</h1>
//       {showName ? <h1>Hello {name}</h1> : null}
//       {math}
//     </div>
//   );
// }

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       showMath: true
//     };
//   }
//   render() {
//     const name = "Suraj";
//     const showName = true;
//     // const showMath = false;
//     let math;
//     if (this.state.showMath) {
//       math = <h1>1+1 = {1 + 1}</h1>;
//     } else {
//       math = null;
//     }
//     return (
//       <div className="App">
//         <h1>Welcome</h1>
//         {showName ? <h1>Hello {name}</h1> : null}
//         {math}
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header name="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
              {/* <Contact name="Suraj" email="t@gmail.com" phone="9611670845" />
          <Contact name="Tapan" email="s@gmail.com" phone="9611670845" /> */}
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
