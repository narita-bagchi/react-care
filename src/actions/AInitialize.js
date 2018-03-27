

function initAppActionCreator(charities) {
  return {
    type: 'INIT_APP',
    charities
  }
}

export function initApp() {
	return function (dispatch) {
		fetch('http://localhost:3001/charities')
    	.then(function(resp) { return resp.json(); })
    	.then(function(data) {
      		dispatch(initAppActionCreator(data));
    	});
    };
}