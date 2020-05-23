const initialState = {
  profileDetails: '',
  error: false,
  loading: true
};

const auth = (state = initialState, action) => {

  switch (action.type) {

    case 'init':
      return { token: '', profileDetails: '', error: false, }

    case 'getProfileDetails':
      return { ...state, profileDetails: action.data, error: action.error, loading: action.loading }

    default:
      return state;
  }
};

export default auth;