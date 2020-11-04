import { IState } from "../interfaces/interfaces";
import { DefaultColors } from './constants';

export const testClassicLinksState: IState = {
	backgroundColor: 'lightblue',
	fontColor: 'darkgray',
	mediaData: [
		{
			id: 1,
			title: "Test Link 1",
			link: "http://link1.com.au"
		},
		{
			id: 2,
			title: "Test Link 2",
			link: "http://link2.com.au"
		},
	]
}

export const testMusicState: IState = {
	backgroundColor: 'azure',
	fontColor: 'aquamarine',
	mediaData: [
		{
			"id": 1,
			"title": "Test song 1",
			"services": [
				{
					"id": 1,
					"providerName": "Spotify",
					"trackUrl": "https://open.spotify.com/embed/track/sfasgasouytt74"
				},
			]
		},
		{
			"id": 2,
			"title": "Test song 2",
			"services": [
				{
					"id": 1,
					"providerName": "Soundcloud",
					"trackUrl": "https://open.spotify.com/embed/track/fgjhwkjfhdgkfjhg"
				},
			]
		}
	]
}
export const testShowsState: IState = {
	backgroundColor: 'gold',
	fontColor: 'cyan',
	mediaData: [
		{
			id: 1,
			title: "Test show 1",
			showDetails: [
				{
					id: 1,
					date: "Oct 22 2011",
					location: "Test venue 1",
					url: "http://show1link1.com.au",
					ticketsAvailable: 3
				},
				{
					id: 2,
					date: "Oct 24 2011",
					location: "Test venue 2",
					url: "http://show1link2.com.au",
					ticketsAvailable: 9
				},
			]
		},
		{
			id: 2,
			title: "Test show 2",
			showDetails: [
				{
					id: 1,
					date: "Nov 27 2011",
					location: "Test venue 1",
					url: "http://show2link1.com.au",
					ticketsAvailable: 30
				},
				{
					id: 2,
					date: "Nov 29 2011",
					location: "Test venue 2",
					url: "http://show2link2.com.au",
					ticketsAvailable: 0
				}
			]
		},
		{
			id: 3,
			title: "Test show 3",
			showDetails: [
				{
					id: 1,
					date: "Oct 27 2011",
					location: "Test venue 1",
					url: "http://show3link6.com.au",
					ticketsAvailable: 23
				}
			]
		}
	]
}