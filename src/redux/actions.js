
const setValues = (value) => ({
  type: 'ADD_SUCCESS',
  payload: value,
});

export const actionsAPI = {
  setVals(vals) {
    return async (dispatch) => {
      dispatch(setValues( vals ));
    };
  },
};

