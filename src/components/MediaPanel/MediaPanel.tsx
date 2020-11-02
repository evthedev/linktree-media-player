import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IMediaOwnProps, IState, IMedia } from '../../interfaces/interfaces';
import { clearData, fetchFakeMedia } from '../../store/actions';

export const MediaPanel: React.FC<IMediaOwnProps> = (props): JSX.Element => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchFakeMedia(props.commandHandler.mediaType))
		return(() => {
			dispatch(clearData())
		})
	}, [props.commandHandler.mediaType, dispatch])

	const backgroundColor = useSelector((state: IState) => state.backgroundColor)
	const fontColor = useSelector((state: IState) => state.fontColor)
	const mediaData = useSelector((state: IState) => state.mediaData)

	return (
		<Fragment>
			{ (mediaData as Array<IMedia>).map((media: IMedia) => (
				props.commandHandler.mainComponent({ backgroundColor, fontColor, media, subComponent: props.commandHandler.subComponent })
			))}
		</Fragment>
	)
}