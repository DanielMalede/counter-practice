import { Component } from "react";

export default class User extends Component {
  constructor() {
    super();
    this.state = { F_name: "NO NAME", L_name:"", Age:"", Email:"", Password:""};

  }
  printMyName() {
    console.log("Daniel Malede");
  }
  changeF_nameToMyName() {
    this.setState({F_name: "Daniel Malede" });
  }
  getValueOf_name(event) {
    this.setState({F_name: event.target.value});
  }
  getValueOfL_name(event){
    this.setState({L_name:event.target.value})
  }
  getValueOfAge(event){
    this.setState({Age: event.target.value})
  }
  getValueOfEmail(event){
    this.setState({Email: event.target.value})
  }
  getValueOfPassword(event){
    this.setState({Password: event.target.value})
  }
  printAllUserInfoToTable(e){
    e.preventDefault()
    document.getElementById("UserTable").innerHTML=
    `
    <table>
    <thead>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Age</th>
      <th>Email</th>
      <th>Passowd</th>
    </thead>
    <tbody>
      <tr>
        <td>${this.state.F_name}</td>
        <td>${this.state.L_name}</td>
        <td>${this.state.Age}</td>
        <td>${this.state.Email}</td>
        <td>${this.state.Password}</td>
        </tr>
    </tbody>
  </table>`
    
  }

  render() {
    return (
      <div>
        <h1>{this.state.F_name}</h1>
        <button onClick={this.printMyName}>Click</button>
        <button onClick={(e) => this.changeF_nameToMyName(e)}>Change Name</button>
        <form  onSubmit={(e)=>{this.printAllUserInfoToTable(e)}}>
        <input type="text" value={this.state.F_name} onChange={(e)=> this.getValueOf_name(e)}/>
        <input type="text" value={this.state.L_name} onChange={(e)=> this.getValueOfL_name(e)}/>
        <input type="number" value={this.state.Age} onChange={(e)=> this.getValueOfAge(e)}/>
        <input type="email" value={this.state.Email} onChange={(e)=> this.getValueOfEmail(e)}/>
        <input type="text" value={this.state.Password} onChange={(e)=> this.getValueOfPassword(e)}/>
        <div id="UserTable"></div>
        <button>Submit</button>
        </form>
      </div>
    );
  }
}
