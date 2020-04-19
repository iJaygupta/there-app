const initialState = {
    token: '',
    userInfo: '',
    signupMsg: '',
    error: false,
    loading: true
};

const auth = (state = initialState, action) => {

    switch (action.type) {

        case 'init':
            return { token: '', userInfo: '', error: false, }

        case 'login':
            return { ...state, token: action.token, userInfo: action.userInfo, error: action.error, loading: action.loading }

        case 'signup':
            return { ...state, signupMsg: action.msg, error: action.error, loading: action.loading }
        default:
            return state;
    }
};

export default auth;