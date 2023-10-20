import actionTypes from "../actions/actionTypes";

const initState = {
    setOpenForgotPasswordModal: null,
}

const actionReducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.SET_OPEN_FORGOTPASSWORD_MODAL: {
            return {
                ...state,
                setOpenForgotPasswordModal: action.setOpenModal,
            }
        }
        default: {
            return state;
        }
    }
}

export default actionReducer;