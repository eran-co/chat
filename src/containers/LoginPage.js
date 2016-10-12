import React, {PropTypes} from 'react';

import {connect} from 'react-redux';
import '../styles/login.scss';
import LoginForm from '../components/LoginForm';
import {login as loginAction} from '../actions/authActions';

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      userName: '',
      password: '',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  login(event) {
    event.preventDefault();
    // TODO move to action
    const formData = new FormData(event.target);
    this.props.dispatch(loginAction(formData.get('userName'), formData.get('password')));
    // post({
    //   url: 'http://localhost:9000/login',
    //   data: {
    //     userName: formData.get('userName'),
    //     password: formData.get('password'),
    //   },
    // });
  }

  render() {
    return (
    <div>
      <h2>Login in to start chatting</h2>

    <LoginForm
      userName={this.state.userName}
      password={this.state.password}
      handleChange={this.handleChange.bind(this)}
      login={this.login.bind(this)}
    />
    </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(
mapStateToProps
)(LoginPage);

