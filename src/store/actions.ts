import { Dispatch } from 'react';
import { IClassicLink, IMediaBaseProps, IMusic, IShow } from '../interfaces/interfaces';
import { actionTypes, SET_MEDIA_BUTTON_STYLES, SET_MEDIA_DATA } from "./constants";
import { MediaType } from '../common/constants';
import { commandHandlers } from '../config/commandHandlers';

export const setMediaButtonStyles = (mediaButtonStyles: IMediaBaseProps): actionTypes => ({
	type: SET_MEDIA_BUTTON_STYLES,
	payload: mediaButtonStyles
})

export const setMediaData = (mediaData: IClassicLink[] | IShow[] | IMusic[]): actionTypes => ({
	type: SET_MEDIA_DATA,
	payload: mediaData
})

export const clearData = () => (
	(dispatch: Dispatch<actionTypes>) => {
		dispatch(setMediaData([]));
	}
)

export const fetchFakeMedia = (type: MediaType) => (
	async (dispatch: Dispatch<actionTypes>) => {
		// Get actionHandler for the specific media type
		
		// Get data for the specific media type
		const data = commandHandlers.filter(commandHandler => commandHandler.mediaType === type)[0].data;
		
		// Use a delay to simulate a delay when fetching from 'server'
		setTimeout(() => {
			dispatch(setMediaButtonStyles({
				backgroundColor: data.backgroundColor,
				fontColor: data.fontColor
			}))
			dispatch(setMediaData(data.results))
		}, 200)

	}
)
