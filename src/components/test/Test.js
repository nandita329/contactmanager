import React, { Component } from "react";
import TextInputGroup from "./../layout/TextInputGroup";

// Number.prototype.commas= function(){
//   var s= '', temp,
//   num= this.toString().split('.'), n=num[0];
//   while(n.length> 3){
//    temp= n.substring(n.length-3);
//    s= ','+temp+s;
//    n= n.slice(0, -3);
//   }
//   if(n) s= n+s;
//   if(num[1]) s+='.'+num[1];
//   return s;
//  }

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      num1: "",
      num2: "",
      showResult: false,
      calculateRes: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value, showResult: false });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const { num1, num2 } = this.state;
    let result = num1 / num2;
    if (result) {
      this.setState({
        calculateRes: result.toLocaleString(),
        showResult: true
      });
    }
    console.log(result);
    this.setState({
      num1: "",
      num2: ""
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => this.setState({ title: data.title, body: data.body }));
  }

  // componentWillMount() {
  //   console.log("componentWillMount ...");
  // }

  render() {
    const { title, body, num1, num2, calculateRes, showResult } = this.state;
    return (
      // <div>
      //   <h1>{title}</h1>
      //   <p>{body}</p>
      // </div>
      <div className="card mb-3">
        <div className="card-header">Divde two nos</div>
        <div className="card-body">
          <form onSubmit={this.onFormSubmit}>
            <TextInputGroup
              label="Num1"
              name="num1"
              placeholder="Enter 1st number..."
              value={num1}
              onChange={this.onChange}
            />
            <TextInputGroup
              label="Num2"
              name="num2"
              placeholder="Enter 2nd num..."
              value={num2}
              onChange={this.onChange}
            />
            <input
              type="submit"
              value="Calculate"
              className="btn btn-light btn-block"
            />
          </form>
          {showResult ? <h5>Result = {calculateRes}</h5> : null}
        </div>
      </div>
    );
  }
}

export default Test;
