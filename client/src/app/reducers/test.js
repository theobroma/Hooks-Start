export const usersInitialState = {
  data: [],
  pending: false,
  errorMessage: 'none',
};

function test(state = usersInitialState, action) {
  return state;
}

export default test;
