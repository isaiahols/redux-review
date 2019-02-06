const initialState = {
    name: '',
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case UPDATE_NAME:
            const newState = { ...state, name: payload }
            return newState

        default:
            return state
    }
}
export default reducer

const UPDATE_NAME = "UPDATE_NAME"


export function updateName(name) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}