import React from "react";



class Listusers extends React.Component {
  state = {data: []}


  getUsers = () => {
    fetch('http://127.0.0.1/users')
    .then(response => response.text())
    .then(data => {
      console.log(data)
      this.setState({ data: JSON.parse(data) })});
  }

  render() {
    return (
      <div>
        <button onClick={this.getUsers}>gerListUsers</button>
        <div>{this.state.data.map((el, i) => (<div key={i}>{ el.name} </div>))}</div>
      </div>
    )
    }
  }

export default Listusers