import React from 'react';

import { IPlayer } from '../interfaces/interfaces';
import { MusicProvider } from '../common/constants';

import spotifyLogo from '../assets/images/icon-social-spotify@2x.png';
import appleMusicLogo from '../assets/images/icon-social-apple-music@2x.png';
import soundCloudLogo from '../assets/images/icon-social-soundcloud@2x.png';
import youtubeLogo from '../assets/images/icon-social-youtube@2x.png';
import deezerLogo from '../assets/images/icon-social-deezer@2x.png';
import tidalLogo from '../assets/images/icon-social-tidal@2x.png';
import bandcampLogo from '../assets/images/icon-social-bandcamp@2x.png';

export const players: IPlayer[] = [
	{
		musicProvider: MusicProvider.Spotify,
		logo: spotifyLogo,
		component: (trackUrl: string) => <iframe src={trackUrl} width="100%" height="100" frameBorder="0" title="Spotify" allow="encrypted-media"></iframe>
	},
	{
		musicProvider: MusicProvider.AppleMusic,
		logo: appleMusicLogo,
		component: (trackUrl: string) => <iframe allow="autoplay *; encrypted-media *;" frameBorder="0" title="Apple Music" height="100" style={{ width:'100%', maxWidth: '660px', overflow: 'hidden',background: 'transparent'}} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src={trackUrl}></iframe>
	},
	{
		musicProvider: MusicProvider.Soundcloud,
		logo: soundCloudLogo,
		component: (trackUrl: string) => <iframe width="100%" height="100" scrolling="no" frameBorder="no" title="Soundcloud" allow="autoplay" src={trackUrl + "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}></iframe>
	},
	{
		musicProvider: MusicProvider.YoutubeMusic,
		logo: youtubeLogo,
		// @TODO: Use correct player embed code
		component: (trackUrl: string) => <iframe src={trackUrl} width="300" height="380" frameBorder="0" title="Youtube" allow="encrypted-media"></iframe>
	},
	{
		musicProvider: MusicProvider.Deezer,
		logo: deezerLogo,
		// @TODO: Use correct player embed code
		component: (trackUrl: string) => <iframe src={trackUrl} width="300" height="380" frameBorder="0" title="Deezer" allow="encrypted-media"></iframe>
	},
	{
		musicProvider: MusicProvider.Tidal,
		logo: tidalLogo,
		// @TODO: Use correct player embed code
		component: (trackUrl: string) => <iframe src={trackUrl} width="300" height="380" frameBorder="0" title="Tidal" allow="encrypted-media"></iframe>
	},
	{
		musicProvider: MusicProvider.Bandcamp,
		logo: bandcampLogo,
		// @TODO: Use correct player embed code
		component: (trackUrl: string) => <iframe src={trackUrl} width="300" height="380" frameBorder="0" title="Bandcamp" allow="encrypted-media"></iframe>
	},
];
