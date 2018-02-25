export default (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        uid: action.uid,

      };
    case 'ADD_USER_INFO':
      return {
        displayName: action.displayName,
        email: action.email
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};