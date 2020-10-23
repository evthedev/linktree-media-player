import { defaultState } from '../common/defaults';
import { IState } from '../interfaces/interfaces';
import { actionTypes, SET_LINKS, SET_MUSIC, SET_SHOWS } from './constants';

export const reducer = (state: IState = defaultState, action: actionTypes): IState => {
	switch (action.type) {
		case SET_LINKS:
			return {
				...state,
				links: action.payload
			}	
		case SET_SHOWS:
			return {
				...state,
				shows: action.payload
			}	
		case SET_MUSIC:
			return {
				...state,
				music: action.payload
			}	
		default:
			return state		
	}
}
