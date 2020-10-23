import styled from 'styled-components';
import { IMediaBaseProps } from '../interfaces/interfaces';
import { DefaultColors } from './constants';

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
// export const Pill = styled.div`
// 	background-color: ${(props:IPill) => props.backgroundColor || DefaultColors.emerald};
// 	border-radius: 12px;
// 	padding: 4px 10px;
// 	span {
// 		font-size: 12px;
// 		font-weight: bold;
// 		color: white;
// 	}
// `
export const MediaButton = styled.div`
	background-color: ${(props:IMediaBaseProps) => props.backgroundColor || DefaultColors.emerald};
	border-radius: 4px;
	padding: 10px 20px;
	transition: all 0.2s ease-in-out;
	span {
		font-size: 14px;
		font-weight: regular;
		color: ${(props:IMediaBaseProps) => props.fontColor || DefaultColors.defaultGray};
		transition: all 0.2s ease-in-out;
		&:hover {
			transition: all 0.2s ease-in-out;
			color: ${(props:IMediaBaseProps) => props.backgroundColor || DefaultColors.emerald};
		}
	}
	&:hover {
		transition: all 0.2s ease-in-out;
		background-color: ${(props:IMediaBaseProps) => props.fontColor || DefaultColors.defaultGray};
	}
`
