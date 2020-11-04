import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { MediaAccordion } from './MediaAccordion';
import { IState, IMediaButtonOwnProps } from '../../interfaces/interfaces';
import { createStore } from 'redux';
import { reducer } from '../../store/reducer';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('<MediaAccordion /> component', () => {
	const mockInitialState: IState = {
		backgroundColor: '',
		fontColor: '',
		mediaData: [],
	}

	const testMediaData: IMediaButtonOwnProps = {
		backgroundColor: 'azure',
		fontColor: 'aquamarine',
		media: {
			"id": 1,
			"title": "Test song 1",
			"services": [
				{
					"id": 1,
					"providerName": "Spotify",
					"trackUrl": "https://open.spotify.com/embed/track/sfasgasouytt74"
				},
			]
		}
	}

	const getWrapper = (mockStore = createStore(reducer, mockInitialState)) => mount(
		<Provider store={mockStore}>
			<MediaAccordion {...testMediaData} />
		</Provider>
	)
	it('should mount correctly with menu items', () => {
		const wrapper = getWrapper();
		expect(wrapper.isEmptyRender()).toBe(false);
		expect(wrapper).toMatchSnapshot();
	})
})