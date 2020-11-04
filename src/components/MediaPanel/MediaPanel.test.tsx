import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { MemoryRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import thunk from 'redux-thunk';

import { IState } from '../../interfaces/interfaces';
import { reducer } from '../../store/reducer';

import { MainPanel } from '../MainPanel/MainPanel';

import { testClassicLinksState, testMusicState, testShowsState } from '../../common/testData';

afterEach(cleanup);

const renderWithMemoryRouter = (routes: string[], initialState: IState) => render(
	<Provider store={createStore(reducer, initialState, applyMiddleware(thunk))}>
		<MemoryRouter initialEntries={routes}>
			<MainPanel />
		</MemoryRouter>
	</Provider>
);

describe('<MediaPanel /> component', () => {
	
	// We test it this way because we know that it renders the media buttons or accordions, it is rendering the components specified in /config/routes.tsx and /config/commandHandlers correctly
	
	beforeEach(() => {
		const root = document.createElement('div');
		document.body.appendChild(root);
	});

	it('Should load classic links page with 2 media buttons with correct colors on "/" route', () => {
		renderWithMemoryRouter(['/'], testClassicLinksState);
		
		expect(screen.getAllByTestId('media-button')).toHaveLength(2);
		expect(screen.getAllByTestId('media-button')[0]).toHaveStyle(`
			background-color: black,
			color: darkgray
		`);
	})

	it('Should load shows page with 3 accordion buttons with correct colors on "/shows" route', () => {
		renderWithMemoryRouter(['/shows'], testShowsState);
		
		expect(screen.getAllByTestId('media-accordion')).toHaveLength(3);
		fireEvent.click(screen.getByText(/Test show 1/i));
		
		expect(screen.getAllByTestId('media-accordion-panel-shows')).toHaveLength(2);
		expect(screen.getByText(/Test show 1/i)).toHaveStyle(`
			background-color: gold,
			color: cyan
		`);
		expect(screen.getAllByTestId('media-accordion')[0]).toHaveTextContent('Test venue 1');
	})

	it('Should load music page with 2 accordion buttons with correct colors on "/music" route', () => {
		renderWithMemoryRouter(['/music'], testMusicState);
		
		expect(screen.getAllByTestId('media-accordion')).toHaveLength(2);
		fireEvent.click(screen.getByText(/Test song 1/i));
		
		expect(screen.getAllByTestId('media-accordion-panel-music')).toHaveLength(1);
		expect(screen.getByText(/Test song 1/i)).toHaveStyle(`
			background-color: azure,
			color: aquamarine
		`);
		expect(screen.getAllByTestId('media-accordion')[0]).toHaveTextContent('Test song 1');
	})
})