import React from 'react';

import { Collapse } from 'antd';

import { IMusic, IShow, IMediaButtonOwnProps } from '../../interfaces/interfaces';
import { StyledPanel } from '../../common/styles';

export const MediaAccordion: React.FC<IMediaButtonOwnProps> = React.memo((props): JSX.Element => {

	const media = props.media as IMusic | IShow;
	
	return (
		<Collapse accordion={false} bordered={false} ghost={true} key={media.id} >
			<StyledPanel header={props.media.title} key={media.id} showArrow={false} {...props}>
				{ props.subComponent && props.subComponent(media) }
			</StyledPanel>
		</Collapse>
	)
});