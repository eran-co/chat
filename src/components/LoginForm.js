import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.login} className="login-container">
      <TextField
        hintText="eg. JohnDoe8"
        floatingLabelText="User name"
        fullWidth={true}
        name="userName"
        value={props.userName}
        onChange={props.handleChange}
      /> <br/>
      <TextField
        floatingLabelText="Password"
        type="password"
        name="password"
        fullWidth={true}
        value={props.password}
        onChange={props.handleChange}
      /><br/>
      <RaisedButton
        className="login-btn"
        label="Login"
        primary={true}
        fullWidth={true}
        type="submit"
      />
    </form>
  );
};

LoginForm.propTypes = {
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LoginForm;

