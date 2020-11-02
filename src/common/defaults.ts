import { IState, IService } from '../interfaces/interfaces';
import { DefaultColors } from './constants';

export const defaultState: IState = {
	backgroundColor: DefaultColors.emerald,
	fontColor: DefaultColors.defaultGray,
	mediaData: []
}

export const defaultService: IService = {
	id: 1,
	providerName: 'No service provided',
	trackUrl: ''
}

