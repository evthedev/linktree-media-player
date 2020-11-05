import React, { Fragment, useEffect, useState } from 'react';
import { MediaStyledPanel } from '../../common/styles';
import { IMusic, IShow, IService } from '../../interfaces/interfaces';

import iconRightArrow from '../../assets/images/icon-right-arrow@2x.png';

import { players } from '../../config/players';
import { defaultService } from '../../common/defaults';

export const MediaAccordionPanelMusic: React.FC<IMusic | IShow> = (props): JSX.Element => {

	// This component receives a union type of 'IMusic | IShow', but the commandhandler dictates that this component only handles IMusic media type, and we typecast accordingly
	const { services } = props as IMusic;

	const [ activeService, setActiveService ] = useState<IService>(defaultService);
	
	const playerComponent = players.find(({musicProvider}) => musicProvider === activeService.providerName)?.component; // we assume that the player object is always defined in config

	useEffect(() => {
		// we assume that onload, we always use the first item in services as the embedded player
		setActiveService(services[0]);
	}, [services]);

	const handlePanelClick = (servicesItem: IService) => {
		setActiveService(servicesItem);
	}
	
	return (
		<Fragment>			
			{ playerComponent && playerComponent(activeService.trackUrl) }
			{ services && services.map(servicesItem =>
				<MediaStyledPanel
					className="media-panel__panel"
					key={servicesItem.id}
					onClick={() => handlePanelClick(servicesItem)}
					data-testid='media-accordion-panel-music'
				>
					<img className="media-panel__icon" src={ players.find(({musicProvider}) => musicProvider === servicesItem.providerName)!.logo } alt={servicesItem.providerName} /> {/* We assume the player object is always defined in config */}
					<h6 className="media-panel__title">{ servicesItem.providerName }</h6>
					<img className="media-panel__arrow" src={iconRightArrow} alt="icon-right-arrow"/>
				</MediaStyledPanel>
			)}			
		</Fragment>
	)
}
