import React, { PropTypes } from 'react';
import Header from './Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = (props) => {
  return (
    <div>
        <Header />
      <br/>
      <div className="app-container">
        {props.children}
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

const wrapped = (props) => (
    <MuiThemeProvider>
        <App {...props}/>
    </MuiThemeProvider>
)

export default wrapped;
