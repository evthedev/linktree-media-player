import React, { Fragment, useEffect, useState } from 'react';
import { MediaStyledPanel } from '../../common/styles';
import { IMusic, IShow, IService } from '../../interfaces/interfaces';

import iconRightArrow from '../../assets/images/icon-right-arrow@2x.png';

import { players } from '../../config/players';
import { defaultService } from '../../common/defaults';

export const MediaAccordionPanelMusic: React.FC<IMusic | IShow> = (props): JSX.Element => {

	const { services } = props as IMusic;

	const [ activeService, setActiveService ] = useState<IService>(defaultService);
	
	const playerComponent = players.find(({musicProvider}) => musicProvider === activeService.providerName)?.component;

	useEffect(() => {
		// set first item of services as the embedded player
		setActiveService(services[0]);
	}, [services]);

	const handlePanelClick = (servicesItem: IService) => {
		setActiveService(servicesItem);
	}
	
	return (
		<Fragment>			
			{ playerComponent && playerComponent(activeService.trackUrl) }
			{ services && services.map(servicesItem =>
				<MediaStyledPanel className="media-panel__panel" key={servicesItem.id} onClick={() => handlePanelClick(servicesItem)}>
					<img className="media-panel__icon" src={ players.find(({musicProvider}) => musicProvider === servicesItem.providerName)?.logo } alt={servicesItem.providerName} />
					<h6 className="media-panel__title">{ servicesItem.providerName }</h6>
					<img className="media-panel__arrow" src={iconRightArrow} alt="icon-right-arrow"/>
				</MediaStyledPanel>
			)}			
		</Fragment>
	)
}
