import React, { Component } from 'react';
import styled from 'styled-components';

import CPaymentBlock from '../components/payment/CPaymentBlock';

const CardOverlay = styled.div`
	background: white;
	height: 100%;
	width: 100%;
	position: absolute;
	z-index: 0;
	opacity:0.95;
	left: 0px;
	top: 0px;
    text-align: center;
    display: flex;
`;

const OverlayCloseButton = styled.button`
	position: absolute;
	background: white;
	border: none;
	top: 20px;
	right: 20px;
`;

export default class CCardOverlay extends Component {

	render() {
		return (<CardOverlay>
			<OverlayCloseButton onClick={this.props.toggleOverlay}>X</OverlayCloseButton>
			<CPaymentBlock {...this.props}/>
		</CardOverlay>);
	}
}
