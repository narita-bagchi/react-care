import React, { Component } from 'react';
import { Row, Col, Popover, OverlayTrigger } from 'react-bootstrap';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import { CCardButton } from './common/CButton';
import CCardOverlay from './CCardOverlay';

const Card = styled.div`
	margin: 10px;
	border: 1px solid #ccc;
	height: 50vh;
	width: 100%;
	box-shadow: 1px 2px 5px 1px lightgrey;
	border-radius: 5px;
`;

const CharityCardImage = styled.div`
	height: 80%;
	width: 100%;
	background: url(${props => `/images/${props.imageName}`}) no-repeat center center;
	background-size: cover;
`;

const CharityDetailsDiv = styled.div`
	display: flex;
	height: 20%;
	align-items: center;
	padding: 10px;
`;

const CharityNameDiv = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-start;
`;

const CharityPaymentButtonDiv = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
`;

export default class CCharityCard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showOverlay: false
		};
		this.toggleOverlay = this.toggleOverlay.bind(this);	
	}

	toggleOverlay () {
		this.setState((prevState, props) => ({
			showOverlay: !prevState.showOverlay
		}));
	}

	render() {
		const popoverTotalDonation = ( 
			<Popover id={this.props.charityInfo.name+'popover'}
	    		placement="bottom"
	    		title="Total donation">10000 USD</Popover>);
		return(
	        <Col md={6} xs={12} sm={12}>
	        	<Card>
	        		<CharityCardImage imageName={this.props.charityInfo.image}/>
	          		<CharityDetailsDiv>
	          			<CharityNameDiv>{this.props.charityInfo.name}</CharityNameDiv>
	          			<CharityPaymentButtonDiv>
	          				<OverlayTrigger trigger={['hover', 'focus']}
      							placement="bottom"
      							overlay={popoverTotalDonation}>
	          					<FontAwesome name="heart" className="fa-heart fa-beat heart" />
	          				</OverlayTrigger>
	          				<CCardButton onClick={this.toggleOverlay}>Donate</CCardButton>
	            		</CharityPaymentButtonDiv>
	          		</CharityDetailsDiv>
	          		{ this.state.showOverlay && 
	          			<CCardOverlay charityInfo={this.props.charityInfo} toggleOverlay={this.toggleOverlay}/> }
	            </Card>
	        </Col>
	    );
    }
}
