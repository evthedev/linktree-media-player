import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../common/routes';
import { IMediaOwnProps } from '../../interfaces/interfaces';

export const MediaPanel: React.FC<IMediaOwnProps> = (): JSX.Element => {
	
	return (
		<Fragment>
			
			<ul style={{ listStyleType: "none", padding: 0 }}>
				{ routes.map(route => (
					<li className='margin-t-3 margin-b-3' key={route.path}><Link to={route.path} className='padding-t-3 padding-b-3'><h4 className='font-color white t400'>{route.icon}&nbsp;&nbsp; {route.sidebar}</h4></Link></li>
				))}
			</ul>
		</Fragment>
	)
}