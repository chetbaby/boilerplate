import * as actionType from '../constants';

export const actions = {
  action: data => ({
    type: actionType.ACTION,
    payload: data,
  }),
};

export const asyncAction = searchWord =>
  function(dispatch) {
    return fetch('URI', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ property: searchWord }),
    })
      .then(response => response.json())
      .then(response => {
        dispatch(actions.action(''));
      });
  };
