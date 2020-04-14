const home = (state = {}, action) => {

  switch (action.type) {

    case 'init':
      return { homePage: '', error: false, }

    case 'getHomePage':
      return { ...state, homePage: action.data, error: false, }
    default:
      return state;
  }
};

export default home;