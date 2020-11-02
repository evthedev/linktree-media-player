import React, { Fragment } from 'react';

import { MediaStyledPanel } from '../../common/styles';
import { IMusic, IShow, IShowDetails } from '../../interfaces/interfaces';

import iconRightArrow from '../../assets/images/icon-right-arrow@2x.png';

export const MediaAccordionPanelShows: React.FC<IMusic | IShow> = (props): JSX.Element => {

	const { showDetails } = props as IShow;

	const isAvailable = (showDetailsItem: IShowDetails): boolean => showDetailsItem.ticketsAvailable > 0

	const handlePanelClick = (showDetailsItem: IShowDetails) => {
		if (!isAvailable(showDetailsItem)) {
			return false;
		}
		window.open(showDetailsItem.url);
	}
	
	return (
		<Fragment>			
			{ showDetails && showDetails.map(showDetailsItem =>
				<MediaStyledPanel className="media-panel__panel" key={showDetailsItem.id} onClick={() => handlePanelClick(showDetailsItem)}>
					<div className="media-panel__details">
						<h6 className="media-panel__date">{ showDetailsItem.date }</h6>
						<h6 className="media-panel__location h8">{ showDetailsItem.location }</h6>
					</div>
					{ isAvailable(showDetailsItem) && <img className="media-panel__arrow" src={iconRightArrow} alt="icon-right-arrow"/> }
					{ !isAvailable(showDetailsItem) && <h6 className="h8">Sold out</h6> }
				</MediaStyledPanel>
			)}			
		</Fragment>
	)
}
