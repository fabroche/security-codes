export const initialState = {
    inputValue: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false
};

export const actionTypes = {
    error: 'ERROR',
    confirm: 'CONFIRM',
    check: 'CHECK',
    delete: 'DELETE',
    reset: 'RESET',
    write: 'WRITE',
}

const reducerObject = (state, payload) => ({
    [actionTypes.error]: {
        ...state,
        error: true,
        loading: false
    },
    [actionTypes.confirm]: {
        ...state,
        error: false,
        loading: false,
        confirmed: true
    },
    [actionTypes.check]: {
        ...state,
        loading: true
    },
    [actionTypes.delete]: {
        ...state,
        deleted: true,
        confirmed: false
    },
    [actionTypes.reset]: {
        ...state,
        confirmed: false,
        deleted: false,
        inputValue: ''
    },
    [actionTypes.write]: {
        ...state,
        inputValue: payload
    }
})

export function reducer(state, action) {

    return reducerObject(state, action.payload)[action.type] || initialState
}