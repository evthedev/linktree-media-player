import React from 'react';

import classicLinkData from '../data/ClassicLink.json'
import musicData from '../data/Music.json'
import showsData from '../data/Show.json'

import { ICommandHandler, IMediaButtonOwnProps, IMusic, IShow } from '../interfaces/interfaces';
import { MediaType } from '../common/constants';

import { MediaAccordionPanelMusic } from '../components/MediaAccordionPanelMusic/MediaAccordionPanelMusic';
import { MediaButton } from '../components/MediaButton/MediaButton';
import { MediaAccordion } from '../components/MediaAccordion/MediaAccordion';
import { MediaAccordionPanelShows } from '../components/MediaAccordionPanelShows/MediaAccordionPanelShows';

export const commandHandlers: ICommandHandler[] = [
	{
		mediaType: MediaType.Classic,
		data: classicLinkData,
		mainComponent: (props: IMediaButtonOwnProps) => <MediaButton {...props} key={props.media.id}></MediaButton>
	},
	{
		mediaType: MediaType.Music,
		data: musicData,
		mainComponent: (props: IMediaButtonOwnProps) => <MediaAccordion {...props} key={props.media.id}></MediaAccordion>,
		subComponent: (props: IMusic | IShow) => <MediaAccordionPanelMusic {...props} key={props.id}></MediaAccordionPanelMusic>
	},
	{
		mediaType: MediaType.Show,
		data: showsData,
		mainComponent: (props: IMediaButtonOwnProps) => <MediaAccordion {...props} key={props.media.id}></MediaAccordion>,
		subComponent: (props: IMusic | IShow) => <MediaAccordionPanelShows {...props} key={props.id}></MediaAccordionPanelShows>
	}
]