const initialState = {
  donate: 0,
  message: '',
  charities: [],
  payments: []
}

export function rootReducer (state = initialState, action) {
  switch (action.type) {
    case 'PAYMENTS':
      return Object.assign({}, state, {
        payments: action.payments,
      });
    case 'INIT_APP':
      return Object.assign({}, state, {
        charities: action.charities,
      });
    default: return state;
  }
}
