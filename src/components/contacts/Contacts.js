import React, { Component, Fragment } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       contacts: [
  //         {
  //           id: 1,
  //           name: "niki",
  //           email: "a@gmail.com",
  //           phone: "9611670845"
  //         },
  //         {
  //           id: 2,
  //           name: "niki1",
  //           email: "a1@gmail.com",
  //           phone: "9611670845"
  //         },
  //         {
  //           id: 3,
  //           name: "niki2",
  //           email: "a2@gmail.com",
  //           phone: "9611670845"
  //         }
  //       ]
  //     };
  //   }

  //If no need of constructure we can define only state
  //Insted of storing component lable state  will store global by using context
  //   state = {
  //     contacts: [
  //       {
  //         id: 1,
  //         name: "niki",
  //         email: "a@gmail.com",
  //         phone: "9611670845"
  //       },
  //       {
  //         id: 2,
  //         name: "niki1",
  //         email: "a1@gmail.com",
  //         phone: "9611670845"
  //       },
  //       {
  //         id: 3,
  //         name: "niki2",
  //         email: "a2@gmail.com",
  //         phone: "9611670845"
  //       }
  //     ]
  //   };

  //   deleteContact = id => {
  //     const { contacts } = this.state;
  //     const newContacts = contacts.filter(contact => contact.id !== id);
  //     this.setState({ contacts: newContacts });
  //   };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </Fragment>
          );
        }}
      </Consumer>
    );

    //below code used where we use component leble state

    // const { contacts } = this.state;
    // return (
    //   <Fragment>
    //     {contacts.map(contact => (
    //       <Contact
    //         key={contact.id}
    //         contact={contact}
    //         onDeleteClickHandler={this.deleteContact.bind(this, contact.id)}
    //       />
    //     ))}
    //   </Fragment>
    // );
  }
}

export default Contacts;
