import * as actionType from '../constants/userinfo'

const initialState = {}

export default function userinfo(state = initialState, action) {
    switch (action.type) {
        case actionType.USERINFO_LOGIN: 
            return action.data
        case actionType.UPDATE_CITYNAME:
            return action.data
        default: 
            return state
    }
}