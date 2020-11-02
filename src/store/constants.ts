import { IClassicLink, IShow, IMusic, IMediaBaseProps } from '../interfaces/interfaces';

export const SET_MEDIA_BUTTON_STYLES = 'SET_MEDIA_BUTTON_STYLES';
export const SET_MEDIA_DATA = 'SET_MEDIA_DATA';

export interface SetMediaDataAction {
	type: typeof SET_MEDIA_DATA;
	payload: IMusic[] | IShow[] | IClassicLink[]
}

export interface setMediaButtonStylesAction {
	type: typeof SET_MEDIA_BUTTON_STYLES;
	payload: IMediaBaseProps
}

export type actionTypes = SetMediaDataAction | setMediaButtonStylesAction