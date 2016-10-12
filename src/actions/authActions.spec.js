import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './authActions';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';


chai.use(sinonChai);

describe('Actions', () => {
// TODO figure out how to write tests for async actions (thunk)
//   describe(ActionTypes.LOGIN, () => {
//     it('should create an action to login', () => {
//       const dispatch = sinon.spy();
//       const expected = {
//         type: ActionTypes.LOGIN,
//         userName: 'testUserName',
//         password: 'testPassword'
//       };
//
//       // we expect this to return a function since it is a thunk
//       expect(typeof (ActionCreators.login(expected.userName, expected.password))).to.equal('function');
//       // then we simulate calling it with dispatch as the store would do
//       const action = ActionCreators.login(expected.userName, expected.password)(dispatch);
//       // finally assert that the dispatch was called with our expected action
//       expect(dispatch).to.have.been.calledWith(ActionCreators.loginInProgress());
//       expect(dispatch.secondCall).to.have.been.calledWith(ActionCreators.loginInProgress());
//     });
//   });

  describe(ActionTypes.LOGIN_IN_PROGRESS, () => {
    it('should create an action to indicate login is in progress', () => {
      const expected = {
        type: ActionTypes.LOGIN_IN_PROGRESS,
      };
      expect(ActionCreators.loginInProgress()).to.deep.equal(expected);
    });
  });

  describe(ActionTypes.LOGIN_SUCSSEDED, () => {
    it('should create an action to handle success login', () => {
      const expected = {
        type: ActionTypes.LOGIN_SUCSSEDED,
        token: 'testToken',
      };
      expect(ActionCreators.loginSucceded(expected.token)).to.deep.equal(expected);
    });
  });

  describe(ActionTypes.LOGIN_FAILED, () => {
    it('should create an action to handle failed login', () => {
      const expected = {
        type: ActionTypes.LOGIN_FAILED,
        error: 'example error',
      };
      expect(ActionCreators.loginFailed(expected.error)).to.deep.equal(expected);
    });
  });
});
