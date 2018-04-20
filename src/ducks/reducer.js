const initialState = {}

// id, username, profile pic
const USER_INFO = 'USER_INFO'

export function reduceUserInfo(user){
    return{
        type: USER_INFO,
        payload: user
    }
}

export default function reducer(state = initialState, action){
    switch (action.type) {
        case USER_INFO:
            return Object.assign({}, state, {user: action.payload})
        default:
            return state;
    }
}