import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {LoginPage} from './LoginPage';
import LoginForm from '../components/LoginForm';

describe('<LoginPage />', () => {
  it('should contain <FuelSavingsForm />', () => {
    const wrapper = shallow(<LoginPage />);

    expect(wrapper.find(LoginForm)).to.be.length(1);
  });
});
