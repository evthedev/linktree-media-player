import { DefaultColors, MusicProvider, MediaType } from '../common/constants';

export interface IRoute {
	path: string;
	exact: boolean;
	sidebar: string;
	icon: React.FC,
	main: any
}

export interface IMediaOwnProps {
	type: MediaType.Classic | MediaType.Music | MediaType.Show
}

export interface IMediaBaseProps {
	backgroundColor: string;
	fontColor: string;
}

export interface IClassic extends IMediaBaseProps {
	id: number;
	link: string
}

export interface IShow extends IMediaBaseProps {
	id: number;
	date: string;
	location: string;
	url: string;
	ticketsAvailable: number
}

export interface IMusic extends IMediaBaseProps {
	id: number;
	services: IService[]
}
export interface IService {
	id: number;
	providerName: MusicProvider;
	trackUrl: string
}

// export interface IAddress {
// 	id: number;
// 	quarantine_address: string;
// 	quarantine_address_lat: number | string;
// 	quarantine_address_long: number | string;
// }
// export interface ISanitisedAddress {
// 	id: number;
// 	quarantineAddress: string;
// 	quarantineAddressLat: number;
// 	quarantineAddressLong: number;
// }

// export interface ISanitisedUser {
// 	date: string;
// 	arrivedTravellers: number;
// 	totalUsersProvidedConsent: number;
// 	travellersArrivedAndProvidedConsent: number;
// 	travellersArrivedAndCompletedSetup: number;
// }

// export interface IPill {
// 	backgroundColor: DefaultColors
// }

export interface IState {
	links: IClassic[],
	shows: IShow[],
	music: IMusic[]
}

// export interface IMapProps {
// 	addresses: ISanitisedAddress[]
// }