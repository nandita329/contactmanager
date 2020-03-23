import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
// import "./contact.css";
import axios from "axios";
import { Link } from 'react-router-dom';

class Contact extends Component {
  state = {
    showInfo: false
  };

  onShowClick = e => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  // onDeleteClick = () => {
  //   this.props.onDeleteClickHandler();
  // };
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showInfo } = this.state;
    return (
      //Insted of using everywhere this.props we can use destructuring
      //   <div>
      //     <h1>{this.props.name}</h1>
      //     <ul>
      //       <li>Email :{this.props.email}</li>
      //       <li>Contact :{this.props.phone}</li>
      //     </ul>
      //   </div>

      // <div className="card card-body mb-3">
      //   <h1>
      //     {name}
      //     {/* <i
      //       onClick={this.onShowClick.bind(this, name)}
      //       className="fas fa-sort-down"
      //     /> */}
      //     <i
      //       onClick={this.onShowClick}
      //       className="fas fa-sort-down"
      //       style={{ cursor: "pointer" }}
      //     />
      //     <i
      //       className="fas fa-times"
      //       onClick={this.onDeleteClick}
      //       style={{ cursor: "pointer", color: "red", float: "right" }}
      //     />
      //   </h1>
      //   {showInfo ? (
      //     <ul className="list-group">
      //       <li className="list-group-item">Email :{email}</li>
      //       <li className="list-group-item">Contact :{phone}</li>
      //     </ul>
      //   ) : null}
      // </div>

      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h1>
                {name}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  style={{ cursor: "pointer", color: "red", float: "right" }}
                />
                <Link to={`contact/edit/${id}`} >
                  <i className="fas fa-pencil-alt" 
                  style={{ cursor: "pointer", color: "black", float: "right",marginRight:"1rem" }}></i>
                </Link>
              </h1>
              {showInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email :{email}</li>
                  <li className="list-group-item">Contact :{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
