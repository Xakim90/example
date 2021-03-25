const initialState = {
    values: [],
    loaded: false
};

export default function formWizardReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_SUCCESS':
        return {
          ...state,
          values: action.payload,
          loaded: true,
        };
      default:
        return state;
    }
}
