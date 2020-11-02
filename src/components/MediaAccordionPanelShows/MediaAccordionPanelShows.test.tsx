import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { MediaButton } from './MediaButton';
import { IState } from '../../interfaces/interfaces';
import { createStore } from 'redux';
import { reducer } from '../../store/reducer';
import { Provider } from 'react-redux';
import { MediaType } from '../../common/constants';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe.skip('<SideMenu /> component', () => {
        const mockInitialState: IState = {
                backgroundColor: '',
                fontColor: '',
                mediaData: [],
        }

        const getWrapper = (mockStore = createStore(reducer, mockInitialState)) => mount(
                <Provider store={mockStore}>
                        <Router>
                                {/* <MediaButton type={ MediaType.Music }/> */}
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