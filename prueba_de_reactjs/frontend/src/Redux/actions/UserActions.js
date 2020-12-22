import { VERIFY_USER } from '../constants/action-types'

export function verifyUser(payload) {
    return { type: VERIFY_USER,
             user: payload
    }
}