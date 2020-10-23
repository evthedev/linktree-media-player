import { IClassic, IShow, IMusic } from '../interfaces/interfaces';

export const GET_LINKS = 'GET_LINKS';
export const GET_SHOWS = 'GET_SHOWS';
export const GET_MUSIC = 'GET_MUSIC';
export const SET_LINKS = 'SET_LINKS';
export const SET_SHOWS = 'SET_SHOWS';
export const SET_MUSIC = 'SET_MUSIC';

export interface GetLinksAction {
	type: typeof GET_LINKS;
}

export interface GetShowsAction {
	type: typeof GET_SHOWS;
}

export interface GetMusicAction {
	type: typeof GET_MUSIC;
}

export interface SetLinksAction {
	type: typeof SET_LINKS;
	payload: IClassic[]
}

export interface SetShowsAction {
	type: typeof SET_SHOWS;
	payload: IShow[]
}

export interface SetMusicAction {
	type: typeof SET_MUSIC;
	payload: IMusic[]
}

export type actionTypes = GetLinksAction | GetShowsAction | GetMusicAction | SetLinksAction | SetShowsAction | SetMusicAction