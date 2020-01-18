import React from 'react';
import './sign-in.styles.scss';


class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email:'',
      password:''
    }
  }

  handleChange = event =>{
    const {value, name} = event.target;

    this.setState({[name]:value})
  }

  handleSubmit = event =>{
    event.preventDefault();

    this.setState({email: '', password: ''})
  }
  render(){
    return(
      <div className='sing-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input name="email" type="email" onChange={this.handleChange} value={this.state.email} required/>
          <lable>Email</lable>
          <input name="password" onChange={this.handleChange} type="password" value={this.state.password} required/>
          <lable>Password</lable>

          <input type="submit" value='Submit form'/>
        </form>
      </div>
    )
  }
}


export default SignIn;
