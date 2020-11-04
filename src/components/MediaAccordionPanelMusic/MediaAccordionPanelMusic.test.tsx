import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { IMusic, IState } from '../../interfaces/interfaces';
import { reducer } from '../../store/reducer';

import { MediaAccordionPanelMusic } from './MediaAccordionPanelMusic';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('<MediaAccordionPanelMusic /> component', () => {
	const mockInitialState: IState = {
		backgroundColor: '',
		fontColor: '',
		mediaData: [],
	}

	const testMusicData: IMusic = {
		id: 1,
		title: "Test song 1",
		services: [
			{
				id: 1,
				providerName: "Spotify",
				trackUrl: "https://open.spotify.com/embed/track/sfasgasouytt74"
			},
		]
	}

	const getWrapper = (mockStore = createStore(reducer, mockInitialState)) => mount(
		<Provider store={mockStore}>
			<MediaAccordionPanelMusic {...testMusicData} />
		</Provider>
	)
	it('should mount correctly with menu items', () => {
		const wrapper = getWrapper();
		expect(wrapper.isEmptyRender()).toBe(false);
		expect(wrapper).toMatchSnapshot();
	})
})