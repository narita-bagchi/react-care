import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as paymentActions from '../../actions/APayment';
import { CCardButton } from '../common/CButton';

const PaymentBlock = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export class CPaymentBlock extends Component {

	constructor(props) {
		super(props);
		this.state = {
			denomination: 10
		};
		this.makePayment = this.makePayment.bind(this);
		this.setDenomination = this.setDenomination.bind(this);
	}

	setDenomination (event) {
		this.setState({
			denomination: event.target.value
		});
	}

	makePayment () {
		this.props.toggleOverlay();

		this.props.makePayment({
			charitiesId: this.props.charityInfo.id,
			amount: 20,
			currency: 'THB'
		});
	}

	render() {
		const payments = [10, 20, 50, 100, 150].map((amount, j) => (
	      <label style={{margin: '2px'}} key={j}>
	        <input
	          type="radio"
	          name="payment"
	          value= {amount}
	          checked={this.state.denomination == amount}
	          onChange={this.setDenomination}
	          /> {amount}
	      </label>
    	));
		return (
			<PaymentBlock>
	  			<label> Select the amount to donate (USD) </label>
	  			<div>{payments}</div>
	  			<CCardButton onClick={this.makePayment}>Pay</CCardButton>
	  		</PaymentBlock>);
	}
}
export default connect(null, paymentActions)(CPaymentBlock);
