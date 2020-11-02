import React from 'react';
import {
	LinkOutlined,
	VideoCameraOutlined,
	CustomerServiceOutlined,
  } from '@ant-design/icons';

import { IRoute } from '../interfaces/interfaces';
import { MediaType } from '../common/constants';
import { MediaPanel } from '../components/MediaPanel/MediaPanel';
import { commandHandlers } from './commandHandlers';

export const routes: IRoute[] = [
	{
	  path: "/",
	  exact: true,
	  sidebar: 'Links',
	  icon: <LinkOutlined />,
	  main: () => <MediaPanel commandHandler={commandHandlers.find(commandHandler => commandHandler.mediaType === MediaType.Classic)!}/>
	},
	{
	  path: "/shows",
	  exact: true,
	  sidebar: 'Shows',
	  icon: <VideoCameraOutlined />,
	  main: () => <MediaPanel commandHandler={commandHandlers.find(commandHandler => commandHandler.mediaType === MediaType.Show)!}/>
	},
	{
	  path: "/music",
	  exact: true,
	  sidebar: 'Music',
	  icon: <CustomerServiceOutlined />,
	  main: () => <MediaPanel commandHandler={commandHandlers.find(commandHandler => commandHandler.mediaType === MediaType.Music)!}/>
	},
];