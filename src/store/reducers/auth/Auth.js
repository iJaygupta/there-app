const auth = (state = {}, action) => {

    switch (action.type) {

        case 'init':
            return { token: '', userInfo: '', error: false, }

        case 'login':
            return { ...state, token: action.token, userInfo: action.userInfo, error: false, }

        case 'signup':
            return { ...state, signupError: action.error, signupMsg: action.msg }
        default:
            return state;
    }
};

export default auth;