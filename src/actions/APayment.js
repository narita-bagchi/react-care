function paymentsActionCreator(payments) {
  return {
    type: 'PAYMENTS',
    payments
  }
}

export function getPayments(data) {
  return function (dispatch) {
    fetch('http://localhost:3001/payments')
      .then(function(resp) { return resp.json(); })
      .then(function(data) {
          dispatch(paymentsActionCreator(data));
      });
    };
}

export function makePayment(data) {
	return function (dispatch) {
		fetch('http://localhost:3001/payments', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        }
      })
    	.then(
        function(resp) {
        return resp.json(); 
      }, function(resp) {
        return resp.json(); 
      });
    };
}