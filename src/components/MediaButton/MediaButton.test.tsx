import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { IState, IClassicLink } from '../../interfaces/interfaces';
import { reducer } from '../../store/reducer';

import { MediaButton } from './MediaButton';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('<MediaButton /> component', () => {
	const mockInitialState: IState = {
		backgroundColor: '',
		fontColor: '',
		mediaData: [],
	}

	const testClassicLinkData: IClassicLink = {
		id: 2,
		title: "Test Link 2",
		link: "http://link2.com.au"
	}

	const getWrapper = (mockStore = createStore(reducer, mockInitialState)) => mount(
		<Provider store={mockStore}>
			<MediaButton fontColor='black' backgroundColor='darkblue' media={testClassicLinkData} />
		</Provider>
	)
	it('should mount correctly with menu items', () => {
		const wrapper = getWrapper();
		expect(wrapper.isEmptyRender()).toBe(false);
		expect(wrapper).toMatchSnapshot();
	})
})