import { Component } from "react";

class UserTable extends Component {
  constructor() {
    super();
    this.state = { F_name: "", L_name: "", Age: "", Email: "", Password: "" };
  }
  
  printUserTable() {
    document.getElementById("headDiv").innerHTML = `
        
        `;
  }
  render() {
    return (
      <div id="headDiv">
        {/* <table>
          <thead>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
    );
  }
}
