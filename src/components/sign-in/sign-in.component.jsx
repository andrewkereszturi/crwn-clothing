import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

class SignIn extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value})
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email:'', password: ''})
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            label="email"
            type="email"
            value={this.state.email}            
            handleChange={this.handleChange}
            required
           />
          <FormInput 
            name="password" 
            label="password"
            type="password"
            value={this.state.password} 
            handleChange={this.handleChange}
            required
         />
          <CustomButton type="submit"> Sign in </CustomButton>
        </form>
      </div>
      
    )
  }
}

export default SignIn;