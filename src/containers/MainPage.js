import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
// import '../styles/login.scss';

export class MainPage extends React.Component {
  render() {
    return (
      <div>
        <h2>welcome to the main page</h2>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(
  mapStateToProps
)(MainPage);

