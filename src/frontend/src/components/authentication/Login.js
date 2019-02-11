import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <div>
        <form actions="" method="POST">
          Email: <input type="text" name="email"/><br /><br />
          Password: <input type="password" name="pwd"/><br /><br />
          <input type="submit" value="submit" />
        </form>
      </div>
      
    )
  }
}

export default Login
