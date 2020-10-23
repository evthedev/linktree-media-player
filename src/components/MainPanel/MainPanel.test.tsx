import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { MainPanel } from './MainPanel';
import { IState } from '../../interfaces/interfaces';
import { createStore } from 'redux';
import { reducer } from '../../store/reducer';
import { Provider } from 'react-redux';
import { SideMenu } from '../MediaPanel/MediaPanel';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('<MainPanel /> component', () => {
        const mockInitialState: IState = {
                addresses: [],
                users: []
        }

        const getWrapper = (mockStore = createStore(reducer, mockInitialState)) => mount(
                <Provider store={mockStore}>
                        <MainPanel />
                </Provider>
        )
        it('should mount correctly', () => {
                const wrapper = getWrapper();
                expect(wrapper.isEmptyRender()).toBe(false);
                expect(wrapper).toMatchSnapshot();
                expect(wrapper.find(SideMenu).length).toEqual(1);
	})
})