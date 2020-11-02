import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { MainPanel } from './MainPanel';
import { IState } from '../../interfaces/interfaces';
import { createStore } from 'redux';
import { reducer } from '../../store/reducer';
import { Provider } from 'react-redux';
import { Drawer, Layout, Avatar } from 'antd';
import { Hamburger } from '../../common/styles';
import { MediaPanel } from '../MediaPanel/MediaPanel';

const { Header, Content } = Layout;

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('<MainPanel /> component', () => {
        const mockInitialState: IState = {
                backgroundColor: '',
                fontColor: '',
                mediaData: [],
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
                expect(wrapper.find(Drawer).length).toEqual(1);

                wrapper.find(Hamburger).simulate('click');
                expect(wrapper.find('.h5').length).toEqual(3);
                
                expect(wrapper.find(Header).length).toEqual(1);
                expect(wrapper.find(Hamburger).length).toEqual(1);
                expect(wrapper.find(Avatar).length).toEqual(1);
                expect(wrapper.find(Content).length).toEqual(1);
                expect(wrapper.find(MediaPanel).length).toEqual(1);
	})
})