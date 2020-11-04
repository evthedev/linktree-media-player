import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from '../../store/reducer';
import { IShow, IState } from '../../interfaces/interfaces';

import { MediaAccordionPanelShows } from './MediaAccordionPanelShows';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('<MediaAccordionPanelShows /> component', () => {
	const mockInitialState: IState = {
		backgroundColor: '',
		fontColor: '',
		mediaData: [],
	}

	const testShowData: IShow = {
		id: 1,
		title: "What The Funk",
		showDetails: [
			{
				id: 1,
				date: "Oct 22 2011",
				location: "Melbourne",
				url: "http://show1link1.com.au",
				ticketsAvailable: 3
			},
		]
	}

	const getWrapper = (mockStore = createStore(reducer, mockInitialState)) => mount(
		<Provider store={mockStore}>
			<MediaAccordionPanelShows {...testShowData} />
		</Provider>
	)
	it('should mount correctly with menu items', () => {
		const wrapper = getWrapper();
		expect(wrapper.isEmptyRender()).toBe(false);
		expect(wrapper).toMatchSnapshot();
	})
})