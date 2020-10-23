import { IClassic, IMusic, IShow } from '../interfaces/interfaces';
import { actionTypes, GET_LINKS, GET_MUSIC, GET_SHOWS, SET_LINKS, SET_MUSIC, SET_SHOWS } from "./constants";

export const getLinks = (): actionTypes => ({
	type: GET_LINKS,
})

export const getShows = (): actionTypes => ({
	type: GET_SHOWS,
})

export const getMusic = (): actionTypes => ({
	type: GET_MUSIC,
})

export const setLinks = (links: IClassic[]): actionTypes => ({
	type: SET_LINKS,
	payload: links
})

export const setShows = (shows: IShow[]): actionTypes => ({
	type: SET_SHOWS,
	payload: shows
})

export const setMusic = (music: IMusic[]): actionTypes => ({
	type: SET_MUSIC,
	payload: music
})
