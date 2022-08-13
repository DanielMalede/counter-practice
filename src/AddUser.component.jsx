import { Component } from "react";

export default class AddUser extends Component{
    constructor(){
        super()
        this.state={F_name:"",L_name:"",Age:"",Email:"",Password:"",ConfirmPassword:""}
    }
    getF_nameValue(event){
        this.setState({f_name:event.target.value})
    }
    getL_nameValue(event){
        this.setState({L_name:event.target.value})
    }
    getAgeValue(event){
        this.setState({Age:event.target.value})
    }
    getEmailValue(event){
        this.setState({Email:event.target.value})
    }
    getPasswordValue(event){
        this.setState({Password:event.target.value})
    }
    getConfrimPassword(event){
        this.setState({ConfirmPassword:event.target.value})
    }
    printUserInfoToTable(e){
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
                <th>Confirmation Passowd</th>
            </thead>
            <tbody>
                <tr>
                    <td>${this.state.F_name}</td>
                    <td>${this.state.L_name}</td>
                    <td>${this.state.Age}</td>
                    <td>${this.state.Email}</td>
                    <td>${this.state.Password}</td>
                    <td>${this.state.ConfirmPassword}</td>
                </tr>
            </tbody>
        </table>
        `
    }
    chackIfPasswordsAreTheSame(e){
        if (this.state.Password===this.state.ConfirmPassword) {
            alert("The form has been sent")
            this.printUserInfoToTable(e)
        }
        else{
            // document.getElementById("F_name").innerText=""
            // document.getElementById("L_name").innerText=""
            // document.getElementById("Age").innerText=""
            // document.getElementById("Email").innerText=""
            // document.getElementById("Password").innerText=""
            // document.getElementById("ConfrimPassword").innerText=""
            alert("Chack if passwords are the same")
        }
    }
    // chackIfPasswordsAreTheSameInLive(){
    //     if (this.state.Password!==this.state.ConfirmPassword) {
    //         // document.getElementById("ErroMassege").style.color="color"
    //         // document.getElementById("ErroMassege").innerHTML=`password are not the same`
    //         alert("pass")
    //     }
        
    // }
    render(){
        return(
            <div>
               <form onSubmit={(e)=>this.chackIfPasswordsAreTheSame(e)}>
                <label htmlFor="F_name">First name:</label>
                <input id="F_name" type="text" value={this.state.F_name} onChange={(e)=> this.getF_nameValue(e)} />
                <br />
                <label htmlFor="L_name">Last name:</label>
                <input id="L_name" type="text" value={this.state.L_name} onChange={(e)=> this.getL_nameValue(e)} />
                <br />
                <label htmlFor="Age">Age:</label>
                <input id="Age" type="number" value={this.state.Age} onChange={(e)=>this.getAgeValue(e)} />
                <br />
                <label htmlFor="Email">Email:</label>
                <input id="Email" type="email" value={this.state.Email}  onChange={(e)=>this.getEmailValue(e)} />
                <br />
                <label htmlFor="Password">Password:</label>
                <input id="Password" type="text" value={this.state.Password} onChange={(e)=>this.getPasswordValue(e)} />
                <br />
                <span id="ErroMassege"></span>
                <label htmlFor="ConfirmPassword">Confrim Password:</label>
                <input id="ConfirmPassword" type="text" value={this.state.ConfirmPassword} onChange={(e)=>this.getConfrimPassword(e)} />
                <div id="UserTable"></div>
                <button>click to submit</button>
                </form> 

            </div>
        )
    }
}