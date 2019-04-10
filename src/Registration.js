import React from "react";

class Registration extends React.Component {
  
    state = {
      name: '', 
      email: '',
      status: ''
    }
    
  handleSubmit = (event) => {

    if (this.state.name === '' || this.state.email === '') event.preventDefault()
    let user = {name: this.state.name, email: this.state.email}
    fetch('http://127.0.0.1:3000/users', {method: "POST", body: JSON.stringify(user)})
      // .then(response => response.text())
      // .then(data => {
      //   this.setState({ status: '' })});
  }


  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  }
  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  render() {
    
    return (
      <div>
        <form action="POST"  onSubmit={this.handleSubmit}>
          <input onChange={this.handleChangeName} value={this.state.name} type="text"/> <br />
          <input onChange={this.handleChangeEmail} value={this.state.email} type="text"/><br />
          <button>send</button>
        </form>
      </div>)
    }
  }

export default Registration;