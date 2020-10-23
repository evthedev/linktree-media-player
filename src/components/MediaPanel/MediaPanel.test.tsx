import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { SideMenu } from './MediaPanel';
import { IState } from '../../interfaces/interfaces';
import { createStore } from 'redux';
import { reducer } from '../../store/reducer';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('<SideMenu /> component', () => {
        const mockInitialState: IState = {
                addresses: [],
                users: []
        }

        const getWrapper = (mockStore = createStore(reducer, mockInitialState)) => mount(
                <Provider store={mockStore}>
                        <Router>
                                <SideMenu />
                        </Router>
                </Provider>
        )
        it('should mount correctly with menu items', () => {
                const wrapper = getWrapper();
                expect(wrapper.isEmptyRender()).toBe(false);
                expect(wrapper).toMatchSnapshot();
                expect(wrapper.find('h4').length).toEqual(6);
	})
})