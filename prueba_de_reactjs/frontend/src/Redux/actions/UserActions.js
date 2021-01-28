import { VERIFY_USER, LOGOUT } from '../constants/action-types'

export function verifyUser(payload) {
    return { type: VERIFY_USER,
             user: payload
    }
}

export function logout() {
    return {type: LOGOUT}
}