import React from 'react';
import {
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
  } from '@ant-design/icons';
import { IRoute } from '../interfaces/interfaces';
import { MediaType } from './constants';
import { MediaPanel } from '../components/MediaPanel/MediaPanel';

export const routes: IRoute[] = [
	{
	  path: "/",
	  exact: true,
	  sidebar: 'Links',
	  icon: () => <UserOutlined />,
	  main: <MediaPanel type={MediaType.Classic} />
	},
	{
	  path: "/shows",
	  exact: true,
	  sidebar: 'Shows',
	  icon: () => <VideoCameraOutlined />,
	  main: () => <MediaPanel type={MediaType.Show} />
	},
	{
	  path: "/music",
	  exact: true,
	  sidebar: 'Music',
	  icon: () => <UploadOutlined />,
	  main: () => <MediaPanel type={MediaType.Music} />
	},
];