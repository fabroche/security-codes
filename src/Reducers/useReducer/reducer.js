export const initialState = {
    inputValue: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false
};


const reducerObject = (state, payload) => ({
    ERROR: {
        ...state,
        error: true,
        loading: false
    },
    CONFIRM: {
        ...state,
        error: false,
        loading: false,
        confirmed: true
    },
    CHECK: {
        ...state,
        loading: true
    },
    DELETE: {
        ...state,
        deleted: true,
        confirmed: false
    },
    RESET: {
        ...state,
        confirmed: false,
        deleted: false,
        inputValue: ''
    },
    WRITE: {
        ...state,
        inputValue: payload
    }
})

export function reducer(state, action) {

    return reducerObject(state, action.payload)[action.type] || initialState
}