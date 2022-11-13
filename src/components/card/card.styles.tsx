import styled from 'styled-components';

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	/* backdrop-filter: blur(25px) saturate(130%);
	-webkit-backdrop-filter: blur(25px) saturate(130%); */
	background: linear-gradient(
		90deg,
		rgba(31, 31, 31, 0.75),
		rgba(45, 45, 45, 0.75)
	);
	height: 386px;
	width: 268px;
	margin: 0 auto;
	border-radius: 12px;
	border: 1px solid rgba(255, 255, 255, 0.125);
	padding: 25px;
	color: #f1f1f1;
	cursor: pointer;
	-moz-osx-font-smoothing: grayscale;
	backface-visibility: hidden;
	transform: translateZ(0);
	transition: transform 0.25s ease-out;

	&:hover {
		transform: scale(1.05);
	}
`;

export const CardImage = styled.img``;

export const CardName = styled.h2``;

export const CardAddress = styled.p``;
