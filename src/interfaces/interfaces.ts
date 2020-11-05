import { MediaType, MusicProvider } from '../common/constants';

export interface IRoute {
	path: string;
	exact: boolean;
	sidebar: string;
	icon: any,
	main: React.FC
}

export interface IMediaOwnProps {
	commandHandler: ICommandHandler
}

export interface IMediaButtonOwnProps {
	backgroundColor: string;
	fontColor: string;
	media: IMedia,
	subComponent?: React.FC<IMusic | IShow>
}

export interface IMediaBaseProps {
	backgroundColor: string;
	fontColor: string;
}

export interface IClassicLink {
	id: number;
	title: string;
	link: string;
}

export interface IClassicLinkData extends IMediaBaseProps {
	results: IClassicLink[]
}

export interface IShow {
	id: number;
	title: string;
	showDetails: IShowDetails[];
}

export interface IShowDetails {
	id: number;
	date: string;
	location: string;
	url: string;
	ticketsAvailable: number
}

export interface IShowData extends IMediaBaseProps {
	results: IShow[]
}

export interface IMusic {
	id: number;
	title: string;
	services: IService[]
}

export interface IMusicData extends IMediaBaseProps {
	results: IMusic[]
}

export interface IService {
	id: number;
	providerName: string;
	trackUrl: string
}

export interface IState {
	backgroundColor: string,
	fontColor: string,
	mediaData: IClassicLink[] | IShow[] | IMusic[]
}

export interface ICommandHandler {
	mediaType: MediaType;
	data: IClassicLinkData | IShowData | IMusicData,
	mainComponent: React.FC<IMediaButtonOwnProps>
	subComponent?: React.FC<IMusic | IShow>
}

export interface IPlayer {
	musicProvider: MusicProvider,
	logo: string,
	component: React.FC<string>
}

export type IMedia = IClassicLink | IMusic | IShow