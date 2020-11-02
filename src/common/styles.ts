import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Collapse } from 'antd';

import { IMediaBaseProps } from '../interfaces/interfaces';
import { DefaultColors } from './constants';

import iconUiHamburger from '../assets/images/icon-ui-hamburger@2x.png'

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: 100vh;
`

export const Card = styled.div`
	background: #FCFCFC;
	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
	border-radius: 2px;
	display: flex;
	flex-direction: column;
`

export const Hamburger = styled.div`
	position: absolute;
	background-image: url('${iconUiHamburger}');
	background-size: contain;
	cursor: pointer;
	left: 10px;
    height: 14px;
    top: 10px;
    width: 24px;
`

export const StyledLink = styled(Link)`
	&:hover {
		span {
			color: ${DefaultColors.emerald};
		}
	}
`

export const StyledMediaButton = styled.div`
	background-color: ${(props:IMediaBaseProps) => props.backgroundColor || DefaultColors.emerald};
	border-radius: 4px;
	padding: 10px 20px;
	margin-bottom: 10px;
	transition: all 0.15s ease-in-out;
	cursor: pointer;
	span {
		font-size: 14px;
		font-weight: regular;
		color: ${(props:IMediaBaseProps) => props.fontColor || DefaultColors.defaultGray};
		transition: all 0.15s ease-in-out;
	}
	&:hover {
		span {
			transition: all 0.15s ease-in-out;
			color: ${(props:IMediaBaseProps) => props.backgroundColor || DefaultColors.emerald};
		}
	}
	&:hover {
		transition: all 0.15s ease-in-out;
		background-color: ${(props:IMediaBaseProps) => props.fontColor || DefaultColors.defaultGray};
	}
`

export const StyledMediaAccordion = styled(Collapse)`
	background-color: ${(props:IMediaBaseProps) => props.backgroundColor || DefaultColors.emerald};
	border-radius: 4px;
	padding: 10px 20px;
	margin-bottom: 10px;
	transition: all 0.15s ease-in-out;
	cursor: pointer;
	span {
		font-size: 14px;
		font-weight: regular;
		color: ${(props:IMediaBaseProps) => props.fontColor || DefaultColors.defaultGray};
		transition: all 0.15s ease-in-out;
	}
	&:hover {
		span {
			transition: all 0.15s ease-in-out;
			color: ${(props:IMediaBaseProps) => props.backgroundColor || DefaultColors.emerald};
		}
	}
	&:hover {
		transition: all 0.15s ease-in-out;
		background-color: ${(props:IMediaBaseProps) => props.fontColor || DefaultColors.defaultGray};
	}
`

export const StyledPanel = styled(Collapse.Panel)`
	background-color: transparent;
	margin-bottom: 10px;
	.ant-collapse-content {		
		background-color: #F5F7F8!important;
	}
	.ant-collapse-header {
		transition: all 0.15s ease-in-out!important;
		border-radius: 4px!important;
		padding: 10px 20px!important;
		background-color: ${(props:IMediaBaseProps) => props.backgroundColor || DefaultColors.emerald};
		color: ${(props:IMediaBaseProps) => props.fontColor || DefaultColors.defaultGray}!important;
		&:hover {
			transition: all 0.15s ease-in-out;
			background-color: ${(props:IMediaBaseProps) => props.fontColor || DefaultColors.defaultGray};
			color: ${(props:IMediaBaseProps) => props.backgroundColor || DefaultColors.emerald}!important;
		}
	}
`

export const MediaStyledPanel = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 12px 0;
	.media-panel__icon {
		margin-right: 20px;
		max-width: 24px;
	}
	.media-panel__title {
		margin-right: auto;
		margin-bottom: 0;
	}
	.media-panel__arrow {
		max-width: 12px;
	}
	.media-panel__details {
		text-align: left;
	}
	.media-panel__date {
		margin-bottom: 0;
	}
	.media-panel__location{
		margin-bottom: 0;
	}
`