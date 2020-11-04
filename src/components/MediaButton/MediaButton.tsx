import React from 'react';

import { StyledMediaButton } from '../../common/styles';
import { IClassicLink, IMediaButtonOwnProps } from '../../interfaces/interfaces';

export const MediaButton: React.FC<IMediaButtonOwnProps> = (props): JSX.Element => {

	const media = props.media as IClassicLink;

	return (
		<StyledMediaButton
			fontColor={props.fontColor}
			backgroundColor={props.backgroundColor}
			key={media.id}
			onClick={() => {window.open(media.link)}}
			data-testid="media-button"
		>
			<span >{media.title}</span>
		</StyledMediaButton>
	)
}