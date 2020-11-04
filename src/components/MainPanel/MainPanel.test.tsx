import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Drawer, Layout, Avatar } from 'antd';
import thunk from 'redux-thunk';

import { IState } from '../../interfaces/interfaces';
import { reducer } from '../../store/reducer';
import { Hamburger } from '../../common/styles';

import { MainPanel } from './MainPanel';
import { MediaPanel } from '../MediaPanel/MediaPanel';
import { BrowserRouter as Router } from 'react-router-dom';

const { Header, Content } = Layout;

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('<MainPanel /> component', () => {
	const mockInitialState: IState = {
		backgroundColor: '',
		fontColor: '',
		mediaData: [],
	}

	const getWrapper = (mockStore = createStore(reducer, mockInitialState, applyMiddleware(thunk))) => mount(
		<Provider store={mockStore}>
			<Router>
				<MainPanel />
			</Router>
		</Provider>
	)
	it('should mount correctly', () => {
		const wrapper = getWrapper();
		expect(wrapper.isEmptyRender()).toBe(false);
		expect(wrapper).toMatchSnapshot();
		
		// Sidebar
		expect(wrapper.find(Drawer).length).toEqual(1);
		wrapper.find(Hamburger).simulate('click');

		// Sidebar links
		expect(wrapper.find('.h5').length).toEqual(3);
		
		// User handle
		expect(wrapper.find(Header).length).toEqual(1);
		
		// Hamburger menu toggle
		expect(wrapper.find(Hamburger).length).toEqual(1);
		
		expect(wrapper.find(Avatar).length).toEqual(1);
		expect(wrapper.find(Content).length).toEqual(1);
		expect(wrapper.find(MediaPanel).length).toEqual(1);
	})
})