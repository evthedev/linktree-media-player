import { IState, IService } from '../interfaces/interfaces';
import { DefaultColors } from './constants';

export const defaultState: IState = {
	backgroundColor: DefaultColors.emerald,
	fontColor: DefaultColors.defaultGray,
	mediaData: [
		{
			id: 1,
			title: "Link 1",
			link: "http://link1.com.au"
		},
		{
			id: 2,
			title: "Link 2",
			link: "http://link2.com.au"
		},
		{
			id: 3,
			title: "Link 3",
			link: "http://link3.com.au"
		}
	]
}

export const defaultService: IService = {
	id: 1,
	providerName: 'No service provided',
	trackUrl: ''
}

