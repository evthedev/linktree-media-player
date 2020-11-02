import { defaultState } from '../common/defaults';
import { IState } from '../interfaces/interfaces';
import { actionTypes, SET_MEDIA_BUTTON_STYLES, SET_MEDIA_DATA } from './constants';

export const reducer = (state: IState = defaultState, action: actionTypes): IState => {
	switch (action.type) {
		case SET_MEDIA_DATA:
			return {
				...state,
				mediaData: action.payload
			}	
		case SET_MEDIA_BUTTON_STYLES:
			return {
				...state,
				backgroundColor: action.payload.backgroundColor,
				fontColor: action.payload.fontColor
			}	
		default:
			return state		
	}
}
